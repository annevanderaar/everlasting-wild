import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import SocialLinks from "./SocialLinks.tsx";

export default function Navigation() {
  return (
    <>
      <header className="c-gradient sticky top-0 z-[60] h-[100px] border-b border-gray-200 shadow backdrop-blur">
        <div className="mx-auto flex h-full items-center justify-between px-4">
          <NavLink to="/" className="flex h-full flex-row items-center gap-2">
            <img
              src={logo}
              alt="Everlasting Wild"
              className="h-20 w-auto object-contain hidden sm:block"
            />

            <div>
              <h1 className="text-xl font-bold">Everlasting Wild</h1>

              <p className="text-xs uppercase tracking-widest">
                Maatwerk Webapplicaties
              </p>
            </div>
          </NavLink>

          <div className="items-center gap-2">
            <SocialLinks />
          </div>
        </div>
      </header>
    </>
  );
}
