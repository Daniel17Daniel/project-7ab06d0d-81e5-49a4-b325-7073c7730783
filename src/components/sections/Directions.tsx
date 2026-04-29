import { Reveal } from "./Reveal";
import acting from "@/assets/acting.jpg";
import journalism from "@/assets/journalism.jpg";

const items = [
  {
    img: acting,
    tag: "Напрям I",
    title: "Акторська майстерність",
    desc: "Робота з тілом, голосом, увагою та уявою. Етюди, сценічна мова, робота з партнером і камерою.",
    forWhom: "Для тих, хто хоче відчути свободу руху й слова — на сцені й у житті.",
    gives: "Розкріпачення, контакт із собою, природність у будь-якій взаємодії.",
    teacher: "Викладач — Олег Левченко",
  },
  {
    img: journalism,
    tag: "Напрям II",
    title: "Журналістика",
    desc: "Інтерв'ю, текст, голос у кадрі, побудова історії. Робота зі студією, мікрофоном і камерою.",
    forWhom: "Для тих, хто хоче впевнено говорити, ставити запитання й вести розповідь.",
    gives: "Чітке мовлення, аналітичне мислення, медіаприсутність.",
    teacher: "Викладач — Анна Ковальчук",
  },
];

export const Directions = () => (
  <section id="directions" className="relative border-t border-border/60 bg-secondary/20 py-28 md:py-40">
    <div className="container">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-primary">Напрями навчання</p>
        <h2 className="mt-6 font-display text-4xl md:text-6xl">Два шляхи. Один простір.</h2>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Оберіть напрям, який резонує — або напишіть нам, і ми допоможемо знайти ваш.
        </p>
      </Reveal>

      <div className="mt-20 grid gap-10 md:grid-cols-2 md:gap-12">
        {items.map((d, i) => (
          <Reveal key={d.title} delay={i * 0.15}>
            <article className="group flex h-full flex-col overflow-hidden border border-border/60 bg-background transition-all hover:border-primary/40 hover:shadow-elegant">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute left-6 top-6 text-xs uppercase tracking-[0.3em] text-primary">{d.tag}</div>
              </div>
              <div className="flex flex-1 flex-col p-8 md:p-10">
                <h3 className="font-display text-3xl md:text-4xl">{d.title}</h3>
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
                <p className="mt-6 text-sm text-muted-foreground">{d.teacher}</p>
                <a
                  href="#apply"
                  className="mt-8 inline-flex items-center gap-2 self-start border-b border-primary/60 pb-1 text-sm uppercase tracking-[0.2em] text-primary transition-all hover:gap-4"
                >
                  Подати заявку <span>→</span>
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
