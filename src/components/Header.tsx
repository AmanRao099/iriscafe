"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cafe, nav } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open (html + body for iOS Safari),
  // close on Escape, and close if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 768px)");
    const onMq = () => mq.matches && setOpen(false);

    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      root.style.overflow = "";
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled || open ? "bg-ink/85 backdrop-blur-md border-b border-line" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 md:px-10">
          <a href="#top" className="group flex items-center gap-3" aria-label="Iris Café & Kitchen — home" onClick={() => setOpen(false)}>
            <Image
              src="/brand/logo-wordmark.png"
              alt="Iris"
              width={235}
              height={225}
              priority
              className={`w-auto transition-all duration-700 ${scrolled ? "h-9" : "h-11"}`}
            />
            <span className="hidden border-l border-line pl-3 text-[0.6rem] uppercase leading-tight tracking-[0.35em] text-cream-dim sm:block">
              Café &amp;
              <br />
              Kitchen
            </span>
          </a>

          <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="link-underline text-[0.72rem] uppercase tracking-[0.25em] text-cream/80 hover:text-cream">
                {n.label}
              </a>
            ))}
            <a
              href={cafe.phoneHref}
              className="border border-brass/60 px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.25em] text-brass transition-colors duration-500 hover:bg-brass hover:text-ink"
            >
              Reserve
            </a>
          </nav>

          <button
            type="button"
            className="relative -mr-2 h-11 w-11 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className={`absolute left-2.5 right-2.5 h-px bg-cream transition-all duration-500 ${open ? "top-1/2 rotate-45" : "top-[40%]"}`} />
            <span className={`absolute left-2.5 right-2.5 h-px bg-cream transition-all duration-500 ${open ? "top-1/2 -rotate-45" : "top-[60%]"}`} />
          </button>
        </div>
      </header>

      {/* Kept outside <header>: its backdrop-filter would otherwise become the containing block for this fixed overlay. */}
      <div
        id="mobile-menu"
        inert={!open}
        className={`fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto overscroll-contain bg-ink transition-[opacity,visibility] duration-500 md:hidden ${
          open ? "opacity-100" : "invisible pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-2 px-5 pt-12 pb-[max(2.5rem,env(safe-area-inset-bottom))]" aria-label="Mobile">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="border-b border-line py-5 font-serif text-4xl font-light">
              {n.label}
            </a>
          ))}
          <a href={cafe.phoneHref} className="mt-10 border border-brass/60 py-4 text-center text-xs uppercase tracking-[0.3em] text-brass">
            Reserve · {cafe.phone}
          </a>
          <Image src="/brand/logo-badge.png" alt="" width={496} height={496} className="mx-auto mt-14 h-28 w-28 opacity-80" />
        </nav>
      </div>
    </>
  );
}
