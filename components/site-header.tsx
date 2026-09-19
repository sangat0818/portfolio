"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation, profile } from "@/data/profile";

const initials = profile.name
  .split(" ")
  .filter(Boolean)
  .map((part) => part[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <Link className="brand-mark" href="/" aria-label={`${profile.name} home`}>
          <span className="brand-initial">{initials}</span>
          <span className="brand-copy">
            <strong>{profile.name}</strong>
            <small>Learning with purpose</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <Link className="button button-small desktop-cta" href="/#contact">
          Work With Me <span aria-hidden="true">↗</span>
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div id="mobile-navigation" className={`mobile-nav ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              <span>0{index + 1}</span>{item.label}
            </Link>
          ))}
          <Link className="button" href="/#contact" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            Start a conversation
          </Link>
        </nav>
      </div>
    </header>
  );
}
