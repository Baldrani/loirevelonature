import Image from "next/image";
import Container from "./ui/container";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

type THeroSection = {
    title: string;
    description: string;
    picture: {
        filename: string;
    };
    cta_1_button_text: string;
    cta_1_button_link: {
        url: string;
    };
    cta_2_button_text: string;
    cta_2_button_link: {
        url: string;
    };
};

const Hero: React.FC<{ data: THeroSection; loire_map_section: any }> = ({ data, loire_map_section }) => {
    const { title, description, cta_1_button_text, cta_1_button_link, cta_2_button_text, cta_2_button_link, picture } = data;

    return (
        <div>
            <div className="bg-no-repeat bg-cover bg-center bg-fixed bg-parallax-50% h-[50vh] flex items-center" style={{ backgroundImage: `url(${picture.filename})` }}>
                <Container>
                    <div className="flex items-center w-full lg:px-10 justify-center">
                        <div className="mb-8 pr-3">
                            <h1 className="text-center text-4xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight text-white mb-4">
                                {title}
                            </h1>
                            <div className="flex flex-col justify-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row w-10/12 m-auto">
                                <Link target="_blank" href={cta_1_button_link.url} className={`${buttonVariants({ variant: "blue", size: "lg" })} flex-1`}>
                                    {cta_1_button_text}
                                </Link>
                                <Link
                                    target="_blank"
                                    href={`/${cta_2_button_link.url}`}
                                    className={`${buttonVariants({ variant: "outline", size: "lg" })} flex-1 bg-white/10 text-white`}
                                >
                                    {cta_2_button_text}
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <p className="py-5 text-center leading-normal lg:text-lg text-black/70">{description}</p>
            </Container>
            <LoireMap data={loire_map_section} />
        </div>
    );
};

const LoireMap: React.FC<{ data: any }> = ({ data }) => {
    const { title, subtitle, image } = data;

    return (
        <div className="relative flex flex-col items-center">
            <h3 className="my-4 text-2xl">{title}</h3>
            <Image src={image?.filename} alt={image?.alt} width={0} height={0} sizes="100vw" style={{ width: "90%", height: "150px", objectFit: "contain" }} />
            <p className="my-3 text-gray-500">{subtitle}</p>
        </div>
    );
};

export default Hero;
