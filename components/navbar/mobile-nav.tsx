
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const GenericHamburgerLine = () => {
    return <div className=" h-1 w-7 rounded bg-primary" />;
}

type MobileNavProps = {
    links: any[];
};

export const MobileNav = (props: MobileNavProps) => {
    return (
        <Sheet key={"right"}>
            <SheetTrigger asChild>
                <Button className="p-2" variant={"ghost"}>
                    <div className="flex flex-col gap-1 justify-center items-center">
                    <GenericHamburgerLine />
                    <GenericHamburgerLine />
                    <GenericHamburgerLine />
                    </div>
                </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-between" side={"right"}>
                <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col items-end tall:h-full tall:py-20 tall:justify-between">
                    {props.links.map((link) => (
                        <Link key={link.id} href={link.link} className="font-bold p-5 text-4xl">
                            {link.name}
                        </Link>
                    ))}
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button>Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
