import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { images } from "@/lib/site-config";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "Founder — Himanshu Aggarwal · DOMEX KIDS" },
      { name: "description", content: "Meet Himanshu Aggarwal, founder of DOMEX KIDS — the software engineer turned entrepreneur behind India's trusted wholesale kids wear brand." },
      { property: "og:title", content: "Himanshu Aggarwal — Founder, DOMEX KIDS" },
      { property: "og:description", content: "The story behind DOMEX KIDS." },
      { property: "og:image", content: images.founder },
      { property: "og:url", content: "/founder" },
    ],
    links: [{ rel: "canonical", href: "/founder" }],
  }),
  component: Founder,
});

function Founder() {
  return (
    <>
      <section className="pt-32 md:pt-40">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="flex md:block gap-4 md:gap-0">
              <Reveal>
                <div className="rounded-3xl overflow-hidden aspect-[4/5] zoom-img w-2/5 md:w-full shrink-0">
                  <img src={images.founder} alt="Himanshu Aggarwal" className="w-full h-full object-cover" />
                </div>
              </Reveal>
              <div className="md:hidden flex-1 min-w-0 self-start">
                <Reveal><div className="text-[0.5rem] uppercase tracking-[0.28em] text-brand font-medium">Founder</div></Reveal>
                <Reveal delay={100}>
                  <h1 className="font-serif text-lg leading-[1.02] mt-1">Himanshu Aggarwal</h1>
                </Reveal>
                <Reveal delay={180}>
                  <div className="text-xs text-muted-foreground mt-0.5">Founder &amp; Managing Director</div>
                </Reveal>
                <Reveal delay={280}>
                  <blockquote className="mt-3 border-l-2 border-brand pl-2">
                    <p className="font-serif text-xs leading-[1.15]">&ldquo;Success is built one satisfied customer at a time.&rdquo;</p>
                    <div className="mt-1 text-[0.5rem] text-muted-foreground uppercase tracking-[0.2em]">&mdash; Himanshu Aggarwal</div>
                  </blockquote>
                </Reveal>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 lg:pl-4">
            <div className="hidden md:block">
              <Reveal><div className="text-xs uppercase tracking-[0.28em] text-brand font-medium mb-6">Founder</div></Reveal>
              <Reveal delay={100}>
                <h1 className="font-serif text-5xl md:text-7xl leading-[1.02]">Himanshu Aggarwal</h1>
              </Reveal>
              <Reveal delay={180}>
                <div className="mt-3 text-lg text-muted-foreground">Founder &amp; Managing Director</div>
              </Reveal>
              <Reveal delay={280}>
                <blockquote className="mt-12 border-l-2 border-brand pl-6 md:pl-8">
                  <p className="font-serif text-3xl md:text-4xl leading-[1.15]">
                    &ldquo;Success is built one satisfied customer at a time.&rdquo;
                  </p>
                  <div className="mt-4 text-sm text-muted-foreground uppercase tracking-[0.2em]">&mdash; Himanshu Aggarwal</div>
                </blockquote>
              </Reveal>
            </div>
            <div className="mt-0 md:mt-10 space-y-5 text-muted-foreground leading-relaxed">
              <Reveal><p>
                Himanshu Aggarwal is a software engineer turned entrepreneur who founded
                DOMEX KIDS in 2014 after gaining valuable professional experience at Infosys.
              </p></Reveal>
              <Reveal delay={80}><p>
                Driven by a passion for building a trusted Indian kids wear brand, he transformed
                his vision into a successful manufacturing business focused on delivering
                fashionable, high-quality garments at affordable wholesale prices.
              </p></Reveal>
              <Reveal delay={160}><p>
                Today, DOMEX KIDS proudly serves retailers across India while continuously
                innovating to meet the evolving needs of the children's fashion industry.
              </p></Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
