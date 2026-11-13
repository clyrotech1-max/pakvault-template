import { NextResponse } from "next/server";
import { SNAPSHOT, SNAPSHOT_AS_OF, type PriceMap } from "@/lib/prices";

export const runtime = "nodejs";
export const revalidate = 60;

/**
 * GET /api/prices — proxies CoinGecko simple price (bitcoin, ethereum, tether
 * in USD/EUR/PKR). If the feed is unreachable, returns the dated snapshot
 * with `live: false` so the UI never breaks.
 */
export async function GET() {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd,eur,pkr",
      { next: { revalidate: 60 } }
    );
    if (!res.ok) throw new Error(`CoinGecko HTTP ${res.status}`);
    const d = await res.json();
    if (!d?.bitcoin?.usd || !d?.ethereum?.usd) throw new Error("CoinGecko payload incomplete");
    const prices: PriceMap = {
      BTC: {
        USD: d.bitcoin.usd, EUR: d.bitcoin.eur, PKR: d.bitcoin.pkr,
        name: "Bitcoin", sym: "₿", color: "#f7931a",
      },
      ETH: {
        USD: d.ethereum.usd, EUR: d.ethereum.eur, PKR: d.ethereum.pkr,
        name: "Ethereum", sym: "Ξ", color: "#627eea",
      },
      USDT: {
        USD: d.tether?.usd ?? SNAPSHOT.USDT.USD,
        EUR: d.tether?.eur ?? SNAPSHOT.USDT.EUR,
        PKR: d.tether?.pkr ?? SNAPSHOT.USDT.PKR,
        name: "Tether", sym: "₮", color: "#26a17b",
      },
    };
    return NextResponse.json({
      live: true,
      asOf: new Date().toISOString(),
      fx: { USD: 1, EUR: d.bitcoin.eur / d.bitcoin.usd, PKR: d.bitcoin.pkr / d.bitcoin.usd },
      prices,
    });
  } catch {
    return NextResponse.json({
      live: false,
      asOf: SNAPSHOT_AS_OF,
      fx: { USD: 1, EUR: 0.90179, PKR: 276.62 },
      prices: SNAPSHOT,
    });
  }
}
