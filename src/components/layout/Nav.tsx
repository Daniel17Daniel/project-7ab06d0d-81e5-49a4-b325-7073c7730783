import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Головна" },
  { to: "/acting", label: "Акторська майстерність" },
  { to: "/journalism", label: "Журналістика" },
  { to: "/apply", label: "Контакти" },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      {/* Subtle gold edge */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-60" />
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="КіноPoint Film" className="h-9 w-9 object-contain drop-shadow-[0_0_10px_hsl(40_70%_60%/0.4)]" />
          <span className="font-display text-xl tracking-wide">
            КіноPoint <span className="gold-text">Film</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `relative text-sm transition-colors ${
                  isActive
                    ? "text-foreground after:absolute after:-bottom-2 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-ember"
                    : "text-muted-foreground hover:text-primary"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/apply"
            className="btn-gold hidden px-6 py-2.5 text-xs uppercase tracking-[0.18em] md:inline-flex md:items-center"
          >
            Залишити заявку
          </Link>
          <button
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
            className="text-foreground lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/40 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="container flex flex-col gap-1 py-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `py-3 text-base ${
                    isActive ? "text-primary" : "text-foreground"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
