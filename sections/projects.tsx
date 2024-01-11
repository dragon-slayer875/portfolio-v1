import Image from "next/image";
import React from "react";
import { forwardRef } from "react";

const Projects = forwardRef(function (_props, ref) {
    return (
        <section
            ref={ref as React.RefObject<HTMLDivElement> | null}
            id="Projects"
            className="p-1 md:p-24 flex items-center"
        >
            <div className="container mx-auto">hello</div>
        </section>
    );
});

export default Projects;
