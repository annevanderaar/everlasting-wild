import { useTranslation } from "react-i18next";

const languages = [
    {
        code: "nl",
        label: "NL",
    },
    {
        code: "en",
        label: "EN",
    },
];

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const currentLanguage = (i18n.resolvedLanguage || i18n.language).split("-")[0];

    const changeLanguage = (language:string) => {
        i18n.changeLanguage(language);
        localStorage.setItem("savedLang", language);
    };

    return (
        <div
            className="flex items-center rounded-full border border-gray-200 bg-white/70 p-1 shadow-sm"
            aria-label="Language selection"
        >
            {languages.map((language) => {
                const isActive = currentLanguage === language.code;

                return (
                    <button
                        key={language.code}
                        type="button"
                        onClick={() => changeLanguage(language.code)}
                        aria-label={`Change language to ${language.label}`}
                        aria-pressed={isActive}
                        className={`cursor-pointer rounded-full px-3 py-1 text-xs font-semibold transition ${
                            isActive
                                ? "bg-(--color-accent) text-black"
                                : "text-gray-500 hover:text-black"
                        }`}
                    >
                        {language.label}
                    </button>
                );
            })}
        </div>
    );
}
