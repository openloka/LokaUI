import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "./common/ThemeToggle";
import ColorSchemeDropdown from "./common/ColorSchemeDropdown";
import SearchDialog from "./common/SearchDialog";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <div
        className="w-8.5 h-8.5 rounded-[25%] flex items-center justify-center shrink-0"
        style={{
          background:
            "linear-gradient(135deg, var(--accent), var(--accent-hover))",
        }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <line
            x1="4"
            y1="3"
            x2="4"
            y2="15"
            stroke="var(--accent-text)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <line
            x1="4"
            y1="15"
            x2="11"
            y2="15"
            stroke="var(--accent-text)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle
            cx="15"
            cy="11"
            r="3.5"
            stroke="var(--accent-text)"
            strokeWidth="2.2"
            fill="none"
          />
        </svg>
      </div>
      <span className="font-pixel font-extrabold text-[17px] tracking-tight text-text-primary">
        Loka<span className="text-accent">UI</span>
      </span>
      <span className="font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded bg-accent-muted text-accent tracking-wide">
        v0.1
      </span>
    </Link>
  );
}

const navLinks = [
  { label: "Docs", to: "/docs/getting-started" },
  { label: "Components", to: "/foundations/button" },
  { label: "Theming", to: "/docs/theming" },
  { label: "Variants", to: "/docs/variants" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-16 z-50 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-border"
          : "border-b border-transparent"
      }`}
      style={{ padding: "0 clamp(16px, 4vw, 48px)" }}>
      <Logo />

      <nav className="hidden md:flex items-center gap-1">
        {navLinks.map((link) =>
          link.to.startsWith("/") ? (
            <Link
              key={link.label}
              to={link.to}
              className="text-[13px] font-medium text-text-secondary px-3.5 py-2.5 rounded-lg hover:text-text-primary hover:bg-bg-hover transition-colors">
              {link.label}
            </Link>
          ) : (
            <a
              key={link.label}
              href={link.to}
              className="text-[13px] font-medium text-text-secondary px-3.5 py-2.5 rounded-lg hover:text-text-primary hover:bg-bg-hover transition-colors">
              {link.label}
            </a>
          ),
        )}
      </nav>

      <div className="flex items-center gap-2.5">
        <SearchDialog
          trigger={
            <button
              className="md:hidden p-2.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-colors"
              aria-label="Search"
            >
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>
          }
        />
        <ColorSchemeDropdown />
        <ThemeToggle />
        <Link
          to="/docs/getting-started"
          className="hidden sm:inline-flex text-[13px] font-semibold px-4.5 py-2 rounded-[10px] bg-accent text-accent-text hover:bg-accent-hover active:scale-[0.96] transition-all">
          Get started
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="w-5 h-5" />
          ) : (
            <Bars3Icon className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 md:hidden bg-bg/95 backdrop-blur-xl border-b border-border shadow-lg">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-text-secondary px-4 py-3 rounded-lg hover:text-text-primary hover:bg-bg-hover transition-colors">
                {link.label}
              </Link>
            ))}
            <Link
              to="/docs/getting-started"
              onClick={() => setMobileMenuOpen(false)}
              className="sm:hidden mt-2 text-center text-sm font-semibold px-4 py-3 rounded-[10px] bg-accent text-accent-text hover:bg-accent-hover transition-all">
              Get started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
