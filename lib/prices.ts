export type Currency = "USD" | "EUR" | "PKR";
export type AssetKey = "BTC" | "ETH" | "USDT";

export interface AssetPrice {
  USD: number;
  EUR: number;
  PKR: number;
  name: string;
  sym: string;
  color: string;
}

export type PriceMap = Record<AssetKey, AssetPrice>;

/** Dated snapshot — CoinGecko, 12 Nov 2026, 19:05 PKT (same as the original site). */
export const SNAPSHOT: PriceMap = {
  BTC: { USD: 72358, EUR: 65252, PKR: 20015822, name: "Bitcoin", sym: "₿", color: "#f7931a" },
  ETH: { USD: 2009.65, EUR: 1812.31, PKR: 555917, name: "Ethereum", sym: "Ξ", color: "#627eea" },
  USDT: { USD: 0.999066, EUR: 0.900962, PKR: 276.36, name: "Tether", sym: "₮", color: "#26a17b" },
};

export const SNAPSHOT_AS_OF = "12 Nov 2026, 19:05 PKT";

export const FX: Record<Currency, number> = { USD: 1, EUR: 0.90179, PKR: 276.62 };

export const CURSYM: Record<Currency, string> = { USD: "$", EUR: "€", PKR: "Rs " };

export function fmtMoney(v: number, cur: Currency): string {
  const maxFrac = cur === "PKR" ? 0 : v < 10 ? 3 : 2;
  return (
    CURSYM[cur] +
    v.toLocaleString("en-US", {
      minimumFractionDigits: cur === "PKR" ? 0 : 2,
      maximumFractionDigits: maxFrac,
    })
  );
}

/** Locked APR tiers: LTV → APR. */
export function tierApr(ltv: number): number {
  if (ltv <= 20) return 5;
  if (ltv <= 30) return 6.5;
  if (ltv <= 40) return 8;
  return 10;
}
