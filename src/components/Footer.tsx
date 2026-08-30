import { NavLink } from "react-router-dom";
import SocialLinks from "./SocialLinks.tsx";

export default function Footer() {
  return (
    <footer className="c-gradient flex flex-col items-center gap-2 border-t border-gray-200 py-4">
      <div className="flex items-center gap-1">
        <SocialLinks />
      </div>

      <div className="h-0.5 w-12.5 bg-(--color-accent)" />

      <div className="text-center text-sm">
        Copyright © {new Date().getFullYear()} —{" "}
        <NavLink
          to="/"
          className="font-semibold transition hover:text-(--color-accent)"
        >
          Everlasting Wild
        </NavLink>
      </div>
    </footer>
  );
}
