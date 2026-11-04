"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { menu } from "@/lib/data";

export default function MenuTabs() {
  const [active, setActive] = useState(menu[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const section = menu.find((m) => m.id === active)!;

  const select = (index: number, focus = false) => {
    const tab = tabRefs.current[index];
    setActive(menu[index].id);
    if (!tab) return;
    if (focus) tab.focus();
    tab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  };

  // Arrow-key navigation between tabs (WAI-ARIA tabs pattern).
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const current = menu.findIndex((m) => m.id === active);
    const last = menu.length - 1;
    const next =
      e.key === "ArrowRight" ? (current === last ? 0 : current + 1)
      : e.key === "ArrowLeft" ? (current === 0 ? last : current - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : -1;
    if (next < 0) return;
    e.preventDefault();
    select(next, true);
  };

  return (
    <div>
      {/* Single scrollable row on phones (no wrapping, so the underline stays on the border); wraps from md up. */}
      <div
        role="tablist"
        aria-label="Menu sections"
        onKeyDown={onKeyDown}
        className="-mx-5 flex gap-x-8 overflow-x-auto border-b border-line px-5 [scrollbar-width:none] md:mx-0 md:flex-wrap md:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {menu.map((m, i) => {
          const selected = m.id === active;
          return (
            <button
              key={m.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${m.id}`}
              aria-selected={selected}
              aria-controls={`panel-${m.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(i)}
              className={`relative shrink-0 whitespace-nowrap pt-1 pb-5 font-serif text-2xl font-light transition-colors duration-500 md:text-3xl ${
                selected ? "italic text-cream" : "text-cream/40 hover:text-cream/75"
              }`}
            >
              {m.title}
              <span className={`absolute bottom-0 left-0 h-px bg-brass transition-all duration-700 ${selected ? "w-full" : "w-0"}`} />
            </button>
          );
        })}
      </div>

      {section.note && <p className="mt-6 text-xs uppercase tracking-[0.2em] text-brass/80">{section.note}</p>}

      <ul
        key={section.id}
        id={`panel-${section.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${section.id}`}
        tabIndex={0}
        className="mt-6 grid gap-x-16 md:grid-cols-2"
      >
        {section.items.map((item, i) => (
          <li
            key={item.name}
            className="animate-[fadein_.7s_ease_forwards] border-b border-line py-6 opacity-0 motion-reduce:animate-none motion-reduce:opacity-100"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="flex items-baseline gap-4">
              <h4 className="min-w-0 font-serif text-xl font-normal md:text-[1.4rem]">
                {item.name}
                {item.veg && (
                  <span className="ml-2 inline-block h-1.5 w-1.5 -translate-y-1 rounded-full bg-sage align-middle" title="Vegetarian" aria-label="Vegetarian" />
                )}
              </h4>
              <span className="mb-1 min-w-4 flex-1 border-b border-dotted border-cream/20" aria-hidden />
              <span className="shrink-0 font-serif text-lg text-brass">₹{item.price}</span>
            </div>
            {item.desc && <p className="mt-1.5 text-sm font-light leading-relaxed text-cream-dim">{item.desc}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
