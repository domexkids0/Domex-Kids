import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { products, images } from "@/lib/site-config";
import shirtsImg from "../assets/shirts.jpg";
import tshirtsImg from "../assets/tshirts.jpg";
import jeansImg from "../assets/jeans.jpg";
import heroImg from "../assets/hero.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — DOMEX KIDS Wholesale Kids Wear" },
      { name: "description", content: "Explore boys shirts, t-shirts and jeans — wholesale kids wear collections for ages 1–16 years." },
      { property: "og:title", content: "DOMEX KIDS Products" },
      { property: "og:description", content: "Wholesale kids wear collections — shirts, t-shirts, jeans." },
      { property: "og:image", content: images.editorial1 },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

const localProductImages = [shirtsImg, tshirtsImg, jeansImg];

function localImg(slug: string) {
  const map: Record<string, string> = {
    "boys-shirts": shirtsImg,
    "boys-t-shirts": tshirtsImg,
    "boys-jeans": jeansImg,
  };
  return map[slug] || shirtsImg;
}

function Products() {
  const [active, setActive] = useState<null | (typeof products)[number]>(null);

  return (
    <>
      <section className="pt-32 md:pt-40">
        <div className="container-x">
          <Reveal><div className="text-xs uppercase tracking-[0.28em] text-brand font-medium mb-6">Collections</div></Reveal>
          <Reveal delay={100}>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] max-w-3xl">
              Kids fashion, wholesale first.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-muted-foreground text-lg">
              Modern silhouettes and comfortable fabrics for ages 1–16. Explore each category and
              request a quick-view for line sheets and swatches.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mt-16 md:mt-24">
        <div className="container-x grid md:grid-cols-2 gap-6">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <article className={`hover-lift rounded-3xl overflow-hidden bg-white border border-border ${i === 0 ? "md:col-span-2" : ""}`}>
                <div className={`zoom-img ${i === 0 ? "aspect-[16/9]" : "aspect-[5/4]"}`}>
                  <img src={localProductImages[i]} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-7 md:p-10 flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-brand">Ages 1–16</div>
                    <h3 className="mt-2 font-serif text-3xl md:text-4xl">{p.name}</h3>
                    <p className="mt-2 text-muted-foreground max-w-md">{p.description}</p>
                  </div>
                  <button
                    onClick={() => setActive(p)}
                    className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:bg-brand transition-colors"
                  >
                    Quick View <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-28">
        <div className="container-x">
          <SectionHeading eyebrow="Editorial" title="Photographed for the shop floor." />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[heroImg, images.editorial2, images.editorial3].map((src, i) => (
              <Reveal key={src} delay={i * 120}>
                <div className="zoom-img rounded-3xl overflow-hidden aspect-[4/5]">
                  <img src={src} alt="Editorial" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-28">
        <div className="container-x rounded-3xl bg-white border border-border p-10 md:p-14 text-center">
          <Reveal>
              <p className="font-serif text-3xl md:text-4xl max-w-2xl mx-auto">
              Wholesale only — pricing shared on inquiry.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 text-muted-foreground">Contact us for line sheets, MOQs and current stock.</p>
          </Reveal>
        </div>
      </section>

      {/* Quick view */}
      {active && (
        <div className="fixed inset-0 z-[70] bg-foreground/60 backdrop-blur-sm flex items-center justify-center p-4 animate-[fade-in_0.3s_ease-out]" onClick={() => setActive(null)}>
          <div
            className="bg-background rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-[fade-up_0.4s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2">
              <div className="aspect-square md:aspect-auto">
                <img src={localImg(active.slug)} alt={active.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-10 relative">
                <button aria-label="Close" onClick={() => setActive(null)} className="absolute top-5 right-5 p-2 rounded-full border hover:bg-secondary">
                  <X size={16} />
                </button>
                <div className="text-xs uppercase tracking-[0.2em] text-brand">{active.tagline}</div>
                <h3 className="mt-3 font-serif text-3xl md:text-4xl">{active.name}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{active.description}</p>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  {[0, 1, 2].map((k) => (
                    <div key={k} className="aspect-square rounded-xl overflow-hidden bg-secondary">
                      <img src={localImg(active.slug)} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-sm text-muted-foreground">
                  <div>· Ages 1–16 years</div>
                  <div>· Wholesale only — pricing on inquiry</div>
                  <div>· Flexible MOQ, Pan India delivery</div>
                </div>
                <a href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:bg-brand transition-colors">
                  Request line sheet <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
