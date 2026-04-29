import { Reveal } from "./Reveal";
import g1 from "@/assets/gallery1.jpg";
import g2 from "@/assets/gallery2.jpg";
import g3 from "@/assets/gallery3.jpg";
import g4 from "@/assets/gallery4.jpg";

export const Atmosphere = () => (
  <section className="relative border-t border-border/60 py-28 md:py-40">
    <div className="container">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-primary">Атмосфера школи</p>
        <h2 className="mt-6 font-display text-4xl md:text-6xl text-balance">
          Місце, де можна <span className="italic text-primary/90">бути собою.</span>
        </h2>
      </Reveal>

      <div className="mt-20 grid grid-cols-12 gap-4 md:gap-6">
        <Reveal className="col-span-12 md:col-span-7" delay={0.05}>
          <div className="aspect-[4/3] overflow-hidden">
            <img src={g4} alt="Студія школи" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-105" />
          </div>
        </Reveal>
        <Reveal className="col-span-6 md:col-span-5" delay={0.15}>
          <div className="aspect-[4/3] h-full overflow-hidden md:aspect-auto">
            <img src={g2} alt="Робота з текстом" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-105" />
          </div>
        </Reveal>
        <Reveal className="col-span-6 md:col-span-5" delay={0.2}>
          <div className="aspect-square h-full overflow-hidden">
            <img src={g1} alt="Учні в класі" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-105" />
          </div>
        </Reveal>
        <Reveal className="col-span-12 md:col-span-7" delay={0.25}>
          <div className="aspect-[16/10] overflow-hidden">
            <img src={g3} alt="Робота перед камерою" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-105" />
          </div>
        </Reveal>
      </div>

      <Reveal className="mx-auto mt-20 max-w-2xl text-center">
        <p className="font-display text-2xl italic leading-relaxed text-foreground/90 md:text-3xl">
          «Тут не оцінюють. Тут підтримують і дають час — стільки, скільки потрібно саме вам.»
        </p>
      </Reveal>
    </div>
  </section>
);
