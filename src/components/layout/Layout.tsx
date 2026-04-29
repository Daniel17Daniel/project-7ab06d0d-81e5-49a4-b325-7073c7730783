import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Nav } from "./Nav";
import { Footer } from "@/components/sections/Footer";
import { DirectionBot } from "@/components/bot/DirectionBot";

export const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="relative bg-background">
      <Nav />
      <main className="min-h-[60vh]">
        <Outlet />
      </main>
      <Footer />
      <DirectionBot />
    </div>
  );
};
