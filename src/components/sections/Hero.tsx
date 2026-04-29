import { motion } from "framer-motion";
import hero from "@/assets/hero.jpg";

export const Hero = () => (
  <section className="relative isolate min-h-[100svh] w-full overflow-hidden">
    <div className="absolute inset-0">
      <motion.img
        src={hero}
        alt="Атмосфера школи КіноPoint"
        className="h-full w-full object-cover"
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-radial" />
    </div>

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
        <span className="italic text-primary/90">Відкрийтесь</span> по-новому.
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
        <a
          href="#directions"
          className="group inline-flex items-center gap-3 bg-primary px-8 py-4 text-sm uppercase tracking-[0.2em] text-primary-foreground transition-all hover:shadow-glow"
        >
          Підібрати напрям
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
        <a
          href="#apply"
          className="inline-flex items-center gap-3 border border-foreground/30 px-8 py-4 text-sm uppercase tracking-[0.2em] text-foreground transition-all hover:border-foreground"
        >
          Залишити заявку
        </a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="mt-8 flex items-center gap-3 text-sm text-muted-foreground"
      >
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
        Для нових учнів — знижка 50% на перший місяць навчання
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
