"use client";

import { useEffect, useState } from "react";

type HeaderNavProps = {
  cvHref: string;
  downloadFileName: string;
  navItems: Array<{
    href: string;
    label: string;
  }>;
};

export function HeaderNav({
  cvHref,
  downloadFileName,
  navItems,
}: Readonly<HeaderNavProps>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (globalThis.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    const handleHashChange = () => {
      setIsMenuOpen(false);
    };

    globalThis.addEventListener("resize", handleResize);
    globalThis.addEventListener("hashchange", handleHashChange);

    return () => {
      globalThis.removeEventListener("resize", handleResize);
      globalThis.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <header className="reveal reveal-delay-1 fixed inset-x-0 top-0 z-30 border-b border-[rgba(22,50,67,0.14)] bg-[#f7efe4] shadow-[0_14px_32px_rgba(22,50,67,0.08)]">
      <div className="mx-auto max-w-7xl px-3.5 py-3 sm:px-6 sm:py-4 lg:px-8">
        <div className="nav-shell mx-auto max-w-6xl">
          <div className="flex items-center justify-between gap-2.5 sm:gap-3">
            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-panel"
              aria-label="Toggle navigation menu"
              data-open={isMenuOpen}
              className="nav-menu-trigger inline-flex shrink-0 md:hidden"
              onClick={() => {
                setIsMenuOpen((previous) => !previous);
              }}
            >
              <span className="sr-only">Menu</span>
              <span className="relative h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${isMenuOpen ? "translate-y-1.75 rotate-45" : ""}`}
                />
                <span
                  className={`absolute left-0 top-1.75 h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
                />
                <span
                  className={`absolute left-0 top-3.5 h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${isMenuOpen ? "-translate-y-1.75 -rotate-45" : ""}`}
                />
              </span>
            </button>

            <nav className="hidden items-center gap-1 md:flex md:flex-1 md:justify-center">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link shrink-0"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href={cvHref}
              download={downloadFileName}
              className="nav-cta shrink-0 justify-center text-xs font-medium sm:text-sm"
            >
              <span>Download CV</span>
              <span aria-hidden="true">↘</span>
            </a>
          </div>

          {isMenuOpen ? (
            <div className="mt-2.5 md:hidden">
              <nav id="mobile-nav-panel" className="nav-menu-panel">
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="nav-link nav-menu-item"
                      onClick={() => {
                        setIsMenuOpen(false);
                      }}
                    >
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
