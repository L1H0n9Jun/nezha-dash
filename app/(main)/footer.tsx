import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="mx-auto w-full max-w-5xl">
      <section className="flex flex-col">
        <p className="mt-3 flex gap-1 text-[13px] font-light tracking-tight text-neutral-600/50 dark:text-neutral-300/50">
          {t("p_146-598_Findthecodeon")}{" "}
          <a
            href="https://github.com/L1H0n9Jun/nezha-dash"
            target="_blank"
            className="cursor-pointer font-normal underline decoration-stone-200 hover:decoration-stone-300 transition-colors decoration-2 underline-offset-2 dark:decoration-stone-800 dark:hover:decoration-stone-700"
          >
            {t("a_303-585_GitHub")}
          </a>
        </p>
        <section className="mt-1 flex items-center gap-2 text-[13px] font-light tracking-tight text-neutral-600/50 dark:text-neutral-300/50">
          {t("section_607-869_2020")}
          {new Date().getFullYear()}
        </section>
      </section>
    </footer>
  );
}
