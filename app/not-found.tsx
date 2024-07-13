import Navbar from "@/components/Navbar";

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
            404
        </main>
    );
}
