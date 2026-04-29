import logo from "@/assets/logo.png";

const links = [
  { href: "#about", label: "Для кого" },
  { href: "#directions", label: "Напрями" },
  { href: "#benefits", label: "Що дає" },
  { href: "#teachers", label: "Викладачі" },
  { href: "#faq", label: "FAQ" },
];

export const Nav = () => (
  <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
    <div className="container flex h-16 items-center justify-between">
      <a href="#" className="flex items-center gap-3">
        <img src={logo} alt="КіноPoint Film" className="h-9 w-9 object-contain" />
        <span className="font-display text-xl tracking-wide">КіноPoint <span className="text-muted-foreground">Film</span></span>
      </a>
      <nav className="hidden items-center gap-9 md:flex">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {l.label}
          </a>
        ))}
      </nav>
      <a
        href="#apply"
        className="hidden rounded-sm border border-primary/40 px-5 py-2 text-sm tracking-wide text-primary transition-all hover:bg-primary hover:text-primary-foreground md:inline-block"
      >
        Залишити заявку
      </a>
    </div>
  </header>
);
