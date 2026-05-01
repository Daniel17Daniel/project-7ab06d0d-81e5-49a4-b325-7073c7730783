import logo from "@/assets/logo.png";

export const Footer = () => (
  <footer className="relative border-t border-border/60 bg-card py-14">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
      <div className="flex items-center gap-3">
        <img src={logo} alt="КіноPoint Film" className="h-8 w-8 object-contain drop-shadow-[0_0_10px_hsl(40_70%_60%/0.4)]" />
        <span className="font-display text-lg">КіноPoint <span className="gold-text">Film</span></span>
      </div>
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
        © {new Date().getFullYear()} — Школа для дорослих
      </p>
    </div>
  </footer>
);
