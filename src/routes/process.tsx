import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { ArrowRight, Check, Phone } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Rate, Process & The Ideal Voice | Dallas Voice Coach" },
      {
        name: "description",
        content:
          "One-hour lessons at $300 per session. Understand the Dallas Voice Coach process and the coordinated voice behind every great singer.",
      },
      { property: "og:title", content: "Rate, Process & The Ideal Voice | Dallas Voice Coach" },
      {
        property: "og:description",
        content: "The full Rate & Process and Ideal Voice explanation from Dallas Voice Coach.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProcessPage,
});

const rateFaqs = [
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

const variables = [
  "The singer's vocal power, intensity and attack",
  "Mastering the singer's 'lever' position",
  "Developing a fine-tuned control of the singer's 'shape'",
  "The singer's dominance of their 'support'",
  "The singer's ability to seamlessly maneuver through their passaggio",
  "The singer's production of their 'line'",
];

function ProcessPage() {
  const search = useSearch({ from: "/process" });
  const activeTab = search.tab === "ideal-voice" ? "ideal-voice" : "rate-process";

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-border py-20 lg:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <p className="eyebrow">The full picture</p>
          <h1 className="mt-4 max-w-4xl font-display text-6xl uppercase leading-[0.86] sm:text-8xl">
            How we build a voice you can <span className="text-gold">rely on.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            The rate is simple. The process is deliberate. The goal is a coordinated voice—powerful, beautiful, and consistent.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap gap-4 border-b border-border pb-6">
            <Link
              to="/process"
              search={{ tab: "rate-process" }}
              className={`px-6 py-3 text-sm font-bold uppercase transition-colors ${
                activeTab === "rate-process"
                  ? "bg-gold text-gold-foreground"
                  : "border border-border text-muted-foreground hover:border-gold hover:text-gold"
              }`}
            >
              Rate & Process
            </Link>
            <Link
              to="/process"
              search={{ tab: "ideal-voice" }}
              className={`px-6 py-3 text-sm font-bold uppercase transition-colors ${
                activeTab === "ideal-voice"
                  ? "bg-gold text-gold-foreground"
                  : "border border-border text-muted-foreground hover:border-gold hover:text-gold"
              }`}
            >
              The Ideal Voice
            </Link>
          </div>

          {activeTab === "rate-process" ? (
            <div className="mt-14">
              <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr]">
                <div className="border border-gold p-8 lg:sticky lg:top-28 lg:self-start">
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
                </div>

                <div className="space-y-10 text-lg leading-relaxed text-muted-foreground">
                  <div className="space-y-5">
                    <h2 className="font-display text-5xl uppercase leading-none text-foreground sm:text-6xl">
                      The process
                    </h2>
                    <p>
                      After first discussing the fundamental elements that drive the human voice, we will assess the student's voice through some basic exercises. Our initial focus will be on maximizing the development of both the upper and lower registers in isolation. This will lay the groundwork to build what will ultimately become a mature and powerful “coordinated voice.”
                    </p>
                    <p>
                      A coordinated voice refers to the tones produced when a singer simultaneously utilizes their upper and lower registers so as to produce a sound that has a dual quality. First establishing a coordinated sound and then mastering it via developing the ideal balance between the upper and lower registers is the ultimate objective. All of the world's greatest voices—regardless of the style or genre of music—have a fully developed coordinated voice.
                    </p>
                    <p>
                      Through every step of this process, we explain to students why we are doing what we are doing and will illustrate this with our own voice. This process builds the vocal concept in the mind of the student which dramatically increases the speed and traction of the learning process. The content and focus of lessons will advance and expand as the student's development increases, but these key principles always remain the same.
                    </p>
                    <p>
                      With consistent work, students will develop not only a powerful voice, but they will come to “know their voice” and thus they will be able to rely upon it. A steadfast confidence in one's voice is gained when students are able to hear and feel the dramatic increase in the strength and control that they gain over their voice.
                    </p>
                    <p>
                      When a student builds the muscle memory involved in consistently producing their ideal voice, confidence quickly follows. There is never again any reason to be apprehensive or concerned about one's ability to “be in good voice.”
                    </p>
                    <p className="border-l border-gold pl-6 font-display text-3xl uppercase leading-tight text-foreground">
                      Our teaching style is very results-oriented. We aggressively work to maximize the range, power, tone, control and versatility in the student's voice.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-4xl uppercase text-foreground">Good to know</h3>
                    <dl className="mt-8 border-t border-border">
                      {rateFaqs.map((faq) => (
                        <div key={faq.q} className="border-b border-border py-7">
                          <dt className="font-display text-2xl uppercase text-foreground">{faq.q}</dt>
                          <dd className="mt-3 max-w-3xl leading-relaxed">{faq.a}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-14">
              <div className="grid gap-12 lg:grid-cols-[1fr_0.4fr]">
                <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
                  <h2 className="font-display text-5xl uppercase leading-none text-foreground sm:text-6xl">
                    The Ideal Voice
                  </h2>
                  <p>
                    It is very common for singers from every musical genre to want to be able to sing higher, however they invariably find themselves straining when they attempt to hit higher notes. This sounds horrible and often results in the singer's voice “cracking.” Mastering the ability to consistently sing higher and produce tones that simultaneously sound both powerful and beautiful—thus having a “dual sound”—is a function of first developing the vocal registers in isolation so that the muscles are strong enough to hold, then developing and dominating a series of variables so those muscles can work together.
                  </p>

                  <div>
                    <h3 className="font-display text-3xl uppercase text-foreground">The variables</h3>
                    <ul className="mt-6 space-y-4">
                      {variables.map((v) => (
                        <li key={v} className="flex items-start gap-3">
                          <Check className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
                          <span>{v}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    When singers master these key variables, they are accepting the reality of the mechanics of the human voice. Producing one's voice stops being an “unknown” quantity that the singer “hopes will work” and it becomes something that the singer can rely upon. Typically, audiences do not understand or identify the fact that great singers have a “dual quality” in their voices, however, they do recognize the undeniable power in a great singer's voice.
                  </p>
                  <p>
                    What the untrained ear of the typical listener misses is that a great singer's voice is completely balanced. A fully developed singer will maintain the correct proportions of both the upper and lower registers relative to the pitch that they are producing. As a result, the singer is able to seamlessly sing through the “passaggio”—the passage between a person's lower and upper registers—with both power and ease. This is made possible as the tone is balanced and thus composed of both registers; it is not one or the other, it is both. This is why great singers do not sound thin or weak as they sing higher.
                  </p>
                  <p>
                    When a singer properly balances each of the primary variables referenced above, then singing higher and thus passing seamlessly through the passaggio becomes possible without any physical or audible strain. This singer has accepted the natural mechanics of the human voice and therefore the production of a “dual sound” is made possible. As far as the audience is concerned, they would not identify any of this; they would simply hear the singer's voice and refer to the sound that the singer produced as “awesome.”
                  </p>
                  <p>
                    Whether you are an experienced singer or just getting started, the vast majority of singers are NOT confident with every part of their voice. Many will say that they feel adequate in some areas and completely unconfident in other areas. This is very common in the beginning but with some work, this will soon become a distant memory.
                  </p>
                  <p className="border-l border-gold pl-6 font-display text-3xl uppercase leading-tight text-foreground">
                    We focus not only on maximizing vocal development but also on ensuring that students learn to dominate their voices. When a student masters these concepts they will never again need to be concerned with their ability to consistently produce their voice.
                  </p>
                </div>

                <div className="border border-gold p-8 lg:sticky lg:top-28 lg:self-start">
                  <p className="text-xs font-bold uppercase text-gold">Rate</p>
                  <p className="mt-3 font-display text-6xl leading-none">$300</p>
                  <p className="mt-2 text-sm font-semibold uppercase text-muted-foreground">
                    Per one-hour private session
                  </p>
                  <a
                    href="tel:+12143171090"
                    className="mt-7 inline-flex h-14 w-full items-center justify-center gap-3 bg-gold text-sm font-bold uppercase text-gold-foreground transition-colors hover:bg-gold-bright"
                  >
                    <Phone className="size-4" aria-hidden="true" /> Call or text 214-317-1090
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-gold py-20 text-gold-foreground lg:py-24">
        <div className="mx-auto flex max-w-[90rem] flex-col justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-end lg:px-12">
          <h2 className="max-w-3xl font-display text-6xl uppercase leading-[0.9] sm:text-7xl">
            Ready to hear the difference?
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
