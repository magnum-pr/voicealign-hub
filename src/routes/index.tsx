import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, Mic2, Play } from "lucide-react";

import vocalistImage from "@/assets/dvc-vocalist.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dallas Voice Coach | Build a World-Class Voice" },
      {
        name: "description",
        content:
          "Results-oriented vocal coaching in Dallas for adult singers, young artists, and working professionals.",
      },
      { property: "og:title", content: "Dallas Voice Coach | Build a World-Class Voice" },
      {
        property: "og:description",
        content: "Serious vocal coaching for stage, studio, and every room that matters.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pathways = [
  {
    number: "01",
    title: "Adult Singers",
    copy: "Build range, power, and stamina with technique designed for the voice you have now.",
    detail: "Stage · Studio · Personal mastery",
  },
  {
    number: "02",
    title: "Working Professionals",
    copy: "Develop a voice that carries authority—without strain—in meetings, media, and keynotes.",
    detail: "Presence · Clarity · Endurance",
  },
  {
    number: "03",
    title: "Young Singers",
    copy: "Create healthy foundations, confident artistry, and smart preparation for auditions.",
    detail: "Technique · Auditions · Confidence",
  },
];

const outcomes = [
  "Power without pushing",
  "High notes without fear",
  "A connected, balanced range",
  "Technique that holds under pressure",
];

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-border/70">
        <div className="mx-auto flex h-20 max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" className="group flex items-center gap-3" aria-label="Dallas Voice Coach home">
            <span className="flex size-10 items-center justify-center border border-gold/60 text-gold transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
              <Mic2 className="size-5" aria-hidden="true" />
            </span>
            <span className="font-display text-2xl uppercase leading-none">Dallas Voice Coach</span>
          </a>
          <nav className="hidden items-center gap-8 text-xs font-semibold uppercase text-muted-foreground md:flex" aria-label="Main navigation">
            <a href="#pathways" className="transition-colors hover:text-gold">Coaching</a>
            <a href="#method" className="transition-colors hover:text-gold">The Method</a>
            <a href="#proof" className="transition-colors hover:text-gold">Results</a>
          </nav>
          <a href="#consultation" className="border border-gold bg-gold px-5 py-3 text-xs font-bold uppercase text-gold-foreground transition-colors hover:bg-gold-bright">
            Book a consultation
          </a>
        </div>
      </header>

      <section id="top" className="relative min-h-[760px] border-b border-border lg:min-h-[900px]">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[54%]">
          <img
            src={vocalistImage}
            alt="Vocalist performing at a professional studio microphone"
            width={1200}
            height={1600}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-hero-veil" aria-hidden="true" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[90rem] items-end px-5 pb-16 pt-36 sm:px-8 lg:min-h-[900px] lg:items-center lg:px-12 lg:pb-24 lg:pt-28">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-4 text-xs font-semibold uppercase text-silver">
              <span className="h-px w-12 bg-gold" />
              Dallas / Fort Worth
            </div>
            <h1 className="max-w-2xl font-display text-[4.6rem] uppercase leading-[0.83] sm:text-[6.5rem] lg:text-[8.75rem]">
              Build a voice that <span className="text-gold">commands.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-silver sm:text-xl">
              Results-oriented vocal coaching for stage, studio, and every room that matters.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a href="#consultation" className="inline-flex h-14 items-center gap-3 bg-foreground px-7 text-sm font-bold uppercase text-background transition-colors hover:bg-gold">
                Find your starting point <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <a href="#method" className="inline-flex h-14 items-center gap-3 border-b border-silver/60 text-sm font-semibold uppercase text-foreground transition-colors hover:border-gold hover:text-gold">
                <Play className="size-4 fill-current" aria-hidden="true" /> See the method
              </a>
            </div>
          </div>
        </div>

        <a href="#pathways" aria-label="Explore coaching pathways" className="absolute bottom-0 right-0 z-20 hidden h-20 w-20 items-center justify-center border-l border-t border-border bg-background text-silver transition-colors hover:text-gold lg:flex">
          <ArrowDown className="size-5" aria-hidden="true" />
        </a>
      </section>

      <section id="pathways" className="border-b border-border bg-surface py-24 lg:py-32">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="eyebrow">Coaching pathways</p>
              <h2 className="mt-4 font-display text-6xl uppercase leading-none sm:text-7xl">Where do you want your voice to take you?</h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:justify-self-end">
              Different voices need different work. Start with the outcome that matters to you, then build a plan around your instrument.
            </p>
          </div>

          <div className="mt-16 grid border-l border-t border-border md:grid-cols-3">
            {pathways.map((pathway) => (
              <a key={pathway.number} href="#consultation" className="group flex min-h-80 flex-col border-b border-r border-border p-7 transition-colors hover:bg-elevated sm:p-9">
                <span className="font-display text-3xl text-gold">{pathway.number}</span>
                <div className="mt-auto">
                  <h3 className="font-display text-4xl uppercase">{pathway.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{pathway.copy}</p>
                  <div className="mt-8 flex items-center justify-between border-t border-border pt-5 text-xs font-semibold uppercase text-silver">
                    <span>{pathway.detail}</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="method" className="relative border-b border-border py-24 lg:py-36">
        <div className="mx-auto grid max-w-[90rem] gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12">
          <div className="relative min-h-[420px] overflow-hidden border border-border bg-elevated p-8 sm:p-12">
            <div className="absolute inset-8 border border-border/70" aria-hidden="true" />
            <div className="absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/30" aria-hidden="true" />
            <div className="absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-silver/20" aria-hidden="true" />
            <div className="relative flex min-h-[330px] flex-col items-center justify-center text-center">
              <Mic2 className="size-10 text-gold" aria-hidden="true" />
              <p className="mt-7 font-display text-6xl uppercase leading-none">Mechanism<br />meets artistry.</p>
              <p className="mt-5 text-xs font-semibold uppercase text-silver">The Dallas Voice Method</p>
            </div>
          </div>

          <div className="lg:pl-10">
            <p className="eyebrow">Not just song coaching</p>
            <h2 className="mt-4 font-display text-6xl uppercase leading-none sm:text-7xl">We build the instrument.</h2>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Understand how your voice works. Train it with precision. Apply it under real performance pressure. The goal is not one good lesson—it is a reliable, world-class voice you own.
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex items-center gap-3 border-t border-border py-4 text-sm font-semibold uppercase">
                  <Check className="size-4 shrink-0 text-gold" aria-hidden="true" /> {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="proof" className="bg-foreground py-24 text-background lg:py-32">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-xs font-semibold uppercase text-oxblood">Student result</p>
              <p className="mt-4 font-display text-5xl uppercase leading-none sm:text-6xl">The moment the voice stops holding you back.</p>
            </div>
            <blockquote className="border-l border-gold pl-7 sm:pl-12">
              <p className="font-display text-4xl uppercase leading-tight text-background sm:text-5xl">
                “I stopped hoping the note would be there. I knew it would be there.”
              </p>
              <footer className="mt-8 text-sm font-semibold uppercase text-background/60">Dallas Voice Coach student · Performance program</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section id="consultation" className="border-b border-border bg-gold py-24 text-gold-foreground lg:py-32">
        <div className="mx-auto flex max-w-[90rem] flex-col justify-between gap-10 px-5 sm:px-8 lg:flex-row lg:items-end lg:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase">Your next note starts here</p>
            <h2 className="mt-5 font-display text-7xl uppercase leading-[0.88] sm:text-8xl lg:text-9xl">Let’s hear what your voice can become.</h2>
          </div>
          <a href="mailto:info@dallasvoicecoach.com?subject=Vocal%20consultation" className="inline-flex h-16 shrink-0 items-center justify-center gap-3 bg-background px-8 text-sm font-bold uppercase text-foreground transition-colors hover:bg-foreground hover:text-background">
            Request a consultation <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="bg-background py-10">
        <div className="mx-auto flex max-w-[90rem] flex-col gap-5 px-5 text-xs uppercase text-muted-foreground sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <span className="font-display text-2xl text-foreground">Dallas Voice Coach</span>
          <span>World-class voices are built.</span>
          <span>Dallas · Fort Worth</span>
        </div>
      </footer>
    </main>
  );
}