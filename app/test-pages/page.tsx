"use client";
import Index from "@/sections";
import Contact from "@/sections/contact";
import Projects from "@/sections/projects";
import Nav from "@/components/navbar/nav";
import { useRef, useEffect, useState } from "react";

export default function Home() {
    const home = useRef(null);
    const skills = useRef(null);
    const projects = useRef(null);
    const about = useRef(null);
    const contact = useRef(null);
    const [isVis, setIsVis] = useState("Home");
    const sections = [home, skills, projects, about, contact];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.log(entry.target);
                        setIsVis(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );
        sections.forEach((section) => {
            if (section.current) {
                observer.observe(section.current);
            }
        });
    }, []);

    return (
        <>
            <Nav isVis={isVis} />
            <Index ref={home} />
            <Projects ref={projects} />
            <Contact ref={contact} />
        </>
    );
}
