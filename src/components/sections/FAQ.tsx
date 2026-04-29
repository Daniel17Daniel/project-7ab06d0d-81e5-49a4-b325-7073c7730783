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
    a: "Так. Більшість наших учнів приходять саме без досвіду — і це нормальна, навіть бажана точка старту. Програма побудована так, щоб ви могли почати з нуля у власному темпі.",
  },
  {
    q: "Що робити, якщо я дуже сором'язлива людина і мені важко розкриватися?",
    a: "Ми це чудово розуміємо й враховуємо. На перших заняттях ніхто не вимагає «грати» чи «виступати». Ми починаємо з тиші, дихання, дрібних вправ — і ви самі помічаєте, як крок за кроком стає легше.",
  },
  {
    q: "Чи не запізно починати у дорослому віці?",
    a: "Ніколи. Більше того — дорослі учні часто прогресують швидше: у них є життєвий досвід, увага й мотивація. Наша школа — саме для дорослих.",
  },
  {
    q: "Чи підійде мені курс, якщо я не планую ставати професійним актором або журналістом?",
    a: "Так. Більшість приходить не за професією, а за собою — за впевненістю, голосом, свободою спілкування. Те, що ви здобудете, лишиться з вами в будь-якій сфері життя.",
  },
  {
    q: "Чи допомагають заняття стати впевненішим у житті, а не тільки на сцені?",
    a: "Це і є основна мета. Сцена й камера — лише інструменти. Те, що тренується тут — присутність, контакт, голос — працює щодня: на зустрічах, у розмовах, у важливих рішеннях.",
  },
  {
    q: "Що, якщо я боюся виглядати дивно або незграбно перед іншими?",
    a: "Цей страх знайомий усім, хто починає. Ми створюємо середовище без оцінок: тут ніхто не сміється й не порівнює. Ваша «незграбність» — це початок свободи, і ми разом її проходимо.",
  },
];

export const FAQ = () => (
  <section id="faq" className="relative border-t border-border/60 bg-secondary/20 py-28 md:py-40">
    <div className="container grid gap-16 md:grid-cols-12">
      <Reveal className="md:col-span-4">
        <p className="text-xs uppercase tracking-[0.4em] text-primary">Питання</p>
        <h2 className="mt-6 font-display text-4xl md:text-5xl">Що зазвичай запитують.</h2>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Якщо вашого питання немає тут — напишіть нам. Відповімо тепло й по суті.
        </p>
      </Reveal>

      <div className="md:col-span-8">
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.04}>
              <AccordionItem value={`item-${i}`} className="border-b border-border/60">
                <AccordionTrigger className="py-6 text-left font-display text-xl hover:no-underline md:text-2xl">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            </Reveal>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);
