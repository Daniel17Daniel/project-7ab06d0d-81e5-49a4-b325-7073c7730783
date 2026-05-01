import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

type Score = { acting: number; journalism: number };

type Option = { label: string; w: Partial<Score> };
type Q = { title: string; options: Option[] };

const questions: Q[] = [
  {
    title: "Що для вас зараз найважливіше?",
    options: [
      { label: "Хочу почуватися вільніше й упевненіше", w: { acting: 2, journalism: 1 } },
      { label: "Хочу краще говорити й проявляти себе", w: { journalism: 2, acting: 1 } },
      { label: "Хочу спробувати себе в творчому середовищі", w: { acting: 1, journalism: 1 } },
      { label: "Поки просто шукаю, що мені відгукується", w: { acting: 1, journalism: 1 } },
    ],
  },
  {
    title: "Який формат вам ближчий?",
    options: [
      { label: "Сцена, емоції, самовираження", w: { acting: 3 } },
      { label: "Камера, мова, подача", w: { journalism: 3 } },
      { label: "Мені цікаво і те, і те", w: { acting: 1, journalism: 1 } },
      { label: "Я поки не впевнений(-а)", w: { acting: 1, journalism: 1 } },
    ],
  },
  {
    title: "Що для вас зараз найважливіше внутрішньо?",
    options: [
      { label: "Подолати сором'язливість", w: { acting: 2, journalism: 1 } },
      { label: "Стати впевненішим у спілкуванні", w: { journalism: 2, acting: 1 } },
      { label: "Розвинути мовлення і подачу", w: { journalism: 3 } },
      { label: "Просто дозволити собі спробувати щось нове", w: { acting: 1, journalism: 1 } },
    ],
  },
  {
    title: "Чи маєте ви досвід?",
    options: [
      { label: "Ні, починаю з нуля", w: {} },
      { label: "Є трохи досвіду", w: {} },
      { label: "Є досвід, але хочу розвиватися далі", w: {} },
    ],
  },
];

export const DirectionBot = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0); // 0 = intro, 1..4 = questions, 5 = result
  const [score, setScore] = useState<Score>({ acting: 0, journalism: 0 });

  // Reset when closed
  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setStep(0);
        setScore({ acting: 0, journalism: 0 });
      }, 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-direction-bot", handler);
    return () => window.removeEventListener("open-direction-bot", handler);
  }, []);

  const choose = (opt: Option) => {
    setScore((s) => ({
      acting: s.acting + (opt.w.acting ?? 0),
      journalism: s.journalism + (opt.w.journalism ?? 0),
    }));
    setStep((s) => s + 1);
  };

  const recommendation = () => {
    const diff = score.acting - score.journalism;
    if (diff >= 2) return "acting";
    if (diff <= -2) return "journalism";
    return "both";
  };

  const resultText = () => {
    const r = recommendation();
    if (r === "acting") {
      return {
        title: "Здається, ваш напрям — Акторська майстерність.",
        body: "Вас тягне до сцени, емоцій і живої присутності. Це простір, де можна розкритися, відчути своє тіло, голос і свободу самовираження — спокійно й по-дорослому.",
        primaryHref: "/acting",
        primaryLabel: "Відкрити сторінку напряму",
        applyHref: "/apply?direction=acting",
      };
    }
    if (r === "journalism") {
      return {
        title: "Здається, ваш напрям — Журналістика.",
        body: "Вас вабить чітке мовлення, камера, інтерв'ю та комунікація. Тут ви опануєте подачу, структуру думки й упевненість перед мікрофоном і людьми.",
        primaryHref: "/journalism",
        primaryLabel: "Відкрити сторінку напряму",
        applyHref: "/apply?direction=journalism",
      };
    }
    return {
      title: "Вам можуть підійти обидва напрями.",
      body: "Ваші відповіді показують інтерес і до сцени, і до медіа. Це нормально — багато наших учнів так починають. Подивіться обидві сторінки й оберіть те, що відгукнеться сильніше.",
      primaryHref: "/acting",
      primaryLabel: "Подивитись Акторську",
      applyHref: "/apply?direction=both",
    };
  };

  return (
    <>
      {/* Floating trigger */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full border border-primary/50 bg-card/90 px-5 py-3 text-sm text-foreground shadow-glow backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-glow-strong"
            aria-label="Допомогти обрати напрям"
          >
            <span className="relative inline-flex h-4 w-4 items-center justify-center">
              <span className="absolute inset-0 animate-ping rounded-full bg-primary/40" />
              <MessageCircle className="relative h-4 w-4 text-primary" />
            </span>
            <span className="hidden sm:inline">Допомогти обрати напрям?</span>
            <span className="sm:hidden">Підібрати напрям</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-end justify-center bg-background/70 p-0 backdrop-blur-md sm:items-center sm:p-6"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl border border-border/60 bg-card shadow-elegant"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Закрити"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="px-8 py-10 sm:px-12 sm:py-14">
                {step === 0 && (
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-primary">Підбір напряму</p>
                    <h3 className="mt-6 font-display text-3xl leading-tight md:text-4xl">
                      Кілька тихих запитань — і ми зрозуміємо разом.
                    </h3>
                    <p className="mt-6 leading-relaxed text-muted-foreground">
                      Це не тест і не оцінювання. Просто спокійна розмова з собою —
                      щоб відчути, який напрям вам зараз ближчий: сцена чи студія.
                    </p>
                    <button
                      onClick={() => setStep(1)}
                      className="btn-gold mt-10 inline-flex items-center gap-3 px-8 py-3 text-sm font-medium uppercase tracking-[0.2em]"
                    >
                      Почати <span>→</span>
                    </button>
                  </div>
                )}

                {step >= 1 && step <= questions.length && (
                  <div key={step}>
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      <span>Питання {step} з {questions.length}</span>
                      <span className="h-px flex-1 bg-border/60" />
                    </div>
                    <h3 className="mt-6 font-display text-2xl leading-tight md:text-3xl">
                      {questions[step - 1].title}
                    </h3>
                    <div className="mt-8 flex flex-col gap-3">
                      {questions[step - 1].options.map((o) => (
                        <button
                          key={o.label}
                          onClick={() => choose(o)}
                          className="group flex items-center justify-between gap-4 border border-border/60 bg-background/40 px-5 py-4 text-left text-sm text-foreground transition-all hover:border-primary hover:bg-primary/5 hover:text-primary"
                        >
                          <span>{o.label}</span>
                          <span className="text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">→</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step > questions.length && (() => {
                  const r = resultText();
                  return (
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] text-primary">Ваш напрям</p>
                      <h3 className="mt-6 font-display text-3xl leading-tight md:text-4xl">
                        {r.title}
                      </h3>
                      <p className="mt-6 leading-relaxed text-muted-foreground">{r.body}</p>

                      <div className="mt-8 border-t border-border/60 pt-6 text-sm text-muted-foreground">
                        <span className="text-primary">●</span> Для нових учнів — знижка 50% на перший місяць навчання.
                      </div>

                      <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                          to={r.primaryHref}
                          onClick={() => setOpen(false)}
                          className="btn-gold inline-flex items-center gap-3 px-6 py-3 text-sm font-medium uppercase tracking-[0.2em]"
                        >
                          {r.primaryLabel} <span>→</span>
                        </Link>
                        <Link
                          to={r.applyHref}
                          onClick={() => setOpen(false)}
                          className="btn-outline-gold inline-flex items-center gap-3 px-6 py-3 text-sm uppercase tracking-[0.2em]"
                        >
                          Залишити заявку
                        </Link>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
