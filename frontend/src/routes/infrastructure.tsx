import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { images } from "@/lib/site-config";
import facilityImg from "../assets/facility.jpg";

export const Route = createFileRoute("/infrastructure")({
  head: () => ({
    meta: [
      { title: "Infrastructure — DOMEX KIDS Manufacturing" },
      { name: "description", content: "Inside the DOMEX KIDS facility: production, quality checking, packaging, dispatch and pan-India transportation." },
      { property: "og:title", content: "Infrastructure — DOMEX KIDS" },
      { property: "og:description", content: "A closer look at our manufacturing and logistics operations." },
      { property: "og:image", content: images.factory1 },
      { property: "og:url", content: "/infrastructure" },
    ],
    links: [{ rel: "canonical", href: "/infrastructure" }],
  }),
  component: Infrastructure,
});

const stages = [
  { n: "01", t: "Production", d: "Cutting, stitching and finishing at scale — with the finish of premium retail.", img: facilityImg },
  { n: "02", t: "Quality Checking", d: "Every piece inspected for fabric, fit and finish before it moves on.", img: images.factory2 },
  { n: "03", t: "Packaging", d: "Retail-ready packaging that protects garments through long journeys.", img: images.factory3 },
  { n: "04", t: "Dispatch", d: "Batched, labelled and prepared for onward transport within hours.", img: images.factory4 },
  { n: "05", t: "Transportation", d: "Pan India delivery via trusted transport partners.", img: images.factory5 },
];

function Infrastructure() {
  return (
    <>
      <section className="pt-32 md:pt-40">
        <div className="container-x">
          <Reveal><div className="text-xs uppercase tracking-[0.28em] text-brand font-medium mb-6">Infrastructure</div></Reveal>
          <Reveal delay={100}>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] max-w-3xl">
              Where craft meets scale.
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-xl text-muted-foreground text-lg">
              A closer look at the facility, people and systems behind every DOMEX KIDS garment.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mt-16 md:mt-24">
        <div className="container-x space-y-8 md:space-y-14">
          {stages.map((s, i) => (
            <Reveal key={s.n} delay={i * 60}>
              <article className={`grid md:grid-cols-12 gap-8 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="md:col-span-7">
                  <div className="zoom-img rounded-3xl overflow-hidden aspect-[16/10]">
                    <img src={s.img} alt={s.t} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
                <div className="md:col-span-5">
                  <div className="text-brand font-serif text-xl">{s.n}</div>
                  <h3 className="mt-2 font-serif text-3xl md:text-4xl">{s.t}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-28">
        <div className="container-x">
          <SectionHeading eyebrow="At a glance" title="A facility built for consistency." align="center" />
          <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { l: "In-house production", v: "Yes" },
              { l: "Quality checks", v: "100%" },
              { l: "Dispatch time", v: "24–72h" },
              { l: "Reach", v: "Pan India" },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 90}>
                <div className="rounded-3xl bg-white border border-border p-7 text-center">
                  <div className="font-serif text-3xl">{s.v}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
