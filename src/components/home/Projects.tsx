import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "swiper/css";
import anegyImage from "../../assets/anegy/featured.png";
import jewelryImage from "../../assets/jewelrybysil/featured.png";
import montiraImage from "../../assets/montiramassage/featured.png";
import thaiWokImage from "../../assets/thaiwoktogo/featured.png";
import spekulaasplankenImage from "../../assets/spekulaasplanken/featured.png";

const projects = [
  {
    id: "anegy",
    title: "Anegy",
    tags: ["Vue", "JavaScript", "TMDB"],
    path: "https://anegy.nl/",
    image: anegyImage,
  },
  {
    id: "jewelryBySil",
    title: "Jewelry by Sil",
    tags: ["WordPress", "WooCommerce", "CSS"],
    path: "https://jewelrybysil.nl/",
    image: jewelryImage,
  },
  {
    id: "montiraMassage",
    title: "Montira Massage",
    tags: ["WordPress", "UX", "Elementor"],
    path: "https://montiramassage.nl/",
    image: montiraImage,
  },
  {
    id: "thaiWokToGo",
    title: "Thai Wok To Go",
    tags: ["Tailwind", "Modern", "React"],
    path: "https://thaiwoktogo.nl/",
    image: thaiWokImage,
  },
  {
    id: "spekulaasplanken",
    title: "Spekulaasplanken",
    tags: ["React", "Tailwind", "Design"],
    path: "https://spekulaasplanken.nl/",
    image: spekulaasplankenImage,
  },
];

export default function Projects() {
  const { t } = useTranslation();

  return (
      <section className="px-4 py-16 xl:px-16">
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-(--color-accent)">
            {t("projects.label")}
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("projects.title")}
          </h2>
        </div>

        <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={24}
            loop
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              960: {
                slidesPerView: 2,
              },
              1300: {
                slidesPerView: 3,
              },
              2100: {
                slidesPerView: 4,
              },
            }}
        >
          {projects.map((project) => (
              <SwiperSlide key={project.id} className="flex h-auto">
                <a
                    href={project.path}
                    target="_blank"
                    rel="noreferrer"
                    className="c-gradient group flex h-full w-full flex-col rounded-4xl border border-gray-200 p-5 transition hover:-translate-y-1"
                >
                  <div className="mb-6 aspect-[1.45] overflow-hidden rounded-3xl border border-gray-100 bg-white">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs text-gray-600"
                        >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="mb-3 text-xl font-bold">{project.title}</h3>

                  <p className="mb-6 leading-7 text-gray-600">
                    {t(`projects.items.${project.id}.description`)}
                  </p>

                  <span className="mt-auto inline-flex items-center gap-2 font-medium transition group-hover:text-(--color-accent)">
                    {t("projects.viewCase")}

                      <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-sm transition group-hover:translate-x-1"
                      />
                  </span>
                </a>
              </SwiperSlide>
          ))}
        </Swiper>
      </section>
  );
}
