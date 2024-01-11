import Image from "next/image";
import React from "react";
import { forwardRef } from "react";

const Index = forwardRef(function (_props, ref) {
    return (
        <section
            ref={ref as React.RefObject<HTMLDivElement> | null}
            id="Home"
            className="p-12 md:p-24 h-dvh flex items-center"
        >
            <div className="container mx-auto">
                <div className="lg:max-xl:p-4 flex flex-col lg:!flex-row-reverse justify-between items-center gap-14">
                    <Image
                        width={400}
                        height={400}
                        src="/portrait.png"
                        alt="Portrait, Rudraksh Tyagi"
                        className="object-cover w-[45dvw] md:w-[40dvw] lg:w-[30dvw] xl:max-w-[25dvw] h-auto aspect-square shadow-[-1.5rem_1.5rem_0_0_hsl(var(--primary))]"
                    />
                    <div className="text-center flex flex-col gap-1 lg:gap-6 lg:text-left lg:max-w-[40dvw]">
                        <div className="text-xl md:text-2xl text-foreground">
                            SOFTWARE ENGINEER
                        </div>
                        <h1 className="font-bold text-4xl md:text-5xl text-foreground">
                            Hello, my name is Rudraksh Tyagi
                        </h1>
                        <p className="font-light hidden lg:block text-xl lg:max-w-[40dvw] xl:max-w-[37dvw] 2xl:max-w-[35dvw]">
                            I am a software engineer based in India. I enjoy
                            building things that live on the internet. I develop
                            exceptional websites and web apps that provide
                            intuitive, pixel-perfect user interfaces with
                            efficient and modern backends.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Index;
