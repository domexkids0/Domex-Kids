import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Counter } from "@/components/site/Counter";
import { images, site } from "@/lib/site-config";
import facilityImg from "../assets/facility.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — DOMEX KIDS" },
      { name: "description", content: "DOMEX KIDS is a Delhi-based wholesale kids wear manufacturer serving 5,000+ retailers across India since 2014." },
      { property: "og:title", content: "About DOMEX KIDS" },
      { property: "og:description", content: "Delhi-based wholesale kids wear manufacturer since 2014." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="container-x mx-auto max-w-7xl pt-32 md:pt-40 pb-24 lg:pb-32">
        <Reveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="text-xs tracking-[0.3em] text-brand uppercase">
              Our Story
            </div>
            <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
              Crafted in Delhi. Worn across India.
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
                <img
                  src={facilityImg}
                  alt="DOMEX KIDS manufacturing facility"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-105"
                />
              </div>
              <div className="absolute -right-4 -top-4 hidden rounded-2xl border border-border bg-white p-5 shadow-lg md:block">
                <div className="font-serif text-3xl text-brand">2014</div>
                <div className="text-xs tracking-widest text-muted-foreground uppercase">
                  Founded
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p className="text-lg leading-relaxed text-foreground/85">
              Established in {site.founded}, {site.name} has grown into one of Delhi's most trusted
              wholesale manufacturers of premium kids wear. From our workshop in Gandhi Nagar —
              India's largest textile market — we design and manufacture stylish, comfortable and
              affordable garments for children aged 1 to 16 years.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Our collections combine modern fashion trends with durable fabrics, ensuring every
              piece offers comfort, quality and value. With an efficient nationwide logistics
              network and partnerships with leading transport companies, we deliver reliably to
              retailers across the country.
            </p>
            <p className="text-foreground font-medium">
              At DOMEX KIDS, we believe every retailer deserves access to premium-quality kids
              fashion at competitive wholesale prices.
            </p>
          </div>
          </Reveal>
        </div>
      </section>

      <section className="mt-28">
        <div className="container-x">
          <div className="rounded-3xl bg-white border border-border p-10 md:p-16 grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { l: "Years of craft", v: 11, s: "+" },
              { l: "Retail partners", v: 5000, s: "+" },
              { l: "Bulk orders", v: 10000, s: "+" },
              { l: "Cities served", v: 200, s: "+" },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 80}>
                <div>
                  <div className="font-serif text-4xl md:text-5xl"><Counter to={s.v} suffix={s.s} /></div>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-28">
        <div className="container-x grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="rounded-3xl bg-white border border-border p-10">
              <div className="text-xs uppercase tracking-[0.2em] text-brand">Mission</div>
              <h3 className="mt-4 font-serif text-3xl">Fashion that fits every childhood.</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Manufacture premium-quality kids garments at wholesale prices that empower retailers
                everywhere to serve their communities better.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-3xl bg-white border border-border p-10">
              <div className="text-xs uppercase tracking-[0.2em] text-brand">Vision</div>
              <h3 className="mt-4 font-serif text-3xl">India's most trusted wholesale partner.</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Build long-term partnerships with retailers while consistently raising the bar for
                design, comfort and value in kids fashion.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mt-28">
        <div className="container-x">
          <SectionHeading eyebrow="What we stand for" title="Values that shape every stitch." />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { t: "Craft", d: "Detail and finish that reflect a decade of experience." },
              { t: "Care", d: "For the children who wear us and the retailers who trust us." },
              { t: "Consistency", d: "Reliable quality, pricing and delivery — every season." },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 100}>
                <div className="hover-lift rounded-3xl bg-white border border-border p-8 h-full">
                  <div className="font-serif text-2xl">{v.t}</div>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
