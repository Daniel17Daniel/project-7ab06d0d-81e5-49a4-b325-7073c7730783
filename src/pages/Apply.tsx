import { useEffect } from "react";
import { ApplyForm } from "@/components/sections/ApplyForm";

const Apply = () => {
  useEffect(() => {
    document.title = "Залишити заявку — КіноPoint Film";
  }, []);

  return (
    <div className="pt-24">
      <section className="border-b border-border/60 py-20 md:py-28">
        <div className="container max-w-3xl">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Контакти · Заявка</p>
          <h1 className="mt-6 font-display text-5xl leading-tight md:text-6xl text-balance">
            Один спокійний крок — і ми зв'яжемося з вами.
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Без зобов'язань. Ми зателефонуємо чи напишемо у зручний для вас час, поставимо
            кілька запитань і допоможемо обрати напрям. Для нових учнів діє знижка 50% на перший місяць.
          </p>
        </div>
      </section>
      <ApplyForm />
    </div>
  );
};

export default Apply;
