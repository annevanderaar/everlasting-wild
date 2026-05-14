import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    title: "Anegy",
    description:
      "Een film en serieplatform met favorieten, gekeken lijst en een generator.",
    tags: ["Vue", "JavaScript", "TMDB"],
    path: "/projecten/anegy",
  },
  {
    title: "Jewelry by Sil",
    description:
      "Een stijlvolle website voor een sieradenmerk met focus op uitstraling en gebruiksgemak.",
    tags: ["WordPress", "WooCommerce", "CSS"],
    path: "/projecten/jewelry-by-sil",
  },
  {
    title: "Montira Massage",
    description:
      "Een rustige en professionele website voor behandelingen, informatie en contact.",
    tags: ["WordPress", "UX", "Elementor"],
    path: "/projecten/montira-massage",
  },
];

export default function Projects() {
  return (
    <section className="border-b border-gray-200 px-4 py-20">
      <div className="mx-auto">
        <div className="mb-12 flex flex-col items-center">
          <p className="text-sm text-start font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
            Projecten
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Websites en applicaties met een eigen identiteit.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <NavLink
              key={project.title}
              to={project.path}
              className="group rounded-[2rem] border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="c-gradient mb-6 flex aspect-[1.45] items-center justify-center rounded-[1.5rem] border border-gray-100">
                <span className="text-4xl font-bold text-black/10 transition group-hover:text-[var(--color-accent)]/40">
                  {project.title}
                </span>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="mb-3 text-xl font-bold">{project.title}</h3>

              <p className="mb-6 leading-7 text-gray-600">
                {project.description}
              </p>

              <span className="inline-flex items-center gap-2 font-medium transition group-hover:text-[var(--color-accent)]">
                Bekijk case
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-sm transition group-hover:translate-x-1"
                />
              </span>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}
