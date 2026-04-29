import { Reveal } from "./Reveal";

export const Offer = () => (
  <section className="relative overflow-hidden border-t border-border/60 py-28 md:py-40">
    <div className="absolute inset-0 bg-gradient-radial opacity-60" />
    <div className="container relative">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-primary">Спеціальна пропозиція</p>
        <div className="mx-auto mt-10 hairline w-24" />
        <h2 className="mt-10 font-display text-4xl leading-tight md:text-6xl text-balance">
          Для нових учнів — <br className="hidden md:block" />
          <span className="gold-text">знижка 50%</span> на перший місяць навчання.
        </h2>
        <p className="mx-auto mt-8 max-w-xl leading-relaxed text-muted-foreground">
          Спокійна можливість спробувати, зрозуміти, чи це ваш напрям, і зробити перший крок —
          без зайвого тиску й зайвих витрат.
        </p>
        <a
          href="#apply"
          className="mt-12 inline-flex items-center gap-3 bg-primary px-10 py-4 text-sm uppercase tracking-[0.2em] text-primary-foreground transition-all hover:shadow-glow"
        >
          Залишити заявку <span>→</span>
        </a>
        <div className="mx-auto mt-10 hairline w-24" />
      </Reveal>
    </div>
  </section>
);
