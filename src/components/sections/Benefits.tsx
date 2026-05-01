import { Reveal } from "./Reveal";

const items = [
  { t: "Більше впевненості", d: "Не зовнішньої — внутрішньої. Тієї, що тримає, коли непросто." },
  { t: "Свобода самовираження", d: "Уміння говорити те, що відчуваєте, і так, як відчуваєте." },
  { t: "Голос і мовлення", d: "Дихання, тембр, артикуляція. Голос, до якого хочеться прислухатися." },
  { t: "Розкріпачення", d: "Тіло перестає затискатися. З'являється легкість і присутність." },
  { t: "Краща комунікація", d: "Ви чуєте людей — і людей чують вас. Без зайвих слів." },
  { t: "Творче середовище", d: "Регулярна практика серед дорослих, які теж відкривають себе заново." },
];

export const Benefits = () => (
  <section id="benefits" className="relative overflow-hidden border-t border-border/60 py-28 md:py-40">
    <div className="pointer-events-none absolute right-0 top-0 h-[60%] w-1/2 opacity-40"
      style={{ background: "radial-gradient(ellipse at top right, hsl(40 70% 60% / 0.18), transparent 70%)" }} />
    <div className="container relative">
      <div className="flex flex-col items-end justify-between gap-10 md:flex-row md:items-end">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Що дає навчання</p>
          <h2 className="mt-6 font-display text-4xl md:text-6xl text-balance">
            Не курс. <span className="italic text-primary/90">Трансформація.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="max-w-sm leading-relaxed text-muted-foreground">
            Те, що ви забираєте з собою — більше за конспекти. Це нова якість присутності.
          </p>
        </Reveal>
      </div>

      <div className="mt-20 grid gap-px bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((b, i) => (
          <Reveal key={b.t} delay={i * 0.06} className="group relative bg-card p-10 transition-all duration-500 hover:bg-secondary">
            <div className="font-display text-3xl gold-text">{String(i + 1).padStart(2, "0")}</div>
            <h3 className="mt-6 font-display text-2xl transition-colors duration-500 group-hover:text-primary">{b.t}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{b.d}</p>
            <div className="mt-8 hairline-gold w-12 transition-all duration-500 group-hover:w-24" />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
