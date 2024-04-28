import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const getLandingPage = async (lang: string) => {
    const version = process.env.SB_DATA_VERSION;
    const token = process.env.SB_PREVIEW_TOKEN;
    const url = `https://api.storyblok.com/v2/cdn/stories/landing-page?version=${version}&token=${token}&language=${lang}`;

    let req = await fetch(url, { next: { revalidate: 100 } });
    const storyData = await req.json();

    const { nav_section, hero_section, services_section, testimonials_section, footer_section } = storyData.story.content;

    return {
        nav_section: nav_section[0],
        hero_section: hero_section[0],
        loire_map_section: hero_section[1],
        services_section: services_section[0],
        testimonials_section: testimonials_section[0],
        footer_section: footer_section[0],
    };
};

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
    const { nav_section, hero_section, services_section, testimonials_section, footer_section, loire_map_section } = await getLandingPage(lang);

    return (
        <main>
            <Navbar data={nav_section} />
            <Hero data={hero_section} loire_map_section={loire_map_section} />
            <Services data={services_section} />
            <Testimonials data={testimonials_section} />
            <Footer data={footer_section} />
        </main>
    );
}
