"use client";
import Index from "@/sections";
import Contact from "@/sections/contact";
import Projects from "@/sections/projects";
import Nav from "@/components/navbar/nav";
import useIsIntersection from "@/lib/custom-hooks/is-intersection";
import { Separator } from "@/components/ui/separator";
import { useRef, useEffect, useState } from "react";

export default function Home() {
    const home = useRef(null);
    const skills = useRef(null);
    const projects = useRef(null);
    const about = useRef(null);
    const contact = useRef(null);

    const sections = [home, skills, projects, about, contact];
    const isVis = useIsIntersection(sections);

    return (
        <>
            <Nav isVis={isVis} />
            <Index ref={home} />
            <Separator />
            <Projects ref={projects} />
            <Contact ref={contact} />
        </>
    );
}
