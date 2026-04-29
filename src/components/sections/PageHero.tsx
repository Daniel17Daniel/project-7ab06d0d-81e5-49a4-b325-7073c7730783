import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface PageHeroProps {
  image: string;
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  note?: string;
}

export const PageHero = ({ image, eyebrow, title, subtitle, primaryCta, secondaryCta, note }: PageHeroProps) => (
  <section className="relative isolate min-h-[80svh] w-full overflow-hidden">
    <div className="absolute inset-0">
      <motion.img
        src={image}
        alt=""
        className="h-full w-full object-cover"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-radial" />
    </div>

    <div className="relative z-10 container flex min-h-[80svh] flex-col justify-end pb-20 pt-36 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary"
      >
        <span className="block h-px w-10 bg-primary/60" />
        {eyebrow}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 max-w-4xl font-display text-4xl leading-[1.05] text-balance md:text-6xl lg:text-7xl"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.8 }}
        className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
      >
        {subtitle}
      </motion.p>

      {(primaryCta || secondaryCta) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          {primaryCta && (
            <Link
              to={primaryCta.to}
              className="group inline-flex items-center gap-3 bg-primary px-8 py-4 text-sm uppercase tracking-[0.2em] text-primary-foreground transition-all hover:shadow-glow"
            >
              {primaryCta.label}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          )}
          {secondaryCta && (
            <Link
              to={secondaryCta.to}
              className="inline-flex items-center gap-3 border border-foreground/30 px-8 py-4 text-sm uppercase tracking-[0.2em] text-foreground transition-all hover:border-foreground"
            >
              {secondaryCta.label}
            </Link>
          )}
        </motion.div>
      )}

      {note && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.3 }}
          className="mt-8 flex items-center gap-3 text-sm text-muted-foreground"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
          {note}
        </motion.p>
      )}
    </div>
  </section>
);
