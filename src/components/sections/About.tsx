import { Reveal } from "./Reveal";

const audiences = [
  { n: "01", t: "Дорослі без досвіду", d: "Ви ніколи не виходили на сцену й не тримали мікрофон — і це найкращий момент почати." },
  { n: "02", t: "Сором'язливі та закриті", d: "Ми не вимагаємо «розкритися одразу». Ми створюємо середовище, у якому це стається саме." },
  { n: "03", t: "Ті, хто хоче впевненості", d: "Не показної, а тихої внутрішньої — у голосі, погляді, паузах і рішеннях." },
  { n: "04", t: "Ті, хто працює з людьми", d: "Якщо ваш голос — ваш інструмент: керівники, лікарі, викладачі, підприємці." },
  { n: "05", t: "Ті, хто хоче в кадр", d: "На сцену, у медіа чи перед камеру — спробувати себе в новому амплуа." },
  { n: "06", t: "Творчі натури", d: "Ті, хто давно відчуває потребу в самовираженні — і шукає простір, де це безпечно." },
];

export const About = () => (
  <section id="about" className="relative border-t border-border/60 py-28 md:py-40">
    <div className="container">
      <div className="grid gap-16 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Для кого ця школа</p>
          <h2 className="mt-6 font-display text-4xl leading-tight md:text-6xl">
            Ви впізнаєте<br />себе тут.
          </h2>
          <p className="mt-8 max-w-md leading-relaxed text-muted-foreground">
            Ми не вчимо «грати». Ми допомагаємо дорослим людям почути власний голос —
            у прямому й переносному значенні. Без оцінок, без поспіху, без театральності.
          </p>
        </Reveal>

        <div className="md:col-span-7">
          <div className="grid gap-px bg-border/60 sm:grid-cols-2">
            {audiences.map((a, i) => (
              <Reveal key={a.n} delay={i * 0.05} className="bg-background p-8 transition-colors hover:bg-secondary/40">
                <div className="font-display text-sm text-primary">{a.n}</div>
                <h3 className="mt-4 font-display text-2xl">{a.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
