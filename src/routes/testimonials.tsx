import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials | Dallas Voice Coach" },
      {
        name: "description",
        content:
          "Hear from working singers, touring musicians, and corporate performers who developed their voices with Dallas Voice Coach.",
      },
      { property: "og:title", content: "Testimonials | Dallas Voice Coach" },
      {
        property: "og:description",
        content: "Working singers on range, stamina, and the coordinated voice.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TestimonialsPage,
});

const testimonials = [
  {
    name: "Jaimie Scott",
    credit: "Le Freak",
    quote:
      "I've been a professional bass player for forty plus years. For decades, I was always the 'low harmony guy' in the myriad of acts that I have played with over the years. When I started studying with Dave he immediately began uncovering parts of my voice that I previously didn't know existed. He unlocked the upper register of my voice and explained what he wanted me to do daily to build all of the muscles of my voice. I started actively working on building my voice with Dave's methods and I have to say, I feel so much stronger vocally and I regularly sing high harmonies and even lead occasionally. Dave's ability to hear difficult male and female vocal parts and then immediately illustrate them with his own voice and then explain precisely what was happening in his voice to sing those parts is quite amazing! Witnessing this at each of our sessions completely changed my perspective as to what was possible in terms of singing. Now I enjoy singing more than ever before, and I am more useful and valuable to all of the acts that I perform with. I am so grateful to Dave for his thorough insight and instruction! I would wholeheartedly recommend studying with him. It's no accident that he is considered the premier voice instructor in Texas.",
  },
  {
    name: "Jamien-Ashley Easley",
    credit: "Heartbreaker — A Tribute to Pat Benatar",
    quote:
      "In 2022, I started studying regularly with David with the goal of starting my own band. Since then, we have met weekly to build both the muscles of my voice as well as the technique to facilitate the delivery of my best tones most efficiently. We have actively worked to improve my vocal technique and to convert that technique into muscle memory which has made the delivery of difficult vocal parts possible. The range, dynamics and the types of tones that are required for tributing Pat Benatar are quite involved; the high notes alone were very daunting at first. But I have found that the more that we built both the strength and my mental concept of my voice, I became more and more confident! David's coaching goes far beyond vocal training — he has been integral in developing my stage presence and performance skills. Everything from perfecting my mic technique to learning how to command a stage and read an audience; his guidance has been transformative! I am so proud to front Heartbreaker — A Tribute to Pat Benatar. Whether you're just starting out or you are a seasoned singer looking to level up significantly, I can't recommend Dallas Voice Coach enough!",
  },
  {
    name: "Jeff Bernstein",
    credit: "Pride — In The Name of U2",
    quote:
      "I have been studying with Dave since 2022 and I was amazed at how his instruction has prepared and protected my voice! David's understanding of the human voice is unparalleled. He has helped me strengthen my voice dramatically so that delivering very challenging vocals has become something that I do with ease. My vocal tone, strength and delivery have gone 'next level.' Dave is a consummate professional and his reputation precedes him as he is a long-time fixture of the DFW music scene working with many artists from local Texas greats to iconic multi-platinum stars. His coaching has been invaluable to me as I incorporate his principles and techniques at every show that I sing. I highly recommend his instruction to anyone looking to advance their voice for live performance.",
  },
  {
    name: "John Kenny",
    credit: "Epic Unplugged, The Elton Johns, Jane Says",
    quote:
      "I have been a vocalist for many years without having any formal training. Since working with David, he has transformed me from a vocalist to a true singer. My range and stamina have never been better and I am singing songs I wouldn't have thought possible before. Using his unique techniques, I have been able to hit notes effortlessly and without straining. I still have plenty of room for improvement and I look forward to growing as a singer with David's help. I couldn't recommend him enough!",
  },
  {
    name: "Kenny Lewis",
    credit: "Solo Artist, Formerly with China Town",
    quote:
      "I've been working with David since February of 2018... Where has the time gone? I never really considered myself a 'singer'. I was just a guitar player who could sing if you needed help on a few songs. After only a few months of working with David, I felt like a legitimate vocalist. I can't believe the difference in my voice! The crazy thing is that I noticed the difference right away... after the first lesson! A few months in and I was gaining real confidence. I'm the only male vocalist in my band and I probably sing 80% of the night. We do mostly corporate events and weddings and play 3-4 hours non-stop for most shows. I now have the stamina to do that multiple nights a week and at a higher level than ever before. He's even taught me how to sing through those nights when I'm not completely healthy. That's a huge deal for me! There's a reason why the majority of the vocalists in the DFW area have trained with David... He's definitely the 'go to' guy in the metroplex!",
  },
  {
    name: "Averielle Pipes",
    credit: "Solo Artist, Formerly with Emerald City Band",
    quote:
      "I have had the best experience with David at Dallas Voice Coach, and I don't plan on stopping!! He has brought out so much in my voice that it brings me to tears trying to express it all. I always knew that there was a science to great singing, but I never had a teacher who was able to explain it, illustrate it and bring it out of me until I found David. He is incredibly patient and he KNOWS what he's doing. At first I thought to myself 'these exercises are crazy! How is this going to help my voice to do what I want it to do?' I am so glad that I put in the hard work because he has absolutely been a huge part of saving my vocal life, developing an enormous range and my now being able to sing things that I never thought I would ever hear come from my voice. He is GOLD. Huge! Huge! Thank you to David... Amazing teacher!!!",
  },
  {
    name: "Joe Cosas",
    credit: "Keys/Vox/Utility/Co-MD for Jon Anderson (YES); Producer; Music Director",
    quote:
      "Dave is an amazing vocal coach! He is patient, enthusiastic, and encouraging. Dave had a crucial part in me getting my last tour opportunity. The group was looking for a keyboardist who could sing. They had already heard me play, so my audition was based on my singing. I beat out at least 4 other musicians. I wouldn't have had the confidence and/or technique I needed if it weren't for Dave. Now I'm touring and singing next to a Rock & Roll Hall of Famer! Thanks Dave!",
  },
  {
    name: "Tristan Blaine",
    credit: "Solo Artist",
    quote:
      "I have been studying with David at Dallas Voice Coach since 2013 and applying his vocal technique has totally helped me reach both higher and lower notes! David has shown me how to build a coordinated voice and has given me the knowledge of how to hit the high notes without straining. David has definitely helped me to achieve my goals and to get where I am today!!",
  },
  {
    name: "Teresa Lickliter",
    credit: "Solo Artist & Worship Leader",
    quote:
      "When I walked into the Dallas Voice Coach studio, I had what I considered to be an average voice with little confidence and even less understanding of how my voice worked. After having trained with several vocal coaches in Dallas, I didn't really know what to expect, but was pleasantly surprised to discover it was unlike anything I had ever experienced with vocal coaching before. I like to tell people, 'it is like CrossFit for the voice'. You don't just sing a few scales and then fumble through a song. You learn how to maximize your vocal ability by developing the proper techniques and understanding of how your voice actually functions. David shows you by example and in terms you can understand, exactly how to sing with the power and clarity you have always hoped for. I am thrilled with my progress so far and I am looking forward to seeing how far I can go!",
  },
];

function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-border py-20 lg:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <p className="eyebrow">Testimonials</p>
          <h1 className="mt-4 max-w-4xl font-display text-6xl uppercase leading-[0.86] sm:text-8xl">
            Voices that found their <span className="text-gold">range.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Working singers, touring musicians, corporate performers, and educators on what changed in their voices.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="flex flex-col border border-border bg-background p-8 transition-colors hover:border-gold/50"
              >
                <Quote className="size-6 text-gold" aria-hidden="true" />
                <blockquote className="mt-5 flex-1 leading-relaxed text-muted-foreground">
                  “{t.quote}”
                </blockquote>
                <footer className="mt-8 border-t border-border pt-6">
                  <p className="font-display text-2xl uppercase text-foreground">{t.name}</p>
                  <p className="mt-1 text-xs font-semibold uppercase text-gold">{t.credit}</p>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gold py-20 text-gold-foreground lg:py-24">
        <div className="mx-auto flex max-w-[90rem] flex-col justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-end lg:px-12">
          <h2 className="max-w-3xl font-display text-6xl uppercase leading-[0.9] sm:text-7xl">
            Add your voice to the list.
          </h2>
          <a
            href="tel:+12143171090"
            className="inline-flex h-16 shrink-0 items-center gap-3 bg-background px-8 text-sm font-bold uppercase text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Call or text 214-317-1090
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
