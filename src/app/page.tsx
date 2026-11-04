import Image from "next/image";
import Header from "@/components/Header";
import MenuTabs from "@/components/MenuTabs";
import Reveal from "@/components/Reveal";
import { cafe, gallery, signatures } from "@/lib/data";

const marqueeWords = ["Specialty coffee", "Garden seating", "Small plates", "Pizza & pasta", "Slow evenings", "Warm light", "Desserts"];

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        {/* ───────── Hero ───────── */}
        <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
          <Image
            src="/images/patio-evening.jpg"
            alt="Iris terrace in the evening, warm lights over tables and tropical plants"
            fill
            priority
            sizes="100vw"
            className="kenburns object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/35 to-ink" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(14,12,9,0.7)_100%)]" />

          <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-16 md:px-10 md:pb-24">
            <Reveal>
              <div className="mb-8 h-24 w-24 rounded-full bg-ink/75 p-1 shadow-[0_0_60px_20px_rgba(14,12,9,0.55)] ring-1 ring-cream/10 backdrop-blur-sm md:h-28 md:w-28">
                <Image src="/brand/logo-badge.png" alt="Iris Café & Kitchen logo" width={496} height={496} priority className="h-full w-full" />
              </div>
              <p className="eyebrow mb-6">Café &amp; Kitchen · {cafe.area}</p>
            </Reveal>
            <Reveal delay={150}>
              <h1 className="max-w-5xl font-serif text-[3.4rem] font-light leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-[8.5rem]">
                A garden of <em className="text-brass">fine</em> flavours
              </h1>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <p className="max-w-md text-base font-light leading-relaxed text-cream/80">
                  Greenery, warm light and slow evenings — from the first coffee of the morning to dinner under the lanterns.
                </p>
                <div className="flex gap-3">
                  <a href="#menu" className="bg-cream px-7 py-4 text-[0.7rem] uppercase tracking-[0.25em] text-ink transition-colors duration-500 hover:bg-brass">
                    View menu
                  </a>
                  <a href={cafe.phoneHref} className="border border-cream/40 px-7 py-4 text-[0.7rem] uppercase tracking-[0.25em] transition-colors duration-500 hover:border-cream">
                    Book a table
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───────── Story ───────── */}
        <section id="story" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 py-28 md:px-10 md:py-40">
          <div className="grid gap-16 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-5">
              <Reveal>
                <p className="eyebrow mb-8 flex items-center gap-3">
                  <Image src="/brand/logo-leaf.png" alt="" width={88} height={87} className="h-4 w-4" />
                  Our story
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="font-serif text-5xl font-light leading-[1.05] md:text-6xl">
                  A calm little escape, <em className="text-cream/60">hidden in</em> the heart of JP Nagar.
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-10 space-y-5 text-[0.95rem] font-light leading-[1.85] text-cream-dim">
                  <p>
                    At Iris, a café is more than coffee and a menu. It is a courtyard of palms and climbing green, lanterns
                    that glow as the sun goes down, and tables made for lingering.
                  </p>
                  <p>
                    Our kitchen moves easily between comfort and curiosity — hand-pulled espresso, small plates built for sharing,
                    generous pizzas, comforting pasta and desserts finished at the table.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-12 flex gap-12 border-t border-line pt-8">
                  <div>
                    <p className="font-serif text-4xl font-light">{cafe.rating}<span className="text-brass">★</span></p>
                    <p className="mt-1 text-[0.68rem] uppercase tracking-[0.25em] text-cream-dim">{cafe.reviews} Google reviews</p>
                  </div>
                  <div>
                    <p className="font-serif text-4xl font-light">9–11</p>
                    <p className="mt-1 text-[0.68rem] uppercase tracking-[0.25em] text-cream-dim">Open every day</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="relative md:col-span-6 md:col-start-7">
              <Reveal className="relative aspect-[4/5] overflow-hidden">
                <Image src="/images/garden-dusk.jpg" alt="Garden courtyard at dusk with lanterns and trees" fill sizes="(min-width:768px) 45vw, 100vw" className="object-cover transition-transform duration-[2s] hover:scale-105" />
              </Reveal>
              <Reveal delay={250} className="absolute -bottom-12 -left-6 hidden aspect-square w-[42%] overflow-hidden border-8 border-ink md:-left-20 md:block">
                <Image src="/images/coffee-and-book.jpg" alt="Latte with cookies beside an open book" fill sizes="20vw" className="object-cover" />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───────── Signatures ───────── */}
        <section className="bg-ink-2 py-28 md:py-36">
          <div className="mx-auto max-w-[1400px] px-5 md:px-10">
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Reveal>
                <p className="eyebrow mb-6">From the kitchen</p>
                <h2 className="font-serif text-5xl font-light md:text-6xl">
                  Made slowly, <em className="text-brass">served warm</em>
                </h2>
              </Reveal>
              <Reveal delay={150}>
                <a href="#menu" className="link-underline text-[0.72rem] uppercase tracking-[0.25em] text-cream/80">
                  Explore the full menu →
                </a>
              </Reveal>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
              {signatures.map((s, i) => (
                <Reveal key={s.src} delay={i * 120} className={i % 2 === 1 ? "md:mt-16" : ""}>
                  <figure className="group">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image src={s.src} alt={s.title} fill sizes="(min-width:768px) 25vw, 50vw" className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-110" />
                      <div className="absolute inset-0 bg-ink/10 transition-colors duration-700 group-hover:bg-transparent" />
                    </div>
                    <figcaption className="mt-5">
                      <p className="font-serif text-2xl font-light italic">{s.title}</p>
                      <p className="mt-1 text-[0.68rem] uppercase tracking-[0.22em] text-cream-dim">{s.caption}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── Menu ───────── */}
        <section id="menu" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 py-28 md:px-10 md:py-40">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <Reveal>
                  <p className="eyebrow mb-6">The menu</p>
                  <h2 className="font-serif text-5xl font-light leading-[1.05] md:text-6xl">
                    Morning coffee <em className="text-cream/60">to</em> dinner under the lanterns
                  </h2>
                  <p className="mt-8 max-w-sm text-[0.95rem] font-light leading-[1.85] text-cream-dim">
                    A selection from our menu. Prices in rupees, exclusive of taxes. Ask our team about the day&apos;s specials and seasonal coolers.
                  </p>
                  <div className="relative mt-10 hidden aspect-[4/5] w-full max-w-sm overflow-hidden lg:block">
                    <Image src="/images/grilled-chicken.jpg" alt="Grilled chicken with herbed rice and green sauce" fill sizes="30vw" className="object-cover" />
                  </div>
                </Reveal>
              </div>
            </div>
            <div className="lg:col-span-8">
              <Reveal delay={150}>
                <MenuTabs />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───────── Full-bleed quote ───────── */}
        <section className="relative flex min-h-[80svh] items-center overflow-hidden">
          <Image src="/images/interior.jpg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-ink/70" />
          <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
            <Reveal>
              <Image src="/brand/logo-leaf.png" alt="" width={88} height={87} className="mx-auto h-8 w-8" />
              <blockquote className="mt-8 font-serif text-4xl font-light italic leading-[1.2] md:text-6xl">
                “Beautiful rustic café with lush greens and vintage vibes. So peaceful.”
              </blockquote>
              <p className="mt-8 text-[0.68rem] uppercase tracking-[0.3em] text-cream-dim">A guest, on District by Zomato</p>
            </Reveal>
          </div>
        </section>

        {/* ───────── Space / Gallery ───────── */}
        <section id="space" className="scroll-mt-20 py-28 md:py-40">
          <div className="mx-auto max-w-[1400px] px-5 md:px-10">
            <div className="mb-16 grid gap-6 md:grid-cols-2 md:items-end">
              <Reveal>
                <p className="eyebrow mb-6">The space</p>
                <h2 className="font-serif text-5xl font-light md:text-6xl">
                  Under palms, <em className="text-brass">beside the pond</em>
                </h2>
              </Reveal>
              <Reveal delay={150}>
                <p className="max-w-md text-[0.95rem] font-light leading-[1.85] text-cream-dim md:ml-auto">
                  Indoor rooms lit by rattan pendants, an open terrace under the canopy, and a garden courtyard that glows after dark.
                  Pull up a chair — there&apos;s no rush here.
                </p>
              </Reveal>
            </div>

            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
              {gallery.map((g, i) => (
                <Reveal key={g.src} delay={(i % 3) * 120} className="break-inside-avoid">
                  <div className="group relative overflow-hidden">
                    <Image src={g.src} alt={g.alt} width={g.w} height={g.h} sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="h-auto w-full transition-transform duration-[1.6s] ease-out group-hover:scale-105" />
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-14 text-center">
              <a href={cafe.instagram} target="_blank" rel="noopener noreferrer" className="link-underline font-serif text-2xl font-light italic text-cream/85">
                More moments on Instagram — {cafe.instagramHandle}
              </a>
            </Reveal>
          </div>
        </section>

        {/* ───────── New location note ───────── */}
        <section className="border-y border-line bg-ink-2">
          <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center md:px-10">
            <Reveal>
              <p className="eyebrow mb-3">Now open</p>
              <p className="font-serif text-3xl font-light md:text-4xl">
                Iris has a new home in <em className="text-brass">Yelahanka</em>.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <a href={cafe.instagram} target="_blank" rel="noopener noreferrer" className="border border-cream/30 px-7 py-4 text-[0.7rem] uppercase tracking-[0.25em] transition-colors duration-500 hover:border-brass hover:text-brass">
                Follow for updates
              </a>
            </Reveal>
          </div>
        </section>

        {/* ───────── Visit ───────── */}
        <section id="visit" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 py-28 md:px-10 md:py-40">
          <div className="grid gap-12 md:grid-cols-12 md:gap-10">
            <Reveal className="relative aspect-[4/5] overflow-hidden md:col-span-5">
              <Image src="/images/entrance-night.jpg" alt="Iris entrance at night with the illuminated logo and garden path" fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover" />
            </Reveal>

            <div className="flex flex-col md:col-span-6 md:col-start-7">
              <Reveal>
                <p className="eyebrow mb-6">Visit us</p>
                <h2 className="font-serif text-5xl font-light leading-[1.05] md:text-6xl">
                  Find us in <em className="text-brass">JP Nagar</em>
                </h2>
              </Reveal>

              <Reveal delay={150}>
                <dl className="mt-12 grid gap-10 sm:grid-cols-2">
                  <div>
                    <dt className="text-[0.68rem] uppercase tracking-[0.25em] text-cream-dim">Address</dt>
                    <dd className="mt-3 font-serif text-xl font-light leading-snug">
                      {cafe.addressLines.map((l) => (
                        <span key={l} className="block">{l}</span>
                      ))}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.68rem] uppercase tracking-[0.25em] text-cream-dim">Hours</dt>
                    {cafe.hours.map((h) => (
                      <dd key={h.days} className="mt-3 font-serif text-xl font-light leading-snug">
                        <span className="block">{h.days}</span>
                        <span className="block text-brass">{h.time}</span>
                      </dd>
                    ))}
                  </div>
                  <div>
                    <dt className="text-[0.68rem] uppercase tracking-[0.25em] text-cream-dim">Reservations</dt>
                    <dd className="mt-3 font-serif text-xl font-light">
                      <a href={cafe.phoneHref} className="link-underline">{cafe.phone}</a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.68rem] uppercase tracking-[0.25em] text-cream-dim">Write to us</dt>
                    <dd className="mt-3 font-serif text-xl font-light break-all">
                      <a href={`mailto:${cafe.email}`} className="link-underline">{cafe.email}</a>
                    </dd>
                  </div>
                </dl>
              </Reveal>

              <Reveal delay={250} className="mt-12">
                <div className="relative aspect-[16/10] overflow-hidden border border-line">
                  <iframe
                    title="Map showing Iris Café & Kitchen, JP Nagar"
                    src={cafe.mapsEmbed}
                    className="absolute inset-0 h-full w-full [filter:grayscale(1)_invert(0.92)_contrast(0.9)_sepia(0.25)]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a href={cafe.maps} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block bg-cream px-7 py-4 text-[0.7rem] uppercase tracking-[0.25em] text-ink transition-colors duration-500 hover:bg-brass">
                  Get directions
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───────── Marquee ───────── */}
        <div className="overflow-hidden border-t border-line bg-ink-2 py-6" aria-hidden>
          <div className="marquee flex w-max whitespace-nowrap">
            {[...marqueeWords, ...marqueeWords].map((w, i) => (
              <span key={i} className="flex items-center font-serif text-2xl font-light italic text-cream/70 md:text-3xl">
                <span className="px-8">{w}</span>
                <Image src="/brand/logo-leaf.png" alt="" width={88} height={87} className="h-5 w-5 opacity-80" />
              </span>
            ))}
          </div>
        </div>
      </main>

      {/* ───────── Footer ───────── */}
      <footer className="border-t border-line bg-ink-2">
        <div className="mx-auto max-w-[1400px] px-5 pt-20 pb-10 md:px-10">
          <div className="flex items-end justify-between gap-6">
            <p className="font-serif text-4xl font-light leading-tight md:text-6xl">
              Stay a while, <em className="text-brass">the lanterns are on.</em>
            </p>
            <Image
              src="/brand/logo-badge-mono.png"
              alt=""
              width={496}
              height={496}
              className="hidden h-44 w-44 shrink-0 opacity-[0.12] md:block"
            />
          </div>
          <div className="mt-14 grid gap-10 border-t border-line pt-10 text-sm font-light text-cream-dim md:grid-cols-4">
            <div>
              <Image src="/brand/logo-badge.png" alt="Iris Café & Kitchen" width={496} height={496} className="h-24 w-24" />
              <p className="mt-4">{cafe.tagline}.</p>
            </div>
            <div>
              <p className="mb-3 text-[0.68rem] uppercase tracking-[0.25em] text-brass">Visit</p>
              <p>{cafe.address}</p>
            </div>
            <div>
              <p className="mb-3 text-[0.68rem] uppercase tracking-[0.25em] text-brass">Open</p>
              <p>Every day</p>
              <p>9:00 am – 11:00 pm</p>
            </div>
            <div>
              <p className="mb-3 text-[0.68rem] uppercase tracking-[0.25em] text-brass">Follow</p>
              <a href={cafe.instagram} target="_blank" rel="noopener noreferrer" className="link-underline block w-fit text-cream">Instagram</a>
              <a href={cafe.maps} target="_blank" rel="noopener noreferrer" className="link-underline mt-1 block w-fit text-cream">Google Maps</a>
              <a href={cafe.phoneHref} className="link-underline mt-1 block w-fit text-cream">{cafe.phone}</a>
            </div>
          </div>
          <p className="mt-16 text-[0.65rem] uppercase tracking-[0.25em] text-cream/35">
            © {new Date().getFullYear()} Iris Café &amp; Kitchen · JP Nagar, Bengaluru
          </p>
        </div>
      </footer>
    </>
  );
}
