import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    q: "Чи можна прийти без жодного досвіду?",
    a: "Так. Більшість наших учнів починають саме з нуля — і це нормальна, навіть бажана точка старту. Програма побудована так, щоб ви рухалися у власному темпі.",
  },
  {
    q: "Чи не запізно починати у дорослому віці?",
    a: "Ніколи. Дорослі учні часто прогресують швидше: у них є життєвий досвід, увага й мотивація. Ця школа — саме для дорослих.",
  },
  {
    q: "Що робити, якщо мені важко розкриватися перед людьми?",
    a: "Ми починаємо з тиші, дихання й м'яких вправ. Ніхто не вимагає одразу «грати» чи «виступати» — стає легше крок за кроком.",
  },
  {
    q: "Чи допомагають заняття стати впевненішим у житті?",
    a: "Це і є основна мета. Те, що тренується тут — голос, присутність, контакт — працює щодня: у роботі, спілкуванні, важливих рішеннях.",
  },
];

export const HomeFaq = () => (
  <section className="relative border-t border-border/60 bg-secondary/20 py-24 md:py-32">
    <div className="container grid gap-16 md:grid-cols-12">
      <Reveal className="md:col-span-4">
        <p className="text-xs uppercase tracking-[0.4em] text-primary">Питання</p>
        <h2 className="mt-6 font-display text-4xl md:text-5xl">Що зазвичай запитують спочатку.</h2>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Розширені відповіді — на сторінках напрямів. А тут — найголовніше.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em]">
          <Link to="/acting" className="border-b border-primary/60 pb-1 text-primary transition-all hover:gap-3">
            FAQ · Акторська →
          </Link>
          <Link to="/journalism" className="border-b border-primary/60 pb-1 text-primary transition-all hover:gap-3">
            FAQ · Журналістика →
          </Link>
        </div>
      </Reveal>

      <div className="md:col-span-8">
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`} className="border-b border-border/60">
              <AccordionTrigger className="py-6 text-left font-display text-xl hover:no-underline md:text-2xl">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);