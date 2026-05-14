import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import anegyImage from "../../assets/anegy/featured.png";
import jewelryImage from "../../assets/jewelrybysil/featured.png";
import montiraImage from "../../assets/montiramassage/featured.png";
import thaiWokImage from "../../assets/thaiwoktogo/featured.png";
import sonsOfTheSeaImage from "../../assets/sonsoftheseacustoms/featured.png";

const projects = [
  {
    title: "Anegy",
    description:
      "Een film en serieplatform met een account functie waarbij je favorieten, gekeken lijst kan aanmaken. En daarnaast is er ook een generator voor films en series.",
    tags: ["Vue", "JavaScript", "TMDB"],
    path: "https://anegy.nl/",
    image: anegyImage,
  },
  {
    title: "Jewelry by Sil",
    description:
      "Een stijlvolle website voor een sieradenmerk met focus op uitstraling en gebruiksgemak. Gebouwd met WordPress en WooCommerce.",
    tags: ["WordPress", "WooCommerce", "CSS"],
    path: "https://jewelrybysil.nl/",
    image: jewelryImage,
  },
  {
    title: "Montira Massage",
    description:
      "Een rustige en professionele website voor behandelingen, informatie en het maken van een afspraak. Gebouwd met WordPress en Elementor",
    tags: ["WordPress", "UX", "Elementor"],
    path: "https://montiramassage.nl/",
    image: montiraImage,
  },
  {
    title: "Thai Wok To Go",
    description:
      "Een website voor een restaurant met een overzichtelijk HTML-menu en focus op snelle, duidelijke informatie voor bezoekers.",
    tags: ["HTML", "CSS", "WordPress"],
    path: "https://thaiwoktogo.nl/",
    image: thaiWokImage,
  },
  {
    title: "Sons of the Sea Customs",
    description:
      "Een webshop voor kleding van MCC Sons of the Sea, met focus op uitstraling, producten en gebruiksvriendelijkheid.",
    tags: ["WordPress", "WooCommerce", "Design"],
    path: "https://sonsoftheseacustoms.nl/",
    image: sonsOfTheSeaImage,
  },
];

export default function Projects() {
  return (
    <section className="px-4 py-16 xl:px-16">
      <div className="mb-12 flex flex-col items-center text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
          Projecten
        </p>

        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Websites en applicaties met een eigen identiteit.
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
          <SwiperSlide key={project.title} className="flex h-auto">
            <a
              href={project.path}
              target="_blank"
              className="c-gradient group flex h-full w-full flex-col rounded-[2rem] border border-gray-200 p-5 transition hover:-translate-y-1"
            >
              <div className="mb-6 aspect-[1.45] overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white">
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
                {project.description}
              </p>

              <span className="mt-auto inline-flex items-center gap-2 font-medium transition group-hover:text-[var(--color-accent)]">
                Bekijk case
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
