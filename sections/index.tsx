import Image from "next/image";
import React, { forwardRef } from "react";

const Index = forwardRef(function (props, ref) {
    return (
        <>
            <div
                ref={ref as React.RefObject<HTMLDivElement> | null}
                id="Home"
                // style={{
                //     height: "100dvh",
                //     width: "100vw",
                // }}
                className="flex flex-col min-h-screen min-w-dvw md:max-w-[80dvw] md:flex md:flex-row-reverse justify-center items-center gap-4"
            >
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
                <div className="flex flex-col items-center justify-center w-full">
                    <h1 className="font-bold text-4xl text-foreground">
                        Rudraksh Tyagi
                    </h1>
                    <h2 className="text-2xl text-foreground">
                        Software Engineer
                    </h2>
                </div>

            </div>
        </>
    );
});

export default Index;
