import React, { MutableRefObject, useEffect, useState } from "react";

export default function useIsIntersection(
    sections: MutableRefObject<HTMLElement>[] | MutableRefObject<null>[]
) {
    const [isIntersecting, setIsIntersecting] = useState("Home");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsIntersecting(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section: React.RefObject<HTMLElement>) => {
            if (section.current) {
                observer.observe(section.current);
            }
        });

        return () => {
            sections.forEach((section: React.RefObject<HTMLElement>) => {
                if (section.current) {
                    observer.unobserve(section.current);
                }
            });
        };
    }, []);

    return isIntersecting;
}
