import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDesktop,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";

const services = [
  {
    icon: faDesktop,
    title: "Websites",
    description:
      "Moderne websites met focus op uitstraling, snelheid en gebruiksvriendelijkheid.",
  },
  {
    icon: faCode,
    title: "Webapplicaties",
    description:
      "Maatwerk applicaties voor functies die verder gaan dan een standaard website.",
  },
  {
    icon: faWordpress,
    title: "WordPress oplossingen",
    description:
      "Custom WordPress websites, WooCommerce webshops en onderhoudbare oplossingen.",
  },
  {
    icon: faLayerGroup,
    title: "Frontend development",
    description:
      "Sterke interfaces gebouwd met moderne technieken zoals React, Vue en TypeScript.",
  },
];

export default function Services() {
  return (
    <section className="px-4 py-16 xl:px-16">
      <div className="mb-12 flex flex-col items-center text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
          Diensten
        </p>

        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Van idee naar professionele online oplossing.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-accent)]/15 text-[var(--color-accent)] transition group-hover:bg-[var(--color-accent)] group-hover:text-black">
              <FontAwesomeIcon icon={service.icon} className="text-xl" />
            </div>

            <h3 className="mb-3 text-xl font-bold">{service.title}</h3>

            <p className="leading-7 text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
