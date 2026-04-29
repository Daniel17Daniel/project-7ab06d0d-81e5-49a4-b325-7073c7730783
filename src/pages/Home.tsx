import { useEffect } from "react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Directions } from "@/components/sections/Directions";
import { Benefits } from "@/components/sections/Benefits";
import { Teachers } from "@/components/sections/Teachers";
import { Stories } from "@/components/sections/Stories";
import { Journey } from "@/components/sections/Journey";
import { CtaBlock } from "@/components/sections/CtaBlock";

const Home = () => {
  useEffect(() => {
    document.title = "КіноPoint Film — Школа акторської майстерності та журналістики для дорослих";
    const desc =
      "Приватна школа для дорослих у Києві. Акторська майстерність і журналістика — для впевненості, голосу й свободи самовираження. Знижка 50% на перший місяць.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Directions />
      <Benefits />
      <Teachers />
      <Stories />
      <Journey />
      <CtaBlock />
    </>
  );
};

export default Home;
