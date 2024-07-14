import Navbar from "@/components/Navbar";
import { buttonVariants } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

const getLandingPage = async (lang: string) => {
    const version = process.env.SB_DATA_VERSION;
    const token = process.env.SB_PREVIEW_TOKEN;
    const url = `https://api.storyblok.com/v2/cdn/stories/landing-page?version=${version}&token=${token}&language=${lang}`;

    let req = await fetch(url, { next: { revalidate: 100 } });
    const storyData = await req.json();

    const { nav_section } = storyData.story.content;

    return {
        nav_section: nav_section[0],
    };
};

export default async function Home() {
    const { nav_section } = await getLandingPage("fr");

    return (
        <main>
            <Navbar data={nav_section} />
            <div className="w-full flex flex-col items-center mt-9">
                <Image src="/images/not-found.png" width="70" height="70" alt="404 Image" />
                <Link href="/" className={buttonVariants({ variant: "outline", size: "lg" })}>
                    Retour à l&apos;accueil
                </Link>
            </div>
        </main>
    );
}
