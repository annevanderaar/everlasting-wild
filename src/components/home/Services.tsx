import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDesktop,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

const services = [
  {
    id: "websites",
    icon: faDesktop,
  },
  {
    id: "webApplications",
    icon: faCode,
  },
  {
    id: "wordpress",
    icon: faWordpress,
  },
  {
    id: "frontendDevelopment",
    icon: faLayerGroup,
  },
];

export default function Services() {
  const { t } = useTranslation();

  return (
      <section className="px-4 py-16 xl:px-16">
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
            {t("services.label")}
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("services.title")}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
              <div
                  key={service.id}
                  className="group rounded-4xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-(--color-accent)/15 text-(--color-accent) transition group-hover:bg-(--color-accent) group-hover:text-black">
                  <FontAwesomeIcon icon={service.icon} className="text-xl" />
                </div>

                <h3 className="mb-3 text-xl font-bold">
                  {t(`services.items.${service.id}.title`)}
                </h3>

                <p className="leading-7 text-gray-600">
                  {t(`services.items.${service.id}.description`)}
                </p>
              </div>
          ))}
        </div>
      </section>
  );
}
