import { Button } from "@/components/ui/button";
import scrollTo from "@/lib/scroll-to";
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
};

type MobileNavProps = {
    links: any[];
};

export const MobileNav = (props: MobileNavProps) => {
    return (
        <Sheet key={"right"}>
            <SheetTrigger asChild>
                <Button aria-label="Navigation Menu" className="p-2" variant={"ghost"}>
                    <div className="flex flex-col gap-1 justify-center items-center">
                        <GenericHamburgerLine />
                        <GenericHamburgerLine />
                        <GenericHamburgerLine />
                    </div>
                </Button>
            </SheetTrigger>
            <SheetContent
                className="flex flex-col justify-between"
                side={"right"}
            >
                <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col items-end tall:h-full tall:py-20 tall:justify-between">
                    {props.links.map((link, index) => (
                        <Button
                        variant={"ghost"}
                            key={index}
                            onClick={() => scrollTo(link.ref)}
                            className="font-bold p-5 text-4xl text-primary"
                        >
                            {link.name}
                        </Button>
                    ))}
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button className="w-full">Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};
