import { NavLink } from 'react-router-dom';
import SocialLinks from "./SocialLinks.tsx";

export default function Footer() {
    return (
        <footer className="c-gradient flex flex-col items-center gap-4 border-t border-gray-200 px-4 py-8">
            <div className="flex items-center gap-1">
                <SocialLinks />
            </div>

            <div className="h-[2px] w-[50px] bg-gray-300" />

            <div className="text-center text-sm">
                Copyright © {new Date().getFullYear()} —{' '}

                <NavLink
                    to="/"
                    className="font-semibold transition hover:text-[var(--color-accent)]"
                >
                    Everlasting Wild
                </NavLink>
            </div>
        </footer>
    );
}
