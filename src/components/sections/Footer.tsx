import logo from "@/assets/logo.png";

export const Footer = () => (
  <footer className="border-t border-border/60 py-14">
    <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
      <div className="flex items-center gap-3">
        <img src={logo} alt="КіноPoint Film" className="h-8 w-8 object-contain" />
        <span className="font-display text-lg">КіноPoint <span className="text-muted-foreground">Film</span></span>
      </div>
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
        © {new Date().getFullYear()} — Школа для дорослих
      </p>
    </div>
  </footer>
);
