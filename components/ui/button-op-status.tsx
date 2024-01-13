import { Button } from "./button";
import { Loader2, Send, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function ButtonOpStatus({ status }: { status: string }) {
    return (
        <Button
            type="submit"
            className={cn(
                "w-full text-2xl",
                status === "success"
                    ? "bg-green-600"
                    : status === "error"
                    ? "bg-red-600"
                    : ""
            )}
        >
            {status === "loading" ? (
                <>
                    Sending
                    <Loader2 className="ml-2 animate-spin" size={23} />
                </>
            ) : status === "success" ? (
                <>
                    Sent
                    <Check className="ml-2" size={23} />
                </>
            ) : status === "error" ? (
                "Error!"
            ) : (
                <>
                    Send
                    <Send className="ml-2" size={23} />{" "}
                </>
            )}
        </Button>
    );
}
