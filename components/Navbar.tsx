"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Droplets } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || !isHome;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid ? "bg-white shadow-sm" : "bg-transparent"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
            <Droplets className="w-4 h-4 text-white" />
          </div>
          <span
            className={`font-bold text-lg tracking-tight ${solid ? "text-primary-900" : "text-white"}`}
            style={{ fontFamily: "var(--font-plus)" }}
          >
            Afripacific
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === l.href
                  ? solid
                    ? "bg-primary-50 text-primary-700"
                    : "bg-white/20 text-white"
                  : solid
                    ? "text-slate-600 hover:text-primary-700 hover:bg-primary-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-3 px-5 py-2 rounded-full bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 transition-colors"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-lg ${solid ? "text-slate-600" : "text-white"}`}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-3 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium ${
                pathname === l.href
                  ? "bg-primary-50 text-primary-700"
                  : "text-slate-600"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 px-4 py-2.5 rounded-full bg-primary-600 text-white text-sm font-semibold text-center"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}