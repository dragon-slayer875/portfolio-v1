import React from "react";
import { Button } from "../ui/button";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "../ui/theme-toggle";
import useIsScroll from "@/lib/custom-hooks/is-scroll";
import scrollTo from "@/lib/scrollTo";
import { cn } from "@/lib/utils";

type NavProps = {
    links: any[];
    isVis: string;
};

export default function Nav(props: NavProps) {
    const isScrolled = useIsScroll();

    return (
        <nav
            className={cn(
                "fixed backdrop-blur-md z-50 top-0 p-5 w-dvw flex justify-between items-center transition-all duration-300",
                isScrolled ? "shadow-sm shadow-primary" : ""
            )}
        >
            <div>
                <h1 className="font-black text-primary text-4xl sm:text-4xl">Rt</h1>
            </div>
            <div className="hidden lg:grid grid-flow-col grid-cols-3 justify-items-center items-center gap-3">
                {props.links.map((section, index) => (
                    <Button
                        key={index}
                        onClick={() => scrollTo(section.ref)}
                        variant={"ghost"}
                        className={`font-medium w-full py-1 px-3 mx-1 hover:shadow-[0_0_0_0.1rem_hsl(var(primary))] shadow-primary text-lg text-center rounded-3xl transition-300
                        ${
                            props.isVis === section.name
                                ? "bg-primary text-background hover:bg-primary hover:text-background"
                                : ""
                        }`}
                    >
                        {section.name}
                    </Button>
                ))}
            </div>
            <div className="flex items-center gap-1 lg:hidden">
                <ThemeToggle />
                <MobileNav links={props.links} />
            </div>
            <div className="hidden lg:flex gap-1">
                <ThemeToggle />
            </div>
        </nav>
    );
};

