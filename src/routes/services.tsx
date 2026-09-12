import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Coaching, Rate & Process | Dallas Voice Coach" },
      {
        name: "description",
        content:
          "One-hour private vocal lessons at $300 per session in Plano, TX. See the Dallas Voice Coach process for building a coordinated, reliable voice.",
      },
      { property: "og:title", content: "Coaching, Rate & Process | Dallas Voice Coach" },
      {
        property: "og:description",
        content: "How we build vocal athletes: registers in isolation, then a coordinated voice.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const steps = [
  {
    number: "01",
    title: "Diagnose",
    copy: "We discuss the fundamental elements that drive the human voice, then assess your instrument through basic exercises.",
  },
  {
    number: "02",
    title: "Isolate",
    copy: "Upper and lower registers are developed separately, laying the groundwork for a mature, powerful voice.",
  },
  {
    number: "03",
    title: "Coordinate",
    copy: "We establish the coordinated voice—upper and lower registers used simultaneously for a dual-quality tone.",
  },
  {
    number: "04",
    title: "Master",
    copy: "Balance is refined until the ideal voice becomes muscle memory you can rely on under any pressure.",
  },
];

const programs = [
  {
    title: "Adult Singers",
    copy: "Range, power, tone, control, and versatility for stage and studio work—whatever the genre.",
    points: ["Register development", "Coordinated tone", "Stamina for full sets"],
  },
  {
    title: "Working Professionals",
    copy: "Authority and clarity without strain for keynotes, media, sales, and leadership presence.",
    points: ["Breath and support", "Projection without push", "All-day endurance"],
  },
  {
    title: "Young Singers",
    copy: "Healthy foundations and confident artistry, with smart preparation for auditions and ensembles.",
    points: ["Age-appropriate technique", "Audition prep", "Confidence building"],
  },
];

const faqs = [
  {
    q: "What is the first step?",
    a: "Call David and chat for a few minutes. He'll ask about your voice and experience—beginners are welcome—and explain his background and process.",
  },
  {
    q: "What happens at my first lesson?",
    a: "We explain the fundamental principles behind any great voice and illustrate each with our own voice, then use quick exercises to determine where your development stands.",
  },
  {
    q: "How quickly will I see results?",
    a: "Expanded range and increased power usually come fairly quickly. A mature coordinated voice requires consistent work, but most students hear a significant difference within the first couple of months.",
  },
  {
    q: "Can I learn to sing?",
    a: "If you can match a pitch, you can develop and strengthen your vocal registers.",
  },
  {
    q: "Do lessons change over time?",
    a: "Yes. Material advances with your development and adapts to the repertoire you ultimately want to master.",
  },
];

function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-border py-20 lg:py-28">
        <div className="mx-auto grid max-w-[90rem] gap-10 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-12">
          <div>
            <p className="eyebrow">Coaching</p>
            <h1 className="mt-4 max-w-3xl font-display text-6xl uppercase leading-[0.86] sm:text-8xl">
              We build vocal <span className="text-gold">athletes.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Our teaching style is aggressively results-oriented: we maximize range, power, tone, control, and
              versatility in every student's voice.
            </p>
          </div>
          <div className="border border-gold p-8">
            <p className="text-xs font-bold uppercase text-gold">Rate</p>
            <p className="mt-3 font-display text-7xl leading-none">$300</p>
            <p className="mt-2 text-sm font-semibold uppercase text-muted-foreground">
              Per one-hour private session
            </p>
            <a
              href="tel:+12143171090"
              className="mt-7 inline-flex h-14 w-full items-center justify-center gap-3 bg-gold text-sm font-bold uppercase text-gold-foreground transition-colors hover:bg-gold-bright"
            >
              <Phone className="size-4" aria-hidden="true" /> Call or text 214-317-1090
            </a>
            <Link
              to="/process"
              search={{ tab: "ideal-voice" }}
              className="mt-5 block text-center text-xs font-bold uppercase text-gold hover:text-gold-bright"
            >
              Learn more about the Ideal Voice
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <p className="eyebrow">The process</p>
          <h2 className="mt-4 max-w-3xl font-display text-6xl uppercase leading-none sm:text-7xl">
            Four stages to a voice you can count on.
          </h2>
          <div className="mt-14 grid border-l border-t border-border md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="flex min-h-72 flex-col border-b border-r border-border p-7 sm:p-9">
                <span className="font-display text-3xl text-gold">{step.number}</span>
                <div className="mt-auto">
                  <h3 className="font-display text-4xl uppercase">{step.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{step.copy}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl border-l border-gold pl-6 text-lg leading-relaxed text-muted-foreground">
            Every step is explained and illustrated with the coach's own voice. Building the vocal concept in
            your mind dramatically increases the speed and traction of your learning.{" "}
            <Link to="/process" search={{ tab: "rate-process" }} className="font-semibold text-gold hover:text-gold-bright">
              Read the full Rate & Process explanation.
            </Link>
          </p>
        </div>
      </section>

      <section className="border-b border-border py-20 lg:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <p className="eyebrow">Programs</p>
          <h2 className="mt-4 font-display text-6xl uppercase leading-none sm:text-7xl">Who we coach</h2>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {programs.map((program) => (
              <article key={program.title} className="flex flex-col border border-border bg-surface p-8">
                <h3 className="font-display text-4xl uppercase">{program.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{program.copy}</p>
                <ul className="mt-7 space-y-3 border-t border-border pt-6 text-xs font-semibold uppercase text-silver">
                  {program.points.map((point) => (
                    <li key={point} className="flex items-center gap-3">
                      <span className="size-1.5 shrink-0 bg-gold" aria-hidden="true" /> {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface py-20 lg:py-28">
        <div className="mx-auto grid max-w-[90rem] gap-12 px-5 sm:px-8 lg:grid-cols-[0.6fr_1.4fr] lg:px-12">
          <div>
            <p className="eyebrow">Questions</p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-none sm:text-6xl">Good to know</h2>
          </div>
          <dl className="border-t border-border">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-border py-7">
                <dt className="font-display text-3xl uppercase">{faq.q}</dt>
                <dd className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-gold py-20 text-gold-foreground lg:py-24">
        <div className="mx-auto flex max-w-[90rem] flex-col justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-end lg:px-12">
          <h2 className="max-w-3xl font-display text-6xl uppercase leading-[0.9] sm:text-7xl">
            Ready to hear what changes in a month?
          </h2>
          <a
            href="tel:+12143171090"
            className="inline-flex h-16 shrink-0 items-center gap-3 bg-background px-8 text-sm font-bold uppercase text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Call or text 214-317-1090 <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
