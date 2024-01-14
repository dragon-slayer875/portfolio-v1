import type { Metadata } from "next";
import { fontSans } from "./fonts";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
    title: "Rt's Portfolio",
    description: "Portfolio website of Rudraksh Tyagi",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
                <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                disableTransitionOnChange>
                {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
