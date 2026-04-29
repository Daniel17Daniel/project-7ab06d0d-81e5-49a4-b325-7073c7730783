import { Reveal } from "./Reveal";

const stories = [
  {
    came: "Прийшла, бо не могла говорити публічно — голос тремтів навіть на нараді.",
    found: "Дихання, паузи, право на тишу. І те, що мене насправді чують.",
    changed: "Тепер я веду наради без страху. І, нарешті, чую сама себе.",
    name: "Олена, 34",
    role: "Маркетинг-директорка",
  },
  {
    came: "Я був дуже закритою людиною. Думав, акторство не для мене.",
    found: "Що «грати» — це бути собою на повну. Без масок і ролей.",
    changed: "Стало легше з людьми. У словах і в погляді з'явилася певність.",
    name: "Андрій, 41",
    role: "Інженер",
  },
  {
    came: "Хотіла спробувати журналістику, але боялась камери і свого голосу.",
    found: "Що камера — це лише дзеркало. Воно показує, а не оцінює.",
    changed: "Записала перше інтерв'ю. І, головне, перестала ховати голос.",
    name: "Катерина, 29",
    role: "PR-менеджерка",
  },
];

export const Stories = () => (
  <section className="relative border-t border-border/60 py-24 md:py-32">
    <div className="container">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-primary">Історії трансформації</p>
        <h2 className="mt-6 font-display text-4xl md:text-5xl text-balance">
          Не про талант. <span className="italic text-primary/90">Про дозвіл собі.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-px bg-border/60 md:grid-cols-3">
        {stories.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.1} className="bg-background p-8 md:p-10">
            <div className="space-y-6 text-sm leading-relaxed">
              <div>
                <p className="text-xs uppercase tracking-widest text-primary/80">Прийшов(-ла) з</p>
                <p className="mt-2 text-foreground/90">{s.came}</p>
              </div>
              <div className="hairline opacity-50" />
              <div>
                <p className="text-xs uppercase tracking-widest text-primary/80">Відкрив(-ла)</p>
                <p className="mt-2 text-foreground/90">{s.found}</p>
              </div>
              <div className="hairline opacity-50" />
              <div>
                <p className="text-xs uppercase tracking-widest text-primary/80">Змінилося</p>
                <p className="mt-2 text-foreground/90">{s.changed}</p>
              </div>
            </div>
            <div className="mt-8 border-t border-border/60 pt-6">
              <p className="font-display text-lg">{s.name}</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{s.role}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
