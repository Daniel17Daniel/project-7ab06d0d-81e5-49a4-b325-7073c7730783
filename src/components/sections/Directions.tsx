import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";
import acting from "@/assets/acting.jpg";
import journalism from "@/assets/journalism.jpg";

const items = [
  {
    img: acting,
    tag: "Напрям I",
    title: "Акторська майстерність",
    desc: "Сцена, тіло, голос, емоція. Простір, де можна відчути свободу — і собою, і поруч з іншими.",
    forWhom: "Для тих, хто хоче відкритись, відчути сцену та контакт із собою.",
    gives: "Розкріпачення, природність, сміливість самовираження.",
    to: "/acting",
  },
  {
    img: journalism,
    tag: "Напрям II",
    title: "Журналістика",
    desc: "Студія, мікрофон, камера, інтерв'ю. Робота з мовленням, подачею і присутністю в кадрі.",
    forWhom: "Для тих, хто хоче говорити чітко, впевнено й цікаво.",
    gives: "Чітка подача, медіаприсутність, структура думки.",
    to: "/journalism",
  },
];

export const Directions = () => (
  <section id="directions" className="relative overflow-hidden border-t border-border/60 surface-spotlight py-28 md:py-36">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    <div className="container relative">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-primary">Напрями навчання</p>
        <div className="mx-auto mt-4 hairline-gold w-16" />
        <h2 className="mt-6 font-display text-4xl md:text-6xl">
          Два шляхи. <span className="gold-text italic">Один простір.</span>
        </h2>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Оберіть напрям, який резонує — або скористайтесь підбором, і ми допоможемо знайти ваш.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-8 md:grid-cols-2 md:gap-10">
        {items.map((d, i) => (
          <Reveal key={d.title} delay={i * 0.15}>
            <Link
              to={d.to}
              className="surface-premium group relative flex h-full flex-col overflow-hidden border border-border/60 transition-all duration-500 hover:border-primary/60 hover:shadow-glow-strong hover:-translate-y-1"
            >
              {/* Hover gold edge sweep */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-700 group-hover:scale-x-100" />
              <div className="relative aspect-[5/4] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.title}
                  loading="lazy"
                  className="h-full w-full object-cover saturate-[1.1] contrast-[1.05] transition-all duration-[1400ms] ease-out group-hover:scale-105 group-hover:saturate-[1.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div
                  className="absolute inset-0 opacity-60 mix-blend-soft-light transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 60% at 50% 100%, hsl(40 70% 60% / 0.5), transparent 70%)",
                  }}
                />
                <div className="absolute left-6 top-6 inline-flex items-center gap-2 border border-primary/30 bg-background/60 px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-primary backdrop-blur-md">
                  <span className="inline-block h-1 w-1 rounded-full bg-primary" />
                  {d.tag}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-8 md:p-10">
                <h3 className="font-display text-3xl md:text-4xl transition-colors duration-500 group-hover:text-primary">{d.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{d.desc}</p>
                <dl className="mt-6 space-y-3 border-y border-border/60 py-6 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-primary/80">Для кого</dt>
                    <dd className="mt-1 text-foreground/90">{d.forWhom}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-primary/80">Що дає</dt>
                    <dd className="mt-1 text-foreground/90">{d.gives}</dd>
                  </div>
                </dl>
                <span className="mt-8 inline-flex items-center gap-2 self-start border-b-2 border-primary pb-1 text-sm uppercase tracking-[0.2em] text-primary transition-all group-hover:gap-4 group-hover:border-ember group-hover:text-ember">
                  Відкрити напрям <span>→</span>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
