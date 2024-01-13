import { ProjectCard } from "@/components/project-card";
import Image from "next/image";
import React, { forwardRef } from "react";
import projects from "@/public/data/projects.json";

const Projects = forwardRef(function (props, ref) {
    return (
        <section
            ref={ref as React.RefObject<HTMLDivElement> | null}
            id="Projects"
            className="p-1 py-10 md:p-24 bg- flex items-center"
        >
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-between mb-12 gap-10">
                    <div>
                    <h2 className="text-4xl font-bold text-center">Projects</h2>
                    <p className="text-xl text-center">
                        Here are some of my projects
                    </p>
                    </div>
                    <div className="grid justify-items-center lg:grid-cols-2 lg:grid justify-center items-center w-full gap-6">
                        {projects["projects"].map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                github_link={project.github}
                                live_link={project.live}
                                image={project.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Projects;
