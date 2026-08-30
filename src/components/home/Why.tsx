import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faHandshake,
  faLaptopCode,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const reasons = [
  {
    id: "collaboration",
    icon: faHandshake,
  },
  {
    id: "designAndDevelopment",
    icon: faPalette,
  },
  {
    id: "customSolutions",
    icon: faLaptopCode,
  },
  {
    id: "performance",
    icon: faBolt,
  },
];

export default function Why() {
  const { t } = useTranslation();

  return (
      <section className="overflow-hidden px-4 py-16 xl:px-16">
        <div className="c-gradient grid gap-12 rounded-4xl border border-gray-200 p-6 shadow-sm md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-(--color-accent)">
              {t("why.label")}
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t("why.title")}
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              {t("why.description")}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
                <div
                    key={reason.id}
                    className="rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-sm"
                >
                  <FontAwesomeIcon
                      icon={reason.icon}
                      className="mb-4 text-xl text-(--color-accent)"
                  />

                  <h3 className="mb-2 font-bold">
                    {t(`why.reasons.${reason.id}.title`)}
                  </h3>

                  <p className="leading-7 text-gray-600">
                    {t(`why.reasons.${reason.id}.text`)}
                  </p>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}
