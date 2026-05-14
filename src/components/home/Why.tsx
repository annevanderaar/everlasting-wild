import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faHandshake,
  faLaptopCode,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

const reasons = [
  {
    icon: faHandshake,
    title: "Persoonlijke samenwerking",
    text: "Korte lijnen, duidelijk contact en actief meedenken tijdens het hele proces.",
  },
  {
    icon: faPalette,
    title: "Design én development",
    text: "Niet alleen technisch goed gebouwd, maar ook visueel sterk en passend bij je merk.",
  },
  {
    icon: faLaptopCode,
    title: "Maatwerk oplossingen",
    text: "Geen standaard template gevoel, maar een website of applicatie die past bij jouw doel.",
  },
  {
    icon: faBolt,
    title: "Snel en gebruiksvriendelijk",
    text: "Gebouwd met focus op performance, responsive design en een prettige gebruikerservaring.",
  },
];

export default function Why() {
  return (
    <section className="overflow-hidden px-4 py-16 xl:px-16">
      <div className="c-gradient grid gap-12 rounded-[2rem] border border-gray-200 p-6 shadow-sm md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
            Waarom Everlasting Wild
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Een website die niet alleen mooi is, maar ook goed werkt.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Ik combineer design, frontend development en technische kennis om
            websites te maken die professioneel voelen, prettig werken en klaar
            zijn om verder te groeien.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-sm"
            >
              <FontAwesomeIcon
                icon={reason.icon}
                className="mb-4 text-xl text-[var(--color-accent)]"
              />

              <h3 className="mb-2 font-bold">{reason.title}</h3>

              <p className="leading-7 text-gray-600">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
