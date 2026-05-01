import { useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { Reveal } from "./Reveal";
import { toast } from "@/hooks/use-toast";

export const ApplyForm = () => {
  const [loading, setLoading] = useState(false);
  const [params] = useSearchParams();
  const presetDirection = params.get("direction");
  const initialDirection =
    presetDirection === "acting" || presetDirection === "journalism" || presetDirection === "both"
      ? presetDirection
      : "";

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Дякуємо!",
        description: "Ми зв'яжемося з вами найближчим часом, щоб допомогти підібрати напрям.",
      });
    }, 700);
  };

  const inputCls =
    "w-full border-0 border-b border-border bg-transparent px-0 py-4 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-0 transition-colors";

  return (
    <section id="apply" className="relative overflow-hidden border-t border-border/60 surface-spotlight py-28 md:py-40">
      <div className="container relative grid gap-16 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Заявка</p>
          <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl text-balance">
            Залиште заявку, і ми допоможемо підібрати напрям, який підійде саме вам.
          </h2>
          <p className="mt-8 leading-relaxed text-muted-foreground">
            Без зобов'язань. Ми зателефонуємо чи напишемо у зручний для вас час, поставимо
            кілька запитань і спокійно поговоримо.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 border border-primary/30 bg-card/50 px-4 py-3 text-sm backdrop-blur-sm">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-ember opacity-60" />
              <span className="relative inline-block h-2 w-2 rounded-full bg-ember" />
            </span>
            <span className="text-muted-foreground">Для нових учнів — </span>
            <span className="gold-text font-medium">знижка 50%</span>
          </div>
          <div className="mt-12 space-y-3 text-sm text-muted-foreground">
            <p>Київ · вул. Хрещатик, 22</p>
            <p>+380 (00) 000 00 00</p>
            <p>hello@kinopoint.film</p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-7">
          <form onSubmit={onSubmit} className="space-y-2">
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Ім'я</label>
              <input required name="name" type="text" className={inputCls} placeholder="Як до вас звертатися" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Телефон / Telegram</label>
              <input required name="contact" type="text" className={inputCls} placeholder="+380 або @username" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Напрям, який цікавить</label>
              <select name="direction" className={inputCls} defaultValue={initialDirection}>
                <option value="" disabled>Оберіть напрям</option>
                <option value="acting">Акторська майстерність</option>
                <option value="journalism">Журналістика</option>
                <option value="both">Ще не визначився(-лась)</option>
              </select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Коментар</label>
              <textarea name="comment" rows={3} className={`${inputCls} resize-none`} placeholder="Що для вас важливо? Що б ви хотіли спробувати?" />
            </div>
            <div className="pt-8">
              <button
                type="submit"
                disabled={loading}
                className="btn-gold group inline-flex items-center gap-3 px-12 py-4 text-sm font-medium uppercase tracking-[0.2em] disabled:opacity-60"
              >
                {loading ? "Надсилаємо..." : "Надіслати заявку"}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
              <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                Натискаючи кнопку, ви погоджуєтеся з обробкою персональних даних.
                Ми ніколи не передаємо ваші контакти третім сторонам.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
