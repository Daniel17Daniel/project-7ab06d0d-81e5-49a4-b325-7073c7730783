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
        className="h-full w-full object-cover saturate-[1.15] contrast-[1.08]"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-radial" />
      <div
        className="absolute inset-0 opacity-60 mix-blend-soft-light"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 80% 20%, hsl(40 80% 55% / 0.45), transparent 60%), radial-gradient(ellipse 50% 60% at 15% 85%, hsl(8 78% 55% / 0.25), transparent 70%)",
        }}
      />
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
              className="btn-gold group inline-flex items-center gap-3 px-9 py-4 text-sm font-medium uppercase tracking-[0.2em]"
            >
              {primaryCta.label}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          )}
          {secondaryCta && (
            <Link
              to={secondaryCta.to}
              className="btn-outline-gold inline-flex items-center gap-3 px-8 py-4 text-sm uppercase tracking-[0.2em]"
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
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-ember opacity-60" />
            <span className="relative inline-block h-2 w-2 rounded-full bg-ember" />
          </span>
          {note}
        </motion.p>
      )}
    </div>
  </section>
);
