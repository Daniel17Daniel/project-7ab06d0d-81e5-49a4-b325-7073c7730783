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
  <section id="benefits" className="relative border-t border-border/60 py-28 md:py-40">
    <div className="container">
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
          <Reveal key={b.t} delay={i * 0.06} className="group bg-background p-10 transition-all hover:bg-secondary/40">
            <div className="font-display text-2xl text-primary/70">{String(i + 1).padStart(2, "0")}</div>
            <h3 className="mt-6 font-display text-2xl">{b.t}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{b.d}</p>
            <div className="mt-8 hairline opacity-40 transition-opacity group-hover:opacity-100" />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
