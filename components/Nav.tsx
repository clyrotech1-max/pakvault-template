"use client";

import { useState } from "react";

const LINKS: Array<[string, string]> = [
  ["#products", "Products"],
  ["#calculator", "Loan calculator"],
  ["#rates", "Rates"],
  ["#compare", "Compare"],
  ["#token", "PAKV Token"],
  ["#roadmap", "Roadmap"],
  ["#faq", "FAQ"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="wrap nav">
        <a className="logo" href="#top" aria-label="PakVault home">
          <svg className="logo-mark" viewBox="0 0 48 48" aria-hidden="true">
            <rect x="3" y="3" width="42" height="42" rx="12" fill="#0c6b45" />
            <path
              d="M15 33V15h9.2c4 0 6.8 2.5 6.8 6.1 0 3.7-2.8 6.2-6.8 6.2H19v5.7h-4zm4-9h5c1.9 0 3-1.1 3-2.9s-1.1-2.9-3-2.9h-5V24z"
              fill="#fff"
            />
            <circle cx="35.5" cy="34.5" r="3.4" fill="#d9ab3f" />
          </svg>
          PakVault
        </a>
        <nav className="nav-links" aria-label="Main">
          <a href="#products">Products</a>
          <a href="#calculator">Calculator</a>
          <a href="#rates">Rates</a>
          <a href="#compare">Compare</a>
          <a href="#token">PAKV Token</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="btn btn-brand nav-cta" href="#waitlist">
          Join waitlist
        </a>
        <button
          className="menu-btn"
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobileMenu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2.2"
            strokeLinecap="round"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
      <nav
        className={`mobile-menu${open ? " open" : ""}`}
        id="mobileMenu"
        aria-label="Mobile"
      >
        {LINKS.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a href="#waitlist" onClick={() => setOpen(false)}>
          Join the waitlist
        </a>
      </nav>
    </header>
  );
}
