"use client";

import { useEffect, useMemo, useState } from "react";
import {
  FX as FX_SNAPSHOT,
  SNAPSHOT,
  SNAPSHOT_AS_OF,
  fmtMoney,
  tierApr,
  type AssetKey,
  type Currency,
  type PriceMap,
} from "@/lib/prices";

type FxMap = Record<Currency, number>;

/**
 * Live price ticker + loan calculator. Prices come from /api/prices
 * (CoinGecko proxy); the dated snapshot is the fallback, exactly as on the
 * original site. Currency selection applies to both the ticker and the
 * calculator.
 */
export default function Interactive() {
  const [prices, setPrices] = useState<PriceMap>(SNAPSHOT);
  const [fx, setFx] = useState<FxMap>(FX_SNAPSHOT);
  const [live, setLive] = useState(false);
  const [currency, setCurrency] = useState<Currency>("USD");
  const [asset, setAsset] = useState<AssetKey>("BTC");
  const [colAmt, setColAmt] = useState("0.25");
  const [ltv, setLtv] = useState(40);
  const [term, setTerm] = useState(6);
  const [pakv, setPakv] = useState(false);
  const [stress, setStress] = useState(-30);

  useEffect(() => {
    fetch("/api/prices")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("http"))))
      .then((d) => {
        if (!d?.prices?.BTC || !d?.prices?.ETH) return;
        setPrices(d.prices);
        setFx(d.fx);
        setLive(true);
      })
      .catch(() => {
        /* snapshot stays */
      });
  }, []);

  const calc = useMemo(() => {
    const amt = parseFloat(colAmt) || 0;
    const priceUSD = prices[asset].USD;
    const colUSD = amt * priceUSD;
    const loanUSD = (colUSD * ltv) / 100;
    let apr = tierApr(ltv);
    if (pakv) apr = apr * 0.75;
    const interest = loanUSD * (apr / 100) * (term / 12);
    const marginPrice = amt > 0 ? loanUSD / (0.7 * amt) : 0;
    const liqPrice = amt > 0 ? loanUSD / (0.83 * amt) : 0;

    let health = "";
    let healthColor = "";
    if (ltv <= 30) {
      health = "Healthy — wide buffer to the 70% margin-call line.";
      healthColor = "var(--ok)";
    } else if (ltv <= 40) {
      health =
        "Healthy — comfortable buffer. A ~43% price drop would trigger a margin call.";
      healthColor = "var(--ok)";
    } else {
      health =
        "Maximum LTV — a ~29% price drop triggers a margin call. Consider a lower LTV for the 5–8% tiers.";
      healthColor = "var(--warn)";
    }

    const newPrice = priceUSD * (1 + stress / 100);
    const newLTV = amt > 0 && loanUSD > 0 ? (loanUSD / (amt * newPrice)) * 100 : 0;
    let stressText = "Add collateral above to run the stress test.";
    let stressColor = "";
    if (amt > 0 && loanUSD > 0) {
      const prefix = `At ${fmtMoney(newPrice * fx[currency], currency)} your LTV becomes ${newLTV.toFixed(1)}% — `;
      if (newLTV < 70) {
        stressText = prefix + "still safe, no margin call.";
        stressColor = "var(--ok)";
      } else if (newLTV < 83) {
        stressText = prefix + "margin call: top up or repay part of the loan.";
        stressColor = "var(--warn)";
      } else {
        stressText = prefix + "partial liquidation would restore the loan's health.";
        stressColor = "var(--danger)";
      }
    }

    return {
      amt, colUSD, loanUSD, apr, interest, marginPrice, liqPrice,
      health, healthColor, stressText, stressColor,
    };
  }, [prices, asset, colAmt, ltv, term, pakv, stress, currency, fx]);

  const f = fx[currency];
  const colValueHint =
    calc.amt > 0
      ? `≈ ${fmtMoney(calc.colUSD * f, currency)} collateral value`
      : "";

  const tickItems = (key: AssetKey) => (
    <div className="tick-item" key={key}>
      <span className="sym" style={{ background: prices[key].color }}>
        {prices[key].sym}
      </span>
      <span>
        <small>
          {key} · {prices[key].name.toUpperCase()}
        </small>
        <b>{fmtMoney(prices[key][currency], currency)}</b>
      </span>
    </div>
  );

  return (
    <>
      {/* ================= TICKER ================= */}
      <div className="ticker-band">
        <div className="wrap">
          <div className="ticker-head">
            <span className="lbl">Collateral prices</span>
            <div className="cur-switch" role="group" aria-label="Display currency">
              {(["USD", "EUR", "PKR"] as Currency[]).map((c) => (
                <button
                  key={c}
                  type="button"
                  data-cur={c}
                  aria-pressed={currency === c}
                  onClick={() => setCurrency(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className="ticker-view" aria-label="Crypto prices">
            <div className="ticker-track" id="tickerTrack">
              {[0, 1].map((r) => (
                <span key={r} style={{ display: "contents" }}>
                  {(["BTC", "ETH", "USDT"] as AssetKey[]).map(tickItems)}
                  <div className="tick-item" aria-hidden={r === 1}>
                    <span className="sym" style={{ background: "var(--brand)" }}>
                      %
                    </span>
                    <span>
                      <small>LOAN APR</small>
                      <b>5–10% tiered</b>
                    </span>
                  </div>
                  <div className="tick-item" aria-hidden={r === 1}>
                    <span className="sym" style={{ background: "var(--gold)" }}>
                      P
                    </span>
                    <span>
                      <small>PAKV · BNB CHAIN</small>
                      <b>25% interest discount</b>
                    </span>
                  </div>
                </span>
              ))}
            </div>
          </div>
          <p className="price-note" id="priceNote">
            {live
              ? "Prices: CoinGecko, live — refreshed when this page loaded. Display currency applies to the ticker and calculator."
              : `Prices: CoinGecko snapshot, ${SNAPSHOT_AS_OF}. The calculator below uses these prices and refreshes them when the live feed is reachable.`}
          </p>
        </div>
      </div>

      {/* ================= CALCULATOR ================= */}
      <section className="calc-sec" id="calculator">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="tag">Loans · Calculator</span>
            <h2>See your loan before you take it</h2>
            <p>
              Every number a borrower needs — loan amount, exact rate tier,
              margin-call price and liquidation price — shown up front, not
              buried in terms. Stress-test a crash before it happens.
            </p>
          </div>
          <div className="calc-grid">
            <div className="panel rv">
              <h3>Your collateral</h3>
              <div className="field">
                <label>Collateral asset</label>
                <div className="asset-tabs">
                  <button
                    type="button"
                    className="asset-tab"
                    data-asset="BTC"
                    aria-pressed={asset === "BTC"}
                    onClick={() => setAsset("BTC")}
                  >
                    <span className="sym" style={{ background: "#f7931a" }}>₿</span>
                    <span>
                      <b>Bitcoin</b>
                      <small data-price-for="BTC">
                        {fmtMoney(prices.BTC[currency], currency)}
                      </small>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="asset-tab"
                    data-asset="ETH"
                    aria-pressed={asset === "ETH"}
                    onClick={() => setAsset("ETH")}
                  >
                    <span className="sym" style={{ background: "#627eea" }}>Ξ</span>
                    <span>
                      <b>Ethereum</b>
                      <small data-price-for="ETH">
                        {fmtMoney(prices.ETH[currency], currency)}
                      </small>
                    </span>
                  </button>
                </div>
              </div>
              <div className="field">
                <label htmlFor="colAmt">Collateral amount</label>
                <input
                  type="number"
                  id="colAmt"
                  value={colAmt}
                  min="0.001"
                  step="0.001"
                  inputMode="decimal"
                  onChange={(e) => setColAmt(e.target.value)}
                />
                <span className="hint" id="colValueHint">{colValueHint}</span>
              </div>
              <div className="field">
                <div className="range-row">
                  <label htmlFor="ltvRange" style={{ margin: 0 }}>
                    Loan-to-value (LTV)
                  </label>
                  <span className="range-val" id="ltvVal">{ltv}%</span>
                </div>
                <input
                  type="range"
                  id="ltvRange"
                  min="10"
                  max="50"
                  step="1"
                  value={ltv}
                  onChange={(e) => setLtv(parseInt(e.target.value, 10))}
                />
                <span className="hint">
                  Hard cap 50%. Margin call at 70% · partial liquidation at 83%.
                </span>
              </div>
              <div className="field">
                <label htmlFor="termSel">Term</label>
                <select
                  id="termSel"
                  value={term}
                  onChange={(e) => setTerm(parseInt(e.target.value, 10))}
                >
                  <option value="1">1 month</option>
                  <option value="3">3 months</option>
                  <option value="6">6 months</option>
                  <option value="12">12 months</option>
                </select>
              </div>
              <div className="field" style={{ marginBottom: 0 }}>
                <div className="switch-row">
                  <div className="txt">
                    <b>Pay with PAKV</b>
                    <span>25% off your interest rate</span>
                  </div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      id="pakvToggle"
                      checked={pakv}
                      onChange={(e) => setPakv(e.target.checked)}
                    />
                    <span className="tr"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="panel rv">
              <h3>Your loan</h3>
              <div className="out-hero">
                <div className="k">You receive</div>
                <div className="v" id="outLoan">
                  {fmtMoney(calc.loanUSD * f, currency)}
                </div>
                <div style={{ fontWeight: 600, color: "var(--ink2)", fontSize: ".9rem" }}>
                  in USDT / USDC, once live
                </div>
              </div>
              <div className="out-rows">
                <div className="out-row">
                  <span className="k">Interest rate (APR)</span>
                  <span className="v" id="outApr">
                    {Math.round(calc.apr * 100) / 100}%{pakv ? " (PAKV applied)" : " (tier rate)"}
                  </span>
                </div>
                <div className="out-row">
                  <span className="k">Interest over term</span>
                  <span className="v" id="outInterest">
                    {fmtMoney(calc.interest * f, currency)}
                  </span>
                </div>
                <div className="out-row">
                  <span className="k">Total to repay</span>
                  <span className="v" id="outTotal">
                    {fmtMoney((calc.loanUSD + calc.interest) * f, currency)}
                  </span>
                </div>
                <div className="out-row">
                  <span className="k">Margin call if price falls to</span>
                  <span className="v" id="outMargin">
                    {calc.amt > 0 ? fmtMoney(calc.marginPrice * f, currency) : "—"}
                  </span>
                </div>
                <div className="out-row">
                  <span className="k">Partial liquidation if price falls to</span>
                  <span className="v" id="outLiq">
                    {calc.amt > 0 ? fmtMoney(calc.liqPrice * f, currency) : "—"}
                  </span>
                </div>
              </div>
              <div className="health">
                <div className="bar">
                  <span
                    className="pin"
                    id="healthPin"
                    style={{ left: `calc(${Math.min(ltv, 100)}% - 2px)` }}
                  ></span>
                </div>
                <div className="lbls">
                  <span>LTV 0%</span>
                  <span>Call 70%</span>
                  <span>Liq. 83%</span>
                  <span>100%</span>
                </div>
                <div className="health-status" id="healthStatus" style={{ color: calc.healthColor }}>
                  {calc.health}
                </div>
              </div>
              <div className="stress">
                <h4>Stress test — what if the price crashes?</h4>
                <p>Drag to simulate a drop in the collateral price and watch your LTV.</p>
                <div className="range-row">
                  <label htmlFor="stressRange" style={{ margin: 0, fontWeight: 700, fontSize: ".9rem" }}>
                    Price change
                  </label>
                  <span className="range-val" id="stressVal">{stress}%</span>
                </div>
                <input
                  type="range"
                  id="stressRange"
                  min="-70"
                  max="0"
                  step="5"
                  value={stress}
                  onChange={(e) => setStress(parseInt(e.target.value, 10))}
                />
                <div className="stress-out" id="stressOut" style={{ color: calc.stressColor }}>
                  {calc.stressText}
                </div>
              </div>
              <p className="calc-note">
                Calculator for planning only — PakVault is pre-launch, no loans
                are being offered yet, and no funds move. Rates follow the
                locked 5–10% APR tiers below.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
