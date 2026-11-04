"use client";

import { useState } from "react";
import { menu } from "@/lib/data";

export default function MenuTabs() {
  const [active, setActive] = useState(menu[0].id);
  const section = menu.find((m) => m.id === active)!;

  return (
    <div>
      <div role="tablist" aria-label="Menu sections" className="flex flex-wrap gap-x-8 gap-y-3 border-b border-line pb-5">
        {menu.map((m) => (
          <button
            key={m.id}
            role="tab"
            aria-selected={m.id === active}
            onClick={() => setActive(m.id)}
            className={`relative pb-1 font-serif text-2xl font-light transition-colors duration-500 md:text-3xl ${
              m.id === active ? "italic text-cream" : "text-cream/40 hover:text-cream/75"
            }`}
          >
            {m.title}
            <span
              className={`absolute -bottom-[21px] left-0 h-px bg-brass transition-all duration-700 ${m.id === active ? "w-full" : "w-0"}`}
            />
          </button>
        ))}
      </div>

      {section.note && <p className="mt-6 text-xs uppercase tracking-[0.2em] text-brass/80">{section.note}</p>}

      <ul key={section.id} role="tabpanel" className="mt-6 grid gap-x-16 md:grid-cols-2">
        {section.items.map((item, i) => (
          <li
            key={item.name}
            className="animate-[fadein_.7s_ease_forwards] border-b border-line py-6 opacity-0"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="flex items-baseline gap-4">
              <h4 className="font-serif text-xl font-normal md:text-[1.4rem]">
                {item.name}
                {item.veg && (
                  <span className="ml-2 inline-block h-1.5 w-1.5 -translate-y-1 rounded-full bg-sage align-middle" title="Vegetarian" aria-label="Vegetarian" />
                )}
              </h4>
              <span className="mb-1 flex-1 border-b border-dotted border-cream/20" aria-hidden />
              <span className="font-serif text-lg text-brass">₹{item.price}</span>
            </div>
            {item.desc && <p className="mt-1.5 text-sm font-light leading-relaxed text-cream-dim">{item.desc}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
