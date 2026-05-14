import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SocialLinks from "./SocialLinks.tsx";

const pages = [
    { name: 'Home', path: '/' },
    { name: 'Projecten', path: '/projecten' },
    { name: 'Diensten', path: '/diensten' },
    { name: 'Over', path: '/over' },
    { name: 'Contact', path: '/contact' },
];

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="c-gradient sticky top-0 z-[60] h-[100px] border-b border-gray-200 shadow backdrop-blur">
                <div className="mx-auto flex h-full items-center justify-between px-4">
                    <NavLink to="/" className="flex h-full flex-row items-center gap-4">
                        <img
                            src={logo}
                            alt="Everlasting Wild"
                            className="h-20 w-auto object-contain hidden sm:block"
                        />

                        <div>
                            <h1 className="text-xl font-bold">
                                Everlasting Wild
                            </h1>

                            <p className=" text-xs uppercase tracking-widest">
                                Maatwerk Webapplicaties
                            </p>
                        </div>
                    </NavLink>

                    <div className="flex flex-col items-end gap-4">
                        <div className="flex items-center gap-4">
                            <div className="hidden items-center gap-1 md:flex">
                                <SocialLinks />
                            </div>

                            <button
                                type="button"
                                onClick={() => setMenuOpen(prev => !prev)}
                                className="text-2xl md:hidden"
                            >
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                        </div>

                        <nav className="hidden gap-5 md:flex">
                            {pages.map((page) => (
                                <NavLink
                                    key={page.path}
                                    to={page.path}
                                    className={({ isActive }) =>
                                        [
                                            'transition hover:text-[var(--color-accent)]',
                                            isActive ? 'text-[var(--color-accent)]' : '',
                                        ].join(' ')
                                    }
                                >
                                    {page.name}
                                </NavLink>
                            ))}
                        </nav>
                    </div>
                </div>
            </header>

            {menuOpen && (
                <div className="c-gradient fixed left-0 right-0 top-[100px] z-50 h-[calc(100vh-100px)] md:hidden">
                    <aside className="ml-auto h-full w-64 p-6">
                        <nav className="flex flex-col items-end gap-6">
                            {pages.map((page) => (
                                <NavLink
                                    key={page.path}
                                    to={page.path}
                                    onClick={() => setMenuOpen(false)}
                                    className={({ isActive }) =>
                                        [
                                            'text-lg transition',
                                            isActive ? 'text-[var(--color-accent)]' : '',
                                        ].join(' ')
                                    }
                                >
                                    {page.name}
                                </NavLink>
                            ))}
                        </nav>

                        <div className="mt-6 flex justify-end gap-1">
                            <SocialLinks />
                        </div>
                    </aside>
                </div>
            )}
        </>
    );
}
