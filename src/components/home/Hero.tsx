import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLayerGroup,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  const highlights = [
    {
      id: "development",
      icon: faCode,
      title: t("hero.highlights.development"),
    },
    {
      id: "identity",
      icon: faLayerGroup,
      title: t("hero.highlights.identity"),
    },
    {
      id: "responsive",
      icon: faMobileScreen,
      title: t("hero.highlights.responsive"),
    },
  ];

  return (
      <section className="overflow-hidden px-4 py-16 xl:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-(--color-accent)">
              Everlasting Wild
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {t("hero.title")}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              {t("hero.description")}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {highlights.map((highlight) => (
                <div
                    key={highlight.id}
                    className="rounded-2xl border border-gray-200 bg-white/70 p-4 shadow-sm backdrop-blur"
                >
                  <FontAwesomeIcon
                      icon={highlight.icon}
                      className="mb-4 text-xl text-(--color-accent)"
                  />

                  <p className="text-sm font-semibold">{highlight.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-(--color-accent)/30 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-black/10 blur-3xl" />

            <div className="relative rounded-4xl border border-gray-200 bg-white p-4 shadow-2xl">
              <div className="mb-4 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="rounded-3xl bg-gray-950 p-6 text-white">
                <p className="mb-4 text-sm text-(--color-accent)/80">
                  {t("hero.featuredProject.label")}
                </p>

                <h2 className="text-3xl font-bold">Anegy</h2>

                <p className="mt-4 text-white/70">
                  {t("hero.featuredProject.description")}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-2xl font-bold">Vue</p>
                    <p className="text-sm text-white/50">
                      {t("hero.featuredProject.frontend")}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-2xl font-bold">PHP</p>
                    <p className="text-sm text-white/50">
                      {t("hero.featuredProject.backend")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
