import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";

export const CtaBlock = ({ accent = "Спеціальна пропозиція" }: { accent?: string }) => (
  <section className="relative overflow-hidden border-t border-primary/20 py-28 md:py-36">
    {/* Layered cinematic background */}
    <div className="absolute inset-0 bg-gradient-spotlight opacity-90" />
    <div
      className="absolute inset-0 opacity-50 mix-blend-soft-light"
      style={{
        background:
          "radial-gradient(ellipse 60% 50% at 20% 100%, hsl(8 78% 55% / 0.35), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 0%, hsl(40 80% 55% / 0.4), transparent 60%)",
      }}
    />
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
    <div className="container relative">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
          <span className="inline-block h-px w-8 bg-primary/60" />
          {accent}
          <span className="inline-block h-px w-8 bg-primary/60" />
        </p>
        <h2 className="mt-10 font-display text-4xl leading-[1.1] md:text-6xl text-balance">
          Для нових учнів — <span className="gold-text italic">знижка 50%</span><br className="hidden md:block" /> на перший місяць навчання.
        </h2>
        <p className="mx-auto mt-8 max-w-xl leading-relaxed text-muted-foreground">
          Спокійна можливість спробувати, зрозуміти, чи це ваш напрям, і зробити перший крок —
          без зайвого тиску й зайвих витрат.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/apply"
            className="btn-gold group inline-flex items-center gap-3 px-12 py-5 text-sm font-medium uppercase tracking-[0.2em]"
          >
            Залишити заявку
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
        <p className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember" />
          Без зобов'язань · Перше заняття — пробне
        </p>
      </Reveal>
    </div>
  </section>
);
