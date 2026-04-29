import { Reveal } from "./Reveal";

const steps = [
  { n: "01", t: "Обираєте напрям", d: "Самостійно або з нашою тихою допомогою — без тиску." },
  { n: "02", t: "Залишаєте заявку", d: "Коротка форма. Ми зв'яжемося у зручний для вас час." },
  { n: "03", t: "Приходите на перше заняття", d: "Знайомимось зі студією, з групою, з форматом." },
  { n: "04", t: "Поступово розкриваєтесь", d: "У вашому темпі. Без поспіху, без оцінок, серед своїх." },
];

export const Journey = () => (
  <section className="relative border-t border-border/60 bg-secondary/20 py-24 md:py-32">
    <div className="container">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-primary">Як це працює</p>
        <h2 className="mt-6 font-display text-4xl md:text-5xl">Шлях, який починається спокійно.</h2>
      </Reveal>

      <ol className="mt-16 grid gap-px bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08} className="bg-background p-8 md:p-10">
            <div className="font-display text-3xl text-primary/70">{s.n}</div>
            <h3 className="mt-6 font-display text-2xl">{s.t}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);
