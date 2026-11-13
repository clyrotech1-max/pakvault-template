import Nav from "@/components/Nav";
import Effects from "@/components/Effects";
import Interactive from "@/components/Interactive";
import WaitlistForm from "@/components/WaitlistForm";

/**
 * PakVault home page — faithful Next.js conversion of the original single-file
 * site (same sections, copy and numbers). Server component; interactivity lives
 * in Nav / Interactive (ticker + calculator) / WaitlistForm / Effects.
 */
export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        
<div className="hero">
  <div className="hero-grid-bg" data-parallax="0.12"></div>
  <div className="hero-glow g1" data-parallax="0.06"></div>
  <div className="hero-glow g2" data-parallax="0.09"></div>
  <div className="hero-glow g3" data-parallax="0.04"></div>
  <div className="hero-glow g4" data-parallax="0.12"></div>
  <div className="wrap hero-inner">
    <div>
      <span className="hero-badge"><span className="dot"></span> Pre-launch — building &amp; testing in private</span>
      <h1>Borrow against your crypto. <span className="accent">Don't sell it.</span></h1>
      <p className="lede">PakVault turns your BTC and ETH into working cash — up to 50% of its value in USDT or USDC — while your crypto stays yours. Transparent LTV lines, partial liquidation only, and rates from 5% APR.</p>
      <div className="hero-ctas">
        <a className="btn btn-hero" href="#calculator">Try the loan calculator</a>
        <a className="btn btn-hero-ghost" href="#waitlist">Join the waitlist</a>
      </div>
      <div className="hero-points">
        <span><svg viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round"><path d="M4 12.5l5 5L20 6.5"/></svg> No credit check</span>
        <span><svg viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round"><path d="M4 12.5l5 5L20 6.5"/></svg> No rehypothecation</span>
        <span><svg viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round"><path d="M4 12.5l5 5L20 6.5"/></svg> Loans from $100</span>
      </div>
    </div>
    <div className="dash" data-parallax="-0.05">
      <div className="chip-float chip-btc" data-parallax="-0.14">
        <span className="ic">₿</span>
        <span>Bitcoin<small>Collateral accepted</small></span>
      </div>
      <div className="dash-card">
        <div className="dash-top"><span className="t">Loan health</span><span className="live-pill"><i></i>Example loan</span></div>
        <div className="dash-big">$7,235.80 <span style={{fontSize: "1rem", color: "var(--hero-ink2)"}}>USDT</span></div>
        <div className="dash-sub">against 0.25 BTC · LTV 40% · 8% APR tier</div>
        <div className="meter"><span className="meter-pin" style={{left: "40%"}}></span></div>
        <div className="meter-labels"><span>LTV 40%</span><span>Margin call 70%</span><span>Liquidation 83%</span></div>
        <div className="dash-rows">
          <div className="dash-row"><span className="k">Margin call price (BTC)</span><b>$41,347</b></div>
          <div className="dash-row"><span className="k">Liquidation price (BTC)</span><b>$34,871</b></div>
          <div className="dash-row"><span className="k">Collateral custody</span><b>Segregated · never re-lent</b></div>
        </div>
      </div>
      <div className="chip-float chip-pakv" data-parallax="0.11">
        <span className="ic">P</span>
        <span>PAKV holders<small>25% off interest</small></span>
      </div>
    </div>
  </div>
</div>


        <Interactive />
        
<section style={{padding: "56px 0 8px"}}>
  <div className="wrap">
    <div className="stats rv">
      <div className="stat"><b data-count="50" data-suffix="%">50%</b><span>Maximum loan-to-value — never more, by design</span></div>
      <div className="stat"><b>5–10%</b><span>APR range, set by your LTV tier — locked in the plan</span></div>
      <div className="stat"><b data-count="100" data-prefix="$">$100</b><span>Minimum loan — built for small holders, not just whales</span></div>
      <div className="stat"><b data-count="83" data-suffix="%">83%</b><span>Liquidation line — and only partial, never your whole stack</span></div>
    </div>
  </div>
</section>


        
<section id="products">
  <div className="wrap">
    <div className="sec-head rv">
      <span className="tag">One company · four products</span>
      <h2>An ecosystem, not four separate apps</h2>
      <p>Buy crypto on the exchange, borrow against it with Loans, and pay less for both with PAKV. Each product feeds the next — that's the whole strategy.</p>
    </div>
    <div className="prod-grid">
      <article className="prod featured rv">
        <div className="p-ic" style={{background: "var(--brand-soft)"}}><svg viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="13" rx="2.5"/><path d="M3 10.5h18M7 15.5h4"/></svg></div>
        <h3>PakVault Loans <span className="status-pill">First product</span></h3>
        <p>Crypto-backed loans against BTC and ETH. Keep your coins, get USDT or USDC, repay and withdraw your collateral in full.</p>
        <ul>
          <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round"><path d="M4 12.5l5 5L20 6.5"/></svg>Up to 50% LTV, margin call at 70%, partial liquidation at 83%</li>
          <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round"><path d="M4 12.5l5 5L20 6.5"/></svg>Top up collateral or repay partially at any time</li>
          <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round"><path d="M4 12.5l5 5L20 6.5"/></svg>Segregated custody — your collateral is never re-lent</li>
        </ul>
      </article>
      <article className="prod rv">
        <div className="p-ic" style={{background: "var(--gold-soft)"}}><svg viewBox="0 0 24 24" fill="none" stroke="var(--warn)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8h13l-3-3M20 16H7l3 3"/></svg></div>
        <h3>Exchange &amp; P2P <span className="status-pill later">Phase 2</span></h3>
        <p>Buy and sell BTC, ETH and USDT with escrow protection, including PKR on- and off-ramps for Pakistani users.</p>
        <ul>
          <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round"><path d="M4 12.5l5 5L20 6.5"/></svg>Escrow on every P2P trade — funds release only on confirmation</li>
          <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round"><path d="M4 12.5l5 5L20 6.5"/></svg>0.5–1% trading fee, discounted with PAKV</li>
          <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round"><path d="M4 12.5l5 5L20 6.5"/></svg>Same account and collateral as your loans</li>
        </ul>
      </article>
      <article className="prod rv">
        <div className="p-ic" style={{background: "var(--brand-soft)"}}><svg viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M9.5 15.5v-7h3.4a2.6 2.6 0 010 5.2H9.5"/></svg></div>
        <h3>PAKV Token <span className="status-pill later">With Loans launch</span></h3>
        <p>The utility token of the ecosystem, on BNB Chain. Not a hype coin — it does a job inside every PakVault product.</p>
        <ul>
          <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round"><path d="M4 12.5l5 5L20 6.5"/></svg>25% discount on loan interest when you hold / pay with PAKV</li>
          <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round"><path d="M4 12.5l5 5L20 6.5"/></svg>Lower exchange fees and priority access to new products</li>
          <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round"><path d="M4 12.5l5 5L20 6.5"/></svg>Built and tested on testnet first — public launch only after licensing</li>
        </ul>
      </article>
      <article className="prod rv">
        <div className="p-ic" style={{background: "var(--surface2)"}}><svg viewBox="0 0 24 24" fill="none" stroke="var(--ink2)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M6.5 6.5c0-1.4 2.5-2.3 5.5-2.3s5.5.9 5.5 2.3-2.5 2.3-5.5 2.3-5.5-.9-5.5-2.3zM6.5 12c0 1.4 2.5 2.3 5.5 2.3s5.5-.9 5.5-2.3M6.5 17.5c0 1.4 2.5 2.3 5.5 2.3s5.5-.9 5.5-2.3"/></svg></div>
        <h3>PakVault Stablecoin <span className="status-pill later">Later phase</span></h3>
        <p>A fully-reserved stablecoin is on the long-term roadmap — deliberately last, because it demands the highest capital and its own licence.</p>
        <ul>
          <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round"><path d="M4 12.5l5 5L20 6.5"/></svg>100% reserves, held separately and audited</li>
          <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round"><path d="M4 12.5l5 5L20 6.5"/></svg>Only after the utility token and exchange are established</li>
        </ul>
      </article>
    </div>
  </div>
</section>


        
<section id="how">
  <div className="wrap">
    <div className="sec-head rv">
      <span className="tag">How it works</span>
      <h2>Four steps, no surprises</h2>
    </div>
    <div className="steps">
      <div className="step rv"><div className="n">01</div><h3>Verify once</h3><p>Global KYC on your account. Only holders with enough collateral can borrow — that rule protects everyone.</p></div>
      <div className="step rv"><div className="n">02</div><h3>Deposit collateral</h3><p>Send BTC or ETH to your segregated vault address. It is never re-lent or traded with.</p></div>
      <div className="step rv"><div className="n">03</div><h3>Receive your loan</h3><p>Up to 50% of the collateral value lands in USDT or USDC. Your rate tier is fixed by the LTV you chose.</p></div>
      <div className="step rv"><div className="n">04</div><h3>Repay &amp; withdraw</h3><p>Repay in parts or in full, top up any time, and withdraw 100% of your collateral when the loan closes.</p></div>
    </div>
  </div>
</section>


        
<section id="rates" className="light-strip" style={{paddingTop: "0"}}>
  <div className="wrap">
    <div className="sec-head rv">
      <span className="tag">Locked pricing</span>
      <h2>5–10% APR. Your LTV picks the tier.</h2>
      <p>Safer loans cost less — the lower your LTV, the lower your rate. No slider games, no teaser rates that jump later.</p>
    </div>
    <div className="rate-grid">
      <div className="rate-card rv"><div className="apr">5%</div><div className="ltv">LTV up to 20%</div><p>The safest tier — maximum distance from every risk line.</p><span className="disc">3.75% with PAKV</span></div>
      <div className="rate-card rv"><div className="apr">6.5%</div><div className="ltv">LTV 21–30%</div><p>Balanced — a useful loan with a wide safety buffer.</p><span className="disc">4.88% with PAKV</span></div>
      <div className="rate-card rv"><div className="apr">8%</div><div className="ltv">LTV 31–40%</div><p>More cash out, still well below the 70% margin-call line.</p><span className="disc">6% with PAKV</span></div>
      <div className="rate-card rv"><div className="apr">10%</div><div className="ltv">LTV 41–50%</div><p>The maximum loan PakVault offers — the cap never moves.</p><span className="disc">7.5% with PAKV</span></div>
    </div>
  </div>
</section>


        
<section id="compare" style={{paddingTop: "0"}}>
  <div className="wrap">
    <div className="sec-head rv">
      <span className="tag">Honest comparison</span>
      <h2>Built to beat the incumbents where it matters</h2>
      <p>Nexo, Coinbase, Aave, Ledn and Figure set the bar. PakVault's edge is not a lower headline rate — it's the protections and access they don't offer.</p>
    </div>
    <div className="tbl-wrap tbl-stack rv">
      <table>
        <thead><tr><th scope="col">Platform</th><th scope="col">Max LTV</th><th scope="col">Rates from</th><th scope="col">Liquidation</th><th scope="col">Minimum loan</th><th scope="col">PKR payout / Urdu</th></tr></thead>
        <tbody>
          <tr className="us"><td>PakVault</td><td data-h="Max LTV">50%</td><td data-h="Rates from">5% APR (tiered to 10%)</td><td data-h="Liquidation"><span className="yes">Partial only, at 83%</span></td><td data-h="Minimum loan">$100</td><td data-h="PKR / Urdu"><span className="yes">Planned at launch</span></td></tr>
          <tr><td>Nexo</td><td data-h="Max LTV">50%</td><td data-h="Rates from">0.9% (top tier only)</td><td data-h="Liquidation">Full, ~83%</td><td data-h="Minimum loan">$50</td><td data-h="PKR / Urdu"><span className="no">No</span></td></tr>
          <tr><td>Coinbase (Morpho)</td><td data-h="Max LTV">75%</td><td data-h="Rates from">~5% variable</td><td data-h="Liquidation">Full, at 86%</td><td data-h="Minimum loan">Varies</td><td data-h="PKR / Urdu"><span className="no">No</span></td></tr>
          <tr><td>Aave</td><td data-h="Max LTV">Varies by asset</td><td data-h="Rates from">~4.3% variable</td><td data-h="Liquidation">Partial, self-managed</td><td data-h="Minimum loan">None — but self-custody</td><td data-h="PKR / Urdu"><span className="no">No</span></td></tr>
          <tr><td>Ledn / Figure</td><td data-h="Max LTV">50–75%</td><td data-h="Rates from">9–11%</td><td data-h="Liquidation">Full</td><td data-h="Minimum loan">Higher minimums + fees</td><td data-h="PKR / Urdu"><span className="no">No</span></td></tr>
        </tbody>
      </table>
    </div>
    <p style={{color: "var(--muted)", fontSize: ".86rem", marginTop: "14px"}}>Competitor figures as published by those platforms during our November 2026 market review; their terms change and are theirs to confirm.</p>
  </div>
</section>


        
<section className="token-sec" id="token">
  <div className="wrap">
    <div className="token-grid">
      <div>
        <div className="coin" data-parallax="0.05"><span className="cs">PAKV</span><span className="cn">PAKVAULT TOKEN</span></div>
        <div className="token-facts">
          <div className="tf"><small>Network</small><b>BNB Chain · BEP-20</b></div>
          <div className="tf"><small>Symbol</small><b>PAKV</b></div>
          <div className="tf"><small>Holder benefit</small><b>25% off loan interest</b></div>
          <div className="tf"><small>Status</small><b>Testnet first · launch after licence</b></div>
        </div>
      </div>
      <div>
        <div className="sec-head" style={{marginBottom: "26px"}}>
          <span className="tag" style={{background: "rgba(62,207,142,.15)", color: "#3ecf8e"}}>The utility token</span>
          <h2>PAKV earns its place in every product</h2>
          <p>BNB Chain keeps fees low enough for everyday users, and PAKV is wired into loans and the exchange from day one — discounts you can calculate, not promises.</p>
        </div>
        <ul className="util-list">
          <li><span className="ic"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9" strokeLinecap="round"><path d="M19 5L5 19M6.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM17.5 20a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/></svg></span><span><b>Cheaper loans</b><span>Hold or pay with PAKV and your APR drops 25% — 5% becomes 3.75%, 10% becomes 7.5%.</span></span></li>
          <li><span className="ic"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8h13l-3-3M20 16H7l3 3"/></svg></span><span><b>Cheaper trades</b><span>Exchange and P2P fees reduce for PAKV holders when the exchange phase opens.</span></span></li>
          <li><span className="ic"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l2.5 5.5L20 9.5l-4 4 1 5.8-5-2.8-5 2.8 1-5.8-4-4 5.5-1z"/></svg></span><span><b>Early access</b><span>Waitlist members holding PAKV get first access to new products and higher loan tiers as they open.</span></span></li>
        </ul>
      </div>
    </div>
  </div>
</section>


        
<section id="roadmap">
  <div className="wrap">
    <div className="sec-head rv">
      <span className="tag">Roadmap &amp; licensing</span>
      <h2>Everything built now. Launched when licensed.</h2>
      <p>In Pakistan, exchange, lending, custody and token issuance are regulated under the Virtual Assets Act 2026 and PVARA. PakVault's full system is being built and tested in private — public launch waits for the licence. That discipline is the product.</p>
    </div>
    <div className="road rv">
      <div className="road-item"><div className="when">Nov 2026</div><div><h3>Foundation<span className="st">In progress</span></h3><p>Brand, full product plan, this website, loan engine and PAKV token built and tested on testnet. Waitlist opens.</p></div></div>
      <div className="road-item"><div className="when">Dec 2026</div><div><h3>Company registration<span className="st next">Next</span></h3><p>SECP company incorporation once the founder turns 18 — the legal home for everything that follows.</p></div></div>
      <div className="road-item"><div className="when">Jan 2027</div><div><h3>PVARA path</h3><p>NOC / sandbox application with final legal terms, custody arrangements and compliance review.</p></div></div>
      <div className="road-item"><div className="when">On licence</div><div><h3>Loans beta launch</h3><p>PakVault Loans opens first — global-first, English-first, with USDT/USDC payouts and PKR support for Pakistan.</p></div></div>
      <div className="road-item"><div className="when">After Loans</div><div><h3>Exchange, PAKV, then stablecoin</h3><p>Exchange &amp; P2P next, PAKV public launch with it, and the stablecoin only when capital and its own licence allow.</p></div></div>
    </div>
  </div>
</section>


        
<section style={{paddingTop: "0"}}>
  <div className="wrap">
    <div className="sec-head rv">
      <span className="tag">Risk &amp; custody</span>
      <h2>How your collateral is protected</h2>
    </div>
    <div className="risk-grid">
      <div className="risk rv"><h3>Segregated custody</h3><p>Customer collateral sits in segregated wallets, separate from company funds. It is never re-lent, staked or traded with — no rehypothecation, ever.</p></div>
      <div className="risk rv"><h3>Two lines, both published</h3><p>Margin call at 70% LTV gives you time to top up. Liquidation at 83% is partial — only enough collateral is sold to restore the loan's health, never the whole position at once.</p></div>
      <div className="risk rv"><h3>Honest about crypto risk</h3><p>Prices can fall faster than any alert. The calculator's stress test shows exactly where your loan stands in a 30%, 50% or 70% crash — before you borrow, not after.</p></div>
    </div>
  </div>
</section>


        
<section id="faq" style={{paddingTop: "0"}}>
  <div className="wrap">
    <div className="sec-head rv">
      <span className="tag">FAQ</span>
      <h2>Straight answers</h2>
    </div>
    <div className="faq rv">
      <details><summary>Can I take a loan right now?</summary><div className="a">Not yet. PakVault is pre-launch: the full system is built and tested in private, and public lending starts only after PVARA licensing in Pakistan. Join the waitlist and you'll be first to know when the loans beta opens.</div></details>
      <details><summary>What can I borrow against, and how much?</summary><div className="a">Bitcoin and Ethereum at launch, up to 50% of their value (LTV), from a $100 minimum. You receive USDT or USDC. Your APR is set by your LTV tier: 5% up to 20% LTV, 6.5% to 30%, 8% to 40%, and 10% to 50%.</div></details>
      <details><summary>What happens if the price of my collateral falls?</summary><div className="a">At 70% LTV you get a margin call — top up collateral or repay part of the loan. At 83% LTV, only part of the collateral is sold, just enough to bring the loan back to a healthy level. Your exact margin-call and liquidation prices are shown before you borrow.</div></details>
      <details><summary>Is my crypto re-lent or used by PakVault?</summary><div className="a">No. Collateral is held in segregated custody and is never rehypothecated — never re-lent, staked or traded with. When your loan is repaid, 100% of your collateral comes back to you.</div></details>
      <details><summary>What is PAKV and why BNB Chain?</summary><div className="a">PAKV is PakVault's utility token: it cuts loan interest by 25%, reduces exchange fees and unlocks early access. BNB Chain (BEP-20) keeps transaction fees low and works with the wallets most users already have. PAKV is tested on testnet first and launches publicly only after licensing — there is no public sale before that.</div></details>
      <details><summary>Is PakVault global or Pakistan-only?</summary><div className="a">Global-first: an English-first product with USDT/USDC loans and global KYC. Pakistan is the home base for licensing, and Urdu support plus PKR payouts are the home-market advantage on top.</div></details>
      <details><summary>Why not just launch now?</summary><div className="a">Because lending, exchange, custody and token issuance are licensed activities under Pakistan's Virtual Assets Act 2026 (PVARA), and operating without a licence risks the company and its customers. Building everything first and launching on licence is slower — and it's the only version of PakVault that lasts.</div></details>
    </div>
  </div>
</section>


        
<section className="wait-sec" id="waitlist">
  <div className="wrap">
    <div className="wait-grid">
      <div className="rv">
        <span className="tag">Pre-launch waitlist</span>
        <h2 style={{fontSize: "clamp(1.7rem,3.4vw,2.4rem)", marginBottom: "14px"}}>Be first in line when Loans opens</h2>
        <p style={{color: "var(--ink2)", margin: "0 0 18px", maxWidth: "30rem"}}>Fill in the form and get your personal waitlist pass — your reference code and position details, ready to save. When the licensed beta opens, waitlist members are invited first.</p>
        <div className="steps" style={{gridTemplateColumns: "1fr", gap: "10px"}}>
          <div className="step" style={{display: "flex", gap: "14px", alignItems: "flex-start"}}><div className="n" style={{margin: "0"}}>1</div><p style={{margin: "0"}}><b style={{color: "var(--ink)"}}>Early access</b> — loans beta invites go to the waitlist before any public opening.</p></div>
          <div className="step" style={{display: "flex", gap: "14px", alignItems: "flex-start"}}><div className="n" style={{margin: "0"}}>2</div><p style={{margin: "0"}}><b style={{color: "var(--ink)"}}>Launch updates</b> — licensing milestones and product releases, as they happen.</p></div>
          <div className="step" style={{display: "flex", gap: "14px", alignItems: "flex-start"}}><div className="n" style={{margin: "0"}}>3</div><p style={{margin: "0"}}><b style={{color: "var(--ink)"}}>PAKV first look</b> — token details and testnet access before the public launch.</p></div>
        </div>
      </div>
      <WaitlistForm />
    </div>
  </div>
</section>
      </main>
      <footer>
        
  <div className="wrap">
    <div className="foot-grid">
      <div>
        <a className="logo" href="#top" style={{marginBottom: "12px"}}>
          <svg className="logo-mark" viewBox="0 0 48 48" aria-hidden="true"><rect x="3" y="3" width="42" height="42" rx="12" fill="#0c6b45"/><path d="M15 33V15h9.2c4 0 6.8 2.5 6.8 6.1 0 3.7-2.8 6.2-6.8 6.2H19v5.7h-4zm4-9h5c1.9 0 3-1.1 3-2.9s-1.1-2.9-3-2.9h-5V24z" fill="#fff"/><circle cx="35.5" cy="34.5" r="3.4" fill="#d9ab3f"/></svg>
          PakVault
        </a>
        <p>Crypto-backed loans, exchange &amp; P2P, and the PAKV utility token. One company, one ecosystem — global-first, home-based in Pakistan.</p>
      </div>
      <div>
        <h4>Products</h4>
        <a href="#products">PakVault Loans</a>
        <a href="#products">Exchange &amp; P2P</a>
        <a href="#token">PAKV Token</a>
        <a href="#calculator">Loan calculator</a>
      </div>
      <div>
        <h4>Company</h4>
        <a href="#roadmap">Roadmap &amp; licensing</a>
        <a href="#compare">Compare platforms</a>
        <a href="#rates">Rates</a>
        <a href="#faq">FAQ</a>
        <a href="#waitlist">Join the waitlist</a>
      </div>
    </div>
    <div className="legal">
      <span><strong>Pre-launch notice:</strong> PakVault is in private build-and-test phase. No loans are offered, no deposits are accepted and no funds move through this website. Public launch will follow PVARA licensing under Pakistan's Virtual Assets Act 2026.</span>
      <span>Crypto assets are volatile. Borrowing against crypto carries liquidation risk — use the calculator's stress test before making any decision. Nothing on this page is financial advice.</span>
      <span>© 2026 PakVault. All rights reserved.</span>
    </div>
  </div>

      </footer>
      <Effects />
    </>
  );
}
