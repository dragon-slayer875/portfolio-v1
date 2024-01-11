import React, { forwardRef } from "react";
import { ContactForm } from "@/components/contact-form";
import { Hand, HandIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Contact = forwardRef(function (props, ref) {
    return (
        <section
            ref={ref as React.RefObject<HTMLDivElement> | null}
            id="Contact"
            className="py-12 md:p-24 bg-secondary items-center"
        >
            <div className="container mx-auto ">
                <div className="grid lg:grid-flow-col lg:grid-cols-3 items-center justify-items-center gap-4">
                    <h1 className="items-center text-4xl font-bold text-foreground flex gap-3">
                        Let's Talk
                        <Hand size={30}></Hand>
                    </h1>
                    <Separator
                    orientation="vertical"
                       className="mx-4 h-full flex-1 bg-primary"
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
