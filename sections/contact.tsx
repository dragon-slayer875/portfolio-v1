import React, { forwardRef } from "react";
import { ContactForm } from "@/components/contact-form";
import { Hand, HandIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Contact = forwardRef(function (props, ref) {
    return (
        <section>
            <div
                ref={ref as React.RefObject<HTMLDivElement> | null}
                id="Contact"
                className="bg-secondary p-10 flex flex-col lg:flex-row gap-4 items-center justify-center"
            >
                <h1 className="text-4xl font-bold text-foreground flex items-center gap-3">
                    Let's Talk
                    <Hand size={30}></Hand>
                </h1>
                <Separator className="my-4 max-w-[80%] bg-primary" />
                <div className="w-full m-10">
                <ContactForm />
                </div>
            </div>
        </section>
    );
});

export default Contact;
