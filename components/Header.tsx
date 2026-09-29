"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const links = [
  ["Services", "#services"],
  ["About", "#about"],
  ["Training", "#training"],
  ["Contact", "#contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Total Safety Solutions home">
          <Image
            className="brand-logo"
            src="/logos/total-safety-solutions.png"
            alt="Total Safety Solutions LLC"
            width={514}
            height={148}
            priority
          />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
          <a className="nav-cta" href="#contact">Request a consultation</a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <a href={href} key={label} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
