"use client";

import { useState } from "react";

interface PassData {
  ref: string;
  name: string;
  email: string;
  interest: string;
  collateral: string;
  issued: string;
}

/** Client-side downloadable waitlist pass — no database yet (same as the original site). */
export default function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("Crypto-backed loans");
  const [collateral, setCollateral] = useState("Bitcoin (BTC)");
  const [error, setError] = useState(false);
  const [pass, setPass] = useState<PassData | null>(null);
  const [copyMsg, setCopyMsg] = useState("");

  const passText = (p: PassData) =>
    "PAKVAULT — PRE-LAUNCH WAITLIST PASS\n" +
    `Reference: ${p.ref}\n` +
    `Name: ${p.name}\n` +
    `Email: ${p.email}\n` +
    `Interested in: ${p.interest}\n` +
    `Collateral: ${p.collateral}\n` +
    `Issued: ${p.issued}\n\n` +
    "PakVault is pre-launch. Public launch follows PVARA licensing under Pakistan's Virtual Assets Act 2026. Keep this pass — waitlist members are invited to the Loans beta first.";

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const valid =
      name.trim().length >= 2 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) {
      setError(true);
      return;
    }
    setError(false);
    const seed = (name + email)
      .split("")
      .reduce((a, c) => (a * 31 + c.charCodeAt(0)) % 9973, 7);
    const ref = "PV-" + (1000 + seed);
    const data: PassData = {
      ref,
      name: name.trim(),
      email: email.trim(),
      interest,
      collateral,
      issued: "12 Nov 2026",
    };
    setPass(data);
    setCopyMsg("");
  };

  const download = () => {
    if (!pass) return;
    const blob = new Blob([passText(pass)], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `pakvault-waitlist-${pass.ref}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 2000);
  };

  const copy = () => {
    if (!pass) return;
    if (navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText(passText(pass))
        .then(() => setCopyMsg("Copied — keep it safe."))
        .catch(() =>
          setCopyMsg("Copy blocked by the browser — use Download instead.")
        );
    } else {
      setCopyMsg("Copy not available here — use Download instead.");
    }
  };

  const inputStyle: React.CSSProperties = {
    border: "1.5px solid var(--line2)",
    borderRadius: "12px",
    padding: "12px 14px",
    width: "100%",
    font: "inherit",
    fontWeight: 600,
    background: "var(--surface)",
    color: "var(--ink)",
  };

  return (
    <form className="wait-form rv" id="waitForm" noValidate onSubmit={onSubmit}>
      <h3 style={{ fontFamily: "'Sora',sans-serif", margin: "0 0 18px", fontSize: "1.15rem" }}>
        Get your waitlist pass
      </h3>
      <div className="field">
        <label htmlFor="wName">Full name</label>
        <input
          type="text"
          id="wName"
          autoComplete="name"
          placeholder="Your name"
          style={inputStyle}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="wEmail">Email</label>
        <input
          type="email"
          id="wEmail"
          autoComplete="email"
          placeholder="you@example.com"
          style={inputStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="wInterest">I&apos;m most interested in</label>
        <select
          id="wInterest"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        >
          <option>Crypto-backed loans</option>
          <option>Exchange / P2P</option>
          <option>PAKV token</option>
          <option>Everything</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="wCollat">Collateral I hold</label>
        <select
          id="wCollat"
          value={collateral}
          onChange={(e) => setCollateral(e.target.value)}
        >
          <option>Bitcoin (BTC)</option>
          <option>Ethereum (ETH)</option>
          <option>Both BTC &amp; ETH</option>
          <option>None yet — just exploring</option>
        </select>
      </div>
      <button type="submit" className="btn btn-brand" style={{ width: "100%" }}>
        Generate my waitlist pass
      </button>
      <p className={`form-err${error ? " show" : ""}`} id="formErr">
        Please add your name and a valid email so your pass can be issued.
      </p>
      <div className={`pass${pass ? " show" : ""}`} id="passCard">
        <small
          style={{
            letterSpacing: ".08em",
            fontWeight: 800,
            color: "var(--hero-ink2)",
          }}
        >
          PAKVAULT WAITLIST PASS
        </small>
        <div className="ref" id="passRef">
          {pass ? pass.ref : "PV-0000"}
        </div>
        <p id="passDetail">
          {pass
            ? `${pass.name} · ${pass.interest} · Collateral: ${pass.collateral}. Show this reference when the licensed Loans beta opens — waitlist members are invited first.`
            : ""}
        </p>
        <div className="row-btns">
          <button type="button" className="btn btn-hero" onClick={download}>
            Download pass
          </button>
          <button type="button" className="btn btn-hero-ghost" onClick={copy}>
            Copy details
          </button>
        </div>
        <p
          id="copyMsg"
          style={{ margin: "10px 0 0", fontSize: ".85rem", color: "#3ecf8e", fontWeight: 700 }}
        >
          {copyMsg}
        </p>
      </div>
    </form>
  );
}
