import Image from "next/image";
import React, { forwardRef } from "react";
import { ArrowDown } from "lucide-react";

const Index = forwardRef(function (props, ref) {
    return (
        <section ref={ref as React.RefObject<HTMLDivElement> | null} id="Home"
        className="py-12 xl:py-24 h-[84vh]">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-between w-full">
                    <div>
                        <h1 className="font-bold text-4xl text-foreground">
                            Rudraksh Tyagi
                        </h1>
                        <h2 className="text-2xl text-foreground">
                            Software Engineer
                        </h2>
                    </div>
                    <div
                        style={{
                            position: "relative",
                            width: "45dvw",
                            height: "auto",
                            aspectRatio: "1/1",
                            boxShadow: "-1.5rem 1.5rem 0 0",
                            margin: "0 0 3rem 0",
                        }}
                    >
                        <Image
                            fill
                            objectFit="cover"
                            src="/portrait.png"
                            alt="Portrait, Rudraksh Tyagi"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Index;
