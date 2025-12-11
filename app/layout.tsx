import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import StyledJsxRegistry from "./registry";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "AI Caregiver",
    description: "Assistente virtuale per anziani e caregiver",
    icons: {
        icon: "/logo.svg",
        shortcut: "/logo.svg",
        apple: "/logo.svg",
    },
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="it">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                style={{ flex: 1 }}
            >
                <StyledJsxRegistry>
                    <GluestackUIProvider mode="light">
                        <div className="h-screen w-screen overflow-hidden overflow-y-scroll">
                            {children}
                        </div>
                    </GluestackUIProvider>
                </StyledJsxRegistry>
            </body>
        </html>
    );
}
