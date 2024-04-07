import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react";
import Image from "next/image";
import Navbar from "./components/navbar";

const getLandingPage = async () => {
    const version = process.env.SB_DATA_VERSION;
    const token = process.env.SB_TOKEN;
    const url = `https://api.storyblok.com/v2/cdn/stories/landing-page?version=${version}&token=${token}`;

    let req = await fetch(url, { cache: "no-store" });
    const storyData = await req.json();
    console.log(storyData);

    return { data: storyData.story.content };
};

export default async function Home() {
    const {
        data: { nav_section },
    } = await getLandingPage();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Navbar nav_sections={nav_section} />
        </main>
    );
}
