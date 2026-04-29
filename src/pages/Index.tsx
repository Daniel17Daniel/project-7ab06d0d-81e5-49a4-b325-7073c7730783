import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Directions } from "@/components/sections/Directions";
import { Benefits } from "@/components/sections/Benefits";
import { Teachers } from "@/components/sections/Teachers";
import { Atmosphere } from "@/components/sections/Atmosphere";
import { FAQ } from "@/components/sections/FAQ";
import { Offer } from "@/components/sections/Offer";
import { ApplyForm } from "@/components/sections/ApplyForm";
import { Footer } from "@/components/sections/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "КіноPoint Film — Школа акторської майстерності та журналістики для дорослих";
    const meta = document.querySelector('meta[name="description"]');
    const content =
      "Приватна школа для дорослих у Києві. Акторська майстерність і журналістика — для впевненості, голосу й свободи самовираження. Знижка 50% на перший місяць.";
    if (meta) meta.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <main className="relative bg-background">
      <Nav />
      <Hero />
      <About />
      <Directions />
      <Benefits />
      <Teachers />
      <Atmosphere />
      <FAQ />
      <Offer />
      <ApplyForm />
      <Footer />
    </main>
  );
};

export default Index;
