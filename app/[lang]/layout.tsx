import type { Metadata } from "next";
import { Inter, Roboto, Libre_Franklin, Arimo } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

const arimo = Arimo({
    subsets: ["latin"],
    display: "swap",
});

const libre_franklin = Libre_Franklin({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={`${roboto.className} ${libre_franklin.className} ${inter.className} ${arimo.className}`}>{children}</body>
        </html>
    );
}
