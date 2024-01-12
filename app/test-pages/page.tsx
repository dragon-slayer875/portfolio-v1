"use client";
import Index from "@/sections";
import Contact from "@/sections/contact";
import Projects from "@/sections/projects";
import Nav from "@/components/navbar/nav";
import useIsIntersection from "@/lib/custom-hooks/is-intersection";
import { Separator } from "@/components/ui/separator";
import { useRef } from "react";

export default function Home() {
    const home = useRef(null);
    const skills = useRef(null);
    const projects = useRef(null);
    const contact = useRef(null);

    const links = [
        { name: "Home", link: "#Home", ref: home },
        { name: "Skills", link: "#Skills", ref: skills },
        { name: "Projects", link: "#Projects", ref: projects },
        { name: "Contact", link: "#Contact", ref: contact },
    ];

    const sections = [home, skills, projects, contact];
    const isVis = useIsIntersection(sections);

    return (
        <>
            <Nav isVis={isVis} links={links} />
            <Index ref={home} />
            <Separator />
            <Projects ref={projects} />
            <Contact ref={contact} />
        </>
    );
}
