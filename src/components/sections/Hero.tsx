import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import hero from "@/assets/hero.jpg";

export const Hero = () => (
  <section className="relative isolate min-h-[100svh] w-full overflow-hidden">
    <div className="absolute inset-0">
      <motion.img
        src={hero}
        alt="Атмосфера школи КіноPoint"
        className="h-full w-full object-cover saturate-[1.15] contrast-[1.08]"
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-radial" />
      {/* Subtle warm side-light for cinematic depth */}
      <div
        className="absolute inset-0 opacity-70 mix-blend-soft-light"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 85% 30%, hsl(40 80% 55% / 0.45), transparent 60%), radial-gradient(ellipse 50% 60% at 10% 80%, hsl(8 78% 55% / 0.25), transparent 70%)",
        }}
      />
    </div>

    {/* Subtle editorial paper-note accent */}
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -6 }}
      animate={{ opacity: 1, y: 0, rotate: -4 }}
      transition={{ duration: 1.4, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute right-6 top-28 z-10 hidden w-56 origin-top-right select-none md:block lg:right-12 lg:top-32"
      aria-hidden
    >
      <div
        className="relative px-5 py-6 font-display text-sm italic leading-snug text-foreground/80 shadow-elegant"
        style={{
          background: "linear-gradient(180deg, hsl(38 28% 92% / 0.97), hsl(36 18% 80% / 0.94))",
          color: "hsl(30 12% 14%)",
          clipPath:
            "polygon(2% 0, 96% 1%, 100% 6%, 99% 94%, 95% 100%, 6% 99%, 1% 95%, 0 5%)",
        }}
      >
        <div className="text-[0.6rem] uppercase tracking-[0.3em]" style={{ color: "hsl(8 78% 45%)" }}>Сцена · Дубль 1</div>
        <p className="mt-3">«Знайти свій голос — це почути тишу всередині.»</p>
      </div>
    </motion.div>

    <div className="relative z-10 container flex min-h-[100svh] flex-col justify-end pb-20 pt-32 md:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary"
      >
        <span className="block h-px w-10 bg-primary/60" />
        Приватна школа для дорослих
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-balance md:text-7xl lg:text-[5.5rem]"
      >
        Знайдіть свій голос.<br />
        <span className="italic gold-text">Відкрийтесь</span> по-новому.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
      >
        Школа акторської майстерності та журналістики для дорослих, які хочуть бути
        вільнішими, впевненішими та чути себе по-справжньому.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="mt-10 flex flex-wrap items-center gap-4"
      >
        <button
          onClick={() => window.dispatchEvent(new Event("open-direction-bot"))}
          className="btn-gold group inline-flex items-center gap-3 px-9 py-4 text-sm font-medium uppercase tracking-[0.2em]"
        >
          Підібрати напрям
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
        <Link
          to="/apply"
          className="btn-outline-gold inline-flex items-center gap-3 px-8 py-4 text-sm uppercase tracking-[0.2em]"
        >
          Залишити заявку
        </Link>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="mt-8 flex items-center gap-3 text-sm text-muted-foreground"
      >
        <span className="relative inline-flex h-2 w-2">
          <span className="absolute inset-0 animate-ping rounded-full bg-ember opacity-60" />
          <span className="relative inline-block h-2 w-2 rounded-full bg-ember" />
        </span>
        Для нових учнів — <span className="text-foreground/90">знижка 50%</span> на перший місяць навчання
      </motion.p>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ delay: 1.8, duration: 1 }}
      className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground md:flex"
    >
      Гортайте
      <motion.span
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="block h-8 w-px bg-foreground/40"
      />
    </motion.div>
  </section>
);
