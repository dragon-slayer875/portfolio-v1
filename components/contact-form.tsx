"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ButtonOpStatus } from "@/components/ui/button-op-status";
import sendContactForm from "@/lib/email-service";

const formSchema = z.object({
    from_name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    reply_to: z.string().email({
        message: "Please enter a valid email.",
    }),
    message: z.string().min(1, {
        message: "Message must be at least 1 character.",
    }),
});

export function ContactForm() {
    const [status, setStatus] = useState("idle");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            from_name: "",
            reply_to: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setStatus("loading");
        
        await sendContactForm(values)
            .then((res) => {
                if (res === 200) {
                    setStatus("success");
                } else {
                    setStatus("error");
                }
            })
            .catch((err) => {
                setStatus(err);
            })
            .finally(() => {
                setTimeout(() => {
                    setStatus("idle");
                    form.resetField("message")
                }, 2000);
            });
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="from_name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-2xl">Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Name" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="reply_to"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-2xl">Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="yourmail@example.com"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem className="">
                            <FormLabel className="text-2xl">Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    className="resize-none"
                                    rows={6}
                                    placeholder="Hello, I'd like to chat!"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <ButtonOpStatus status={status} />
            </form>
        </Form>
    );
}
