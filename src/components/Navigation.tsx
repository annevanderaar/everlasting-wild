import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";
import SocialLinks from "./SocialLinks.tsx";
import LanguageSwitcher from "./LanguageSwitcher.tsx";

export default function Navigation() {
  const { t } = useTranslation();

  return (
      <header className="c-gradient sticky top-0 z-60 h-25 border-b border-gray-200 shadow backdrop-blur">
        <div className="mx-auto flex h-full items-center justify-between px-4">
          <NavLink to="/" className="flex h-full flex-row items-center gap-2">
            <img
                src={logo}
                alt="Everlasting Wild"
                className="hidden h-20 w-auto object-contain sm:block"
            />

            <div>
              <h1 className="text-xl font-bold">Everlasting Wild</h1>

              <p className="text-xs uppercase tracking-widest">
                {t("navigation.subtitle")}
              </p>
            </div>
          </NavLink>

          <div className="flex items-center gap-3 flex-col sm:flex-row">
            <LanguageSwitcher />

            <div>
              <SocialLinks />
            </div>
          </div>
        </div>
      </header>
  );
}
