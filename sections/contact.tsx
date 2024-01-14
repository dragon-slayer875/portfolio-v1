import React, { forwardRef } from "react";
import { ContactForm } from "@/components/contact-form";
import { Hand, Github, Linkedin } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Contact = forwardRef(function (props, ref) {
    return (
        <section
            ref={ref as React.RefObject<HTMLDivElement> | null}
            id="Contact"
            className="py-12 md:p-24 bg-secondary items-center"
        >
            <div className="container mx-auto ">
                <div className="grid gap-6 lg:gap-0 lg:grid-flow-col lg:grid-cols-3 items-center justify-items-center">
                    <div className="w-full grid grid-rows-2 items-center justify-items-center justify-stretch">
                        <h1 className="items-center text-4xl font-bold text-foreground flex gap-3">
                            Let's Talk
                            <Hand size={30} className="animate-wiggle"></Hand>
                        </h1>
                        <Separator className=" basis-full bg-foreground shrink-0 grow" />
                        <div className="flex gap-4">
                            <Link href="https://github.com/dragon-slayer875"
                            aria-label="Github Profile"
                            target="_blank">
                                <Github size={30} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/rudrakshtyagi875/"
                            aria-label="Linkedin Profile"
                            target="_blank">
                                <Linkedin size={30} />
                            </Link>
                        </div>
                    </div>
                    <Separator
                        orientation="vertical"
                        className=" h-full flex-1 bg-primary "
                    />
                    <div className="w-full">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Contact;
