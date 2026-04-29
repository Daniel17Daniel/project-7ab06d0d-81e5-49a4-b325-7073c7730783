import { Reveal } from "./Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface ListProps {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  items: { t: string; d?: string }[];
  variant?: "cards" | "list" | "tags";
  bg?: boolean;
}

export const ContentSection = ({ eyebrow, title, intro, items, variant = "cards", bg = false }: ListProps) => (
  <section className={`relative border-t border-border/60 py-24 md:py-32 ${bg ? "bg-secondary/20" : ""}`}>
    <div className="container">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-primary">{eyebrow}</p>
        <h2 className="mt-6 font-display text-4xl md:text-5xl text-balance">{title}</h2>
        {intro && <p className="mt-6 leading-relaxed text-muted-foreground">{intro}</p>}
      </Reveal>

      {variant === "cards" && (
        <div className="mt-16 grid gap-px bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.06} className="bg-background p-8 md:p-10">
              <div className="font-display text-2xl text-primary/70">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-6 font-display text-2xl">{it.t}</h3>
              {it.d && <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{it.d}</p>}
            </Reveal>
          ))}
        </div>
      )}

      {variant === "list" && (
        <div className="mx-auto mt-16 max-w-3xl divide-y divide-border/60">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.05} className="flex flex-col gap-2 py-6 md:flex-row md:gap-10">
              <div className="font-display text-sm text-primary md:w-16">{String(i + 1).padStart(2, "0")}</div>
              <div className="flex-1">
                <h3 className="font-display text-2xl">{it.t}</h3>
                {it.d && <p className="mt-2 leading-relaxed text-muted-foreground">{it.d}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      )}

      {variant === "tags" && (
        <div className="mx-auto mt-14 flex max-w-3xl flex-wrap justify-center gap-3">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.04}>
              <span className="inline-block border border-primary/40 bg-background px-5 py-3 text-sm text-foreground/90">
                {it.t}
              </span>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  </section>
);

interface TeacherProps {
  image: string;
  name: string;
  role: string;
  bio: string;
  quote: string;
}

export const TeacherFeature = ({ image, name, role, bio, quote }: TeacherProps) => (
  <section className="relative border-t border-border/60 py-24 md:py-32">
    <div className="container grid gap-12 md:grid-cols-12 md:gap-16">
      <Reveal className="md:col-span-5">
        <div className="aspect-[3/4] overflow-hidden bg-muted">
          <img src={image} alt={name} loading="lazy" className="h-full w-full object-cover grayscale transition-all duration-[1200ms] hover:grayscale-0" />
        </div>
      </Reveal>
      <Reveal delay={0.15} className="md:col-span-7 md:pt-8">
        <p className="text-xs uppercase tracking-[0.4em] text-primary">Викладач напряму</p>
        <h2 className="mt-6 font-display text-5xl md:text-6xl">{name}</h2>
        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-muted-foreground">{role}</p>
        <p className="mt-8 max-w-lg leading-relaxed text-foreground/90">{bio}</p>
        <blockquote className="mt-10 max-w-lg border-l border-primary/60 pl-6 font-display text-2xl italic leading-snug text-foreground/90">
          «{quote}»
        </blockquote>
      </Reveal>
    </div>
  </section>
);

interface FaqProps {
  items: { q: string; a: string }[];
  bg?: boolean;
}

export const FaqBlock = ({ items, bg = true }: FaqProps) => (
  <section className={`relative border-t border-border/60 py-24 md:py-32 ${bg ? "bg-secondary/20" : ""}`}>
    <div className="container grid gap-16 md:grid-cols-12">
      <Reveal className="md:col-span-4">
        <p className="text-xs uppercase tracking-[0.4em] text-primary">Питання</p>
        <h2 className="mt-6 font-display text-4xl md:text-5xl">Що зазвичай запитують.</h2>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Якщо вашого питання немає тут — напишіть нам. Відповімо тепло й по суті.
        </p>
      </Reveal>
      <div className="md:col-span-8">
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`} className="border-b border-border/60">
              <AccordionTrigger className="py-6 text-left font-display text-xl hover:no-underline md:text-2xl">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);
