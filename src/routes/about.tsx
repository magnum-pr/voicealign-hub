import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import davidImage from "@/assets/dvc-david.jpg";
import hillaryImage from "@/assets/dvc-hillary.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Meet the Team | Dallas Voice Coach" },
      {
        name: "description",
        content:
          "David Houston, founder of Dallas Voice Coach, and senior instructor Hillary Leverton—three decades of Texas stage, studio, and teaching experience.",
      },
      { property: "og:title", content: "Meet the Team | Dallas Voice Coach" },
      {
        property: "og:description",
        content: "The coaches behind hundreds of developed Texas voices.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const davidBio = [
  "David was born and raised in Westchester, NY and moved to the Dallas area in 1983. He attended Jesuit College Prep and earned a BA and an MBA from the University of North Texas.",
  "He began singing in rock bands at fourteen. At nineteen he began studying privately with renowned operatic tenor Arthur Peters—formerly of the San Francisco Opera—and studied under him for the last twenty years of his life.",
  "In 1990 he founded and fronted the progressive rock band Mindstorm; in 2005 he fronted the rock/pop project Adrian's Fault, known for a demanding, technically diverse repertoire.",
  "In 2012 he founded Dallas Voice Coach and developed his own proprietary vocal concepts, terminology, and core principles. Since then he has instructed hundreds of students, developed the voices of numerous top Texas-based artists, and worked with multi-platinum artists on maintaining and strengthening their voices.",
];

const hillaryBio = [
  "Hillary Leverton holds a Bachelor of Music Education from McMurry University and a Level II Certification in the Kodály Method from the University of North Texas. She has taught music at Stinson Elementary in Plano ISD since 2007.",
  "Her honors include Elite Educator of the Year (KRBC), Beginning Teacher of the Year and Experienced Teacher of the Year in Plano ISD, the National PTA Life Achievement Award, and two Sue Bancroft Teacher of the Year Awards from the North Texas Children's Choir for excellence in training young singers.",
  "She has been a versatile lead vocalist in the DFW scene for over two decades, including 17 years with the show band Coco-Bann, opening for The Temptations, The Platters, The Drifters, and The Marvelettes.",
  "She currently performs as “Frida” in Super Trouper: The ABBA Sensation, fronts the rock band Slim Chance and 80s tribute Division 80, and portrays “Alanis” in Ironic: The Alanis Morissette Experience.",
];

function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-border py-20 lg:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <p className="eyebrow">Meet the team</p>
          <h1 className="mt-4 max-w-4xl font-display text-6xl uppercase leading-[0.86] sm:text-8xl">
            The people behind the <span className="text-gold">method.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Dallas Voice Coach is not a franchise curriculum. It is a proprietary approach built by working
            performers who teach every day.
          </p>
        </div>
      </section>

      <section className="border-b border-border py-20 lg:py-28">
        <div className="mx-auto grid max-w-[90rem] gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
          <figure className="relative border border-border bg-elevated lg:sticky lg:top-28 lg:self-start">
            <img
              src={davidImage}
              alt="Portrait of David Houston, founder of Dallas Voice Coach"
              width={818}
              height={1022}
              className="w-full object-cover"
            />
            <figcaption className="border-t border-border p-6">
              <p className="font-display text-4xl uppercase">David Houston</p>
              <p className="mt-1 text-xs font-bold uppercase text-gold">Founder & managing director</p>
            </figcaption>
          </figure>

          <div>
            <h2 className="font-display text-5xl uppercase leading-none sm:text-6xl">
              Thirty years of stage, studio, and study.
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              {davidBio.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
            <p className="mt-8 border-l border-gold pl-6 font-display text-3xl uppercase leading-tight">
              “I pride myself on uncovering and developing the idealized voice in every student—voices that are
              simultaneously powerful and beautiful.”
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface py-20 lg:py-28">
        <div className="mx-auto grid max-w-[90rem] gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12">
          <div className="lg:order-2">
            <figure className="relative border border-border bg-elevated">
              <img
                src={hillaryImage}
                alt="Portrait of Hillary Leverton, senior instructor at Dallas Voice Coach"
                width={480}
                height={720}
                loading="lazy"
                className="w-full object-cover"
              />
              <figcaption className="border-t border-border p-6">
                <p className="font-display text-4xl uppercase">Hillary Leverton</p>
                <p className="mt-1 text-xs font-bold uppercase text-gold">Senior instructor</p>
              </figcaption>
            </figure>
          </div>
          <div className="lg:order-1">
            <h2 className="font-display text-5xl uppercase leading-none sm:text-6xl">
              A career educator and a working front-woman.
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              {hillaryBio.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gold py-20 text-gold-foreground lg:py-24">
        <div className="mx-auto flex max-w-[90rem] flex-col justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-end lg:px-12">
          <h2 className="max-w-3xl font-display text-6xl uppercase leading-[0.9] sm:text-7xl">
            Start with a conversation about your voice.
          </h2>
          <Link
            to="/contact"
            className="inline-flex h-16 shrink-0 items-center gap-3 bg-background px-8 text-sm font-bold uppercase text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Contact the studio <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
