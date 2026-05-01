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
  <section id="teachers" className="relative overflow-hidden border-t border-border/60 bg-secondary/30 py-28 md:py-40">
    <div className="pointer-events-none absolute left-1/2 top-0 h-[50%] w-3/4 -translate-x-1/2 opacity-50"
      style={{ background: "radial-gradient(ellipse at top, hsl(40 70% 60% / 0.18), transparent 70%)" }} />
    <div className="container relative">
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
              <div className="relative aspect-[3/4] overflow-hidden bg-muted ring-gold transition-all duration-700 group-hover:shadow-glow-strong">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale contrast-[1.1] transition-all duration-[1200ms] group-hover:scale-[1.04] group-hover:grayscale-0 group-hover:saturate-[1.15]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div
                  className="absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-700 group-hover:opacity-100"
                  style={{ background: "radial-gradient(ellipse at center, hsl(40 70% 60% / 0.4), transparent 70%)" }}
                />
              </div>
              <div className="mt-6">
                <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
                  <span className="inline-block h-1 w-1 rounded-full bg-ember" />
                  {t.role}
                </p>
                <h3 className="mt-3 font-display text-3xl">{t.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.bio}</p>
                <blockquote className="mt-6 border-l-2 border-primary pl-4 font-display text-lg italic text-foreground/90">
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
