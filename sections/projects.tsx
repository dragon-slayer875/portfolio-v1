import { ProjectCard } from "@/components/project-card";
import Image from "next/image";
import React from "react";
import { forwardRef } from "react";

const Projects = forwardRef(function (_props, ref) {
    return (
        <section
            ref={ref as React.RefObject<HTMLDivElement> | null}
            id="Projects"
            className="p-1 md:p-24 bg- flex items-center"
        >
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-between mb-12 gap-10">
                    <div>
                    <h2 className="text-4xl font-bold text-center">Projects</h2>
                    <p className="text-xl text-center">
                        Here are some of my projects
                    </p>
                    </div>
                    <div className="flex flex-col  md:!flex-row justify-center items-center w-full gap-5">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Projects;
