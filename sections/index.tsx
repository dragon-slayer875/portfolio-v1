import Image from "next/image";
import React, { forwardRef } from "react";

const Index = forwardRef(function (props, ref) {
    return (
        <>
            <div
                ref={ref as React.RefObject<HTMLDivElement> | null}
                id="Home"
                className="flex flex-col justify-center items-center gap-5 w-full min-h-[100vh] bg-background"
            >
                    <Image
                        width={500}
                        height={500}
                        src="/portrait.jpg"
                        alt="Portrait, Rudraksh Tyagi"
                        className="w-[60dvw] h-[auto] aspect-square rounded-full shadow-2xl"
                        style={{
                            objectFit: "cover",
                            width: "60vw",
                            height: "auto",
                            aspectRatio: "1/1",
                            boxShadow: "-10px 10px 0px 0px hsl(var(--foreground))",
                        }}
                    />
                    <div className="flex flex-col items-center justify-center w-full h-full">
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
