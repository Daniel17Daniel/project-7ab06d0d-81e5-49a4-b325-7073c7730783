import { Reveal } from "./Reveal";
import t1 from "@/assets/teacher1.jpg";
import t2 from "@/assets/teacher2.jpg";
import t3 from "@/assets/teacher3.jpg";

const teachers = [
  {
    img: t1,
    name: "Олег Левченко",
    role: "Акторська майстерність",
    bio: "Театральний режисер і педагог із 20-річним досвідом. Працював у незалежних театрах Києва та Львова.",
    quote: "Актор починається не з ролі, а з тиші, у якій він чує себе.",
  },
  {
    img: t2,
    name: "Анна Ковальчук",
    role: "Журналістика",
    bio: "Журналістка, ведуча, авторка інтерв'ю. Понад 12 років у медіа — друк, радіо, телебачення.",
    quote: "Хороше запитання — це коли ви справді хочете почути відповідь.",
  },
  {
    img: t3,
    name: "Ірина Дем'янчук",
    role: "Сценічна мова та голос",
    bio: "Логопед-фоніатр, викладачка сценічної мови. Працює з акторами, журналістами та публічними спікерами.",
    quote: "Голос — це не звук. Це присутність, яку чути.",
  },
];

export const Teachers = () => (
  <section id="teachers" className="relative border-t border-border/60 bg-secondary/20 py-28 md:py-40">
    <div className="container">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-primary">Викладачі</p>
        <h2 className="mt-6 font-display text-4xl md:text-6xl">Люди, з якими ви працюватимете.</h2>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Практикуючі майстри, які поважають дорослих учнів — їхній досвід, темп і особистий шлях.
        </p>
      </Reveal>

      <div className="mt-20 grid gap-10 md:grid-cols-3">
        {teachers.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <article className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition-all duration-[1200ms] group-hover:scale-[1.03] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.3em] text-primary">{t.role}</p>
                <h3 className="mt-3 font-display text-3xl">{t.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.bio}</p>
                <blockquote className="mt-6 border-l border-primary/60 pl-4 font-display text-lg italic text-foreground/90">
                  «{t.quote}»
                </blockquote>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
