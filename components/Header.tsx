"use client";

import { useState } from "react";
import Link from "next/link";

const leftLinks = [
  { href: "/", label: "Home" },
  { href: "/calendar", label: "Calendar" },
];

const rightLinks = [
  { href: "/team", label: "Team" },
  { href: "/register", label: "Join Us" },
];

export default function Header(): React.ReactNode {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkStyles =
    "text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-orange-500";

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Left Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {leftLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkStyles}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Center Logo */}
        <Link
          href="/"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white transition-transform hover:scale-110"
        >
          JR
        </Link>

        {/* Right Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {rightLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkStyles}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-white md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="border-t border-white/10 bg-black/95 px-6 py-4 md:hidden">
          {[...leftLinks, ...rightLinks].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-orange-500"
              onClick={toggleMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
