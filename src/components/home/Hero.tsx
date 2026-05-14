import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCode,
  faLayerGroup,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";

const highlights = [
  {
    icon: faCode,
    title: "Maatwerk development",
  },
  {
    icon: faLayerGroup,
    title: "Sterke visuele identiteit",
  },
  {
    icon: faMobileScreen,
    title: "Responsive design",
  },
];

export default function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto grid items-center gap-12 px-4 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
            Everlasting Wild
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Maatwerk websites & webapplicaties die opvallen.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Ik ontwerp en ontwikkel moderne websites en webapplicaties met focus
            op design, performance en gebruiksvriendelijkheid.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <NavLink
              to="/projecten"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 font-medium text-white transition hover:bg-[var(--color-accent)] hover:text-black"
            >
              Bekijk projecten
              <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
            </NavLink>

            <NavLink
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 font-medium transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Neem contact op
            </NavLink>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="rounded-2xl border border-gray-200 bg-white/70 p-4 shadow-sm backdrop-blur"
              >
                <FontAwesomeIcon
                  icon={highlight.icon}
                  className="mb-4 text-xl text-[var(--color-accent)]"
                />

                <p className="text-sm font-semibold">{highlight.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[var(--color-accent)]/30 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-black/10 blur-3xl" />

          <div className="relative rounded-[2rem] border border-gray-200 bg-white p-4 shadow-2xl">
            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="rounded-[1.5rem] bg-gray-950 p-6 text-white">
              <p className="mb-4 text-sm text-[var(--color-accent)]/80">
                Featured project
              </p>

              <h2 className="text-3xl font-bold">Anegy</h2>

              <p className="mt-4 text-white/70">
                Een film en serieplatform met favorieten, gekeken lijst en een
                generator.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-bold">Vue</p>
                  <p className="text-sm text-white/50">Frontend</p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-bold">Laravel/PHP</p>
                  <p className="text-sm text-white/50">Backend</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
