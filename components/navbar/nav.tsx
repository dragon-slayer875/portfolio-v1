import React from "react";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "../ui/theme-toggle";
import { cn } from "@/lib/utils";

const links = [
    { name: "Home", link: "/" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
];

type NavProps = {
    isVis: string;
};

const Nav = (NavProps: any) => {
    return (
        <nav
            className={cn(
                "fixed backdrop-blur-md z-50 top-0 p-5 w-dvw flex justify-between items-center shadow-sm shadow-primary transition-300",
            )}
        >
            <div>
                <h1 className="font-black text-4xl sm:text-4xl">Rt</h1>
            </div>
            <div className="hidden md:grid grid-flow-col grid-cols-5 justify-items-center jus items-center gap-3">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.link}
                        className={`font-medium w-full py-1 px-3 mx-1 hover:shadow-[0_0_0_0.1rem_hsl(var(primary))] shadow-primary text-lg text-center rounded-3xl transition-300
                        ${
                            NavProps.isVis === link.name
                                ? "bg-primary text-background"
                                : ""
                        }`}
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
