import type { Metadata } from "next";
import { Inter, Roboto, Libre_Franklin, Arimo } from "next/font/google";
import "../globals.css";
import Script from "next/script";

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
    title: "Location de Vélos en Loire - Découvrez la Vallée de la Loire à Vélo",
    description:
        "Profitez d'une expérience unique avec nos locations de vélos sur la Loire. Parfait pour explorer les châteaux et les paysages époustouflants de la Vallée de la Loire. Idéal pour les familles, groupes, et cyclistes solo.",
    keywords:
        "location de vélos Loire, vélo Loire, location vélo Vallée de la Loire, tourisme Loire, vélo tourisme, balades à vélo, cyclisme en Loire, location de bicyclette Loire",
    authors: [{ name: "Maël Mayon", url: "https://github.com/Baldrani" }],
    viewport: "width=device-width, initial-scale=1.0",
    robots: "index, follow",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={`${roboto.className} ${libre_franklin.className} ${inter.className} ${arimo.className}`}>{children}</body>
            <Script defer src="https://analytics.eu.umami.is/script.js" data-website-id="77e3aaa7-51e9-4f15-9738-42b34069b9bc" />
        </html>
    );
}
