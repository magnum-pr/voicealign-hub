import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Phone, Quote } from "lucide-react";

import davidImage from "@/assets/dvc-david.jpg";
import vocalistImage from "@/assets/dvc-vocalist.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dallas Voice Coach | Build a World-Class Voice" },
      {
        name: "description",
        content:
          "Results-oriented vocal coaching in Plano and Dallas–Fort Worth with David Houston. Build range, power, and a coordinated voice you can rely on.",
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
  "A connected, coordinated range",
  "Technique that holds under pressure",
];

const credentials = [
  { value: "2012", label: "Founded in DFW" },
  { value: "100s", label: "Students coached" },
  { value: "20 yrs", label: "Studied under Arthur Peters" },
];

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />

      {/* HERO — the coach is the hero card */}
      <section className="relative border-b border-border py-16 lg:py-24">
        <div className="mx-auto grid max-w-[90rem] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
          <div>
            <div className="mb-6 flex items-center gap-4 text-xs font-semibold uppercase text-silver">
              <span className="h-px w-12 bg-gold" />
              Plano · Dallas / Fort Worth
            </div>
            <h1 className="font-display text-[4.4rem] uppercase leading-[0.83] sm:text-[6.2rem] lg:text-[7.6rem]">
              Build a voice that <span className="text-gold">commands.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-silver sm:text-xl">
              Results-oriented vocal coaching with David Houston—founder of Dallas Voice Coach and the
              instructor behind hundreds of Texas voices.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="tel:+12143171090"
                className="inline-flex h-14 items-center gap-3 bg-gold px-7 text-sm font-bold uppercase text-gold-foreground transition-colors hover:bg-gold-bright"
              >
                <Phone className="size-4" aria-hidden="true" /> Call or text 214-317-1090
              </a>
              <Link
                to="/services"
                className="inline-flex h-14 items-center gap-3 border-b border-silver/60 text-sm font-semibold uppercase transition-colors hover:border-gold hover:text-gold"
              >
                See the process <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            <dl className="mt-12 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
              {credentials.map((item) => (
                <div key={item.label}>
                  <dt className="font-display text-4xl text-gold">{item.value}</dt>
                  <dd className="mt-1 text-xs font-semibold uppercase text-muted-foreground">{item.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="relative border border-border bg-elevated">
            <img
              src={davidImage}
              alt="David Houston, founder and lead vocal coach at Dallas Voice Coach"
              width={818}
              height={1022}
              className="h-full max-h-[42rem] w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-owner-veil" aria-hidden="true" />
            <figcaption className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <p className="text-xs font-bold uppercase text-gold">Founder & managing director</p>
              <p className="mt-2 font-display text-5xl uppercase leading-none">David Houston</p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-silver">
                Proprietary vocal concepts, developed over three decades on Texas stages and in the studio.
              </p>
              <Link
                to="/about"
                className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase text-foreground transition-colors hover:text-gold"
              >
                Meet the team <ArrowRight className="size-3.5" aria-hidden="true" />
              </Link>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* PATHWAYS */}
      <section className="border-b border-border bg-surface py-24 lg:py-32">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="eyebrow">Coaching pathways</p>
              <h2 className="mt-4 font-display text-6xl uppercase leading-none sm:text-7xl">
                Where do you want your voice to take you?
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:justify-self-end">
              Different voices need different work. Start with the outcome that matters to you, then build a
              plan around your instrument.
            </p>
          </div>

          <div className="mt-16 grid border-l border-t border-border md:grid-cols-3">
            {pathways.map((pathway) => (
              <Link
                key={pathway.number}
                to="/services"
                className="group flex min-h-80 flex-col border-b border-r border-border p-7 transition-colors hover:bg-elevated sm:p-9"
              >
                <span className="font-display text-3xl text-gold">{pathway.number}</span>
                <div className="mt-auto">
                  <h3 className="font-display text-4xl uppercase">{pathway.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{pathway.copy}</p>
                  <div className="mt-8 flex items-center justify-between border-t border-border pt-5 text-xs font-semibold uppercase text-silver">
                    <span>{pathway.detail}</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section className="relative border-b border-border py-24 lg:py-32">
        <div className="mx-auto grid max-w-[90rem] gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-12">
          <div>
            <p className="eyebrow">The method</p>
            <h2 className="mt-4 font-display text-6xl uppercase leading-none sm:text-7xl">
              We build the coordinated voice.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Upper and lower registers are first developed in isolation, then balanced into a single
              coordinated voice—the trait every world-class singer shares. Every step is explained and
              illustrated with the coach's own voice, so you build the concept in your mind as fast as you
              build it in your muscles.
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-center gap-3 border-t border-border py-4 text-sm font-semibold uppercase"
                >
                  <Check className="size-4 shrink-0 text-gold" aria-hidden="true" /> {outcome}
                </li>
              ))}
            </ul>
            <Link
              to="/services"
              className="mt-10 inline-flex items-center gap-3 border-b border-gold pb-1 text-sm font-bold uppercase text-gold"
            >
              Rate & process <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <figure className="relative overflow-hidden border border-border bg-elevated">
            <img
              src={vocalistImage}
              alt="Vocalist performing at a professional studio microphone"
              width={1200}
              height={1600}
              loading="lazy"
              className="h-full min-h-[420px] w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-owner-veil" aria-hidden="true" />
            <figcaption className="absolute inset-x-0 bottom-0 p-7 text-xs font-semibold uppercase text-silver sm:p-9">
              Private professional studio · Plano, TX
            </figcaption>
          </figure>
        </div>
      </section>

      {/* PROOF */}
      <section className="bg-foreground py-24 text-background lg:py-32">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-xs font-semibold uppercase text-oxblood">Student result</p>
              <p className="mt-4 font-display text-5xl uppercase leading-none sm:text-6xl">
                The moment the voice stops holding you back.
              </p>
              <Link
                to="/testimonials"
                className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase text-background/70 hover:text-background"
              >
                Read all testimonials <ArrowRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>
            <blockquote className="border-l border-gold pl-7 sm:pl-12">
              <Quote className="mb-6 size-8 text-gold" aria-hidden="true" />
              <p className="font-display text-4xl uppercase leading-tight sm:text-5xl">
                “He has transformed me from a vocalist to a true singer. My range and stamina have never been
                better.”
              </p>
              <footer className="mt-8 text-sm font-semibold uppercase text-background/60">
                John Kenny · Epic Unplugged, The Elton Johns
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold py-24 text-gold-foreground lg:py-32">
        <div className="mx-auto flex max-w-[90rem] flex-col justify-between gap-10 px-5 sm:px-8 lg:flex-row lg:items-end lg:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase">Your next note starts here</p>
            <h2 className="mt-5 font-display text-7xl uppercase leading-[0.88] sm:text-8xl lg:text-9xl">
              Let’s hear what your voice can become.
            </h2>
          </div>
          <a
            href="tel:+12143171090"
            className="inline-flex h-16 shrink-0 items-center justify-center gap-3 bg-background px-8 text-sm font-bold uppercase text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Call or text 214-317-1090 <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
