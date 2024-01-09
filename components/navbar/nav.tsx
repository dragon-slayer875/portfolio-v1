import React from "react";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "../ui/theme-toggle";

const links = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Skills", link: "/skills" },
    { id: 3, name: "Projects", link: "/projects" },
    { id: 4, name: "About", link: "/about" },
    { id: 5, name: "Contact", link: "/contact" },
];

const Nav = () => {
    return (
        <nav className="sticky top-0 p-5 flex justify-between items-center shadow-lg border-primary border-2">
            <div>
                <h1 className="font-black text-4xl sm:text-4xl">Rt</h1>
            </div>
            <div className="hidden md:flex gap-1">
                {links.map((link) => (
                    <Link
                        key={link.id}
                        href={link.link}
                        className="font-medium p-2 text-lg"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
            <div className="flex items-center gap-1 md:hidden">
                <ThemeToggle />
                <MobileNav links={links} />
            </div>
            <div className="hidden md:flex gap-1">
            <ThemeToggle />
            </div>
        </nav>
    );
};

export default Nav;
