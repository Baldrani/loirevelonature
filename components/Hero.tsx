import Image from "next/image";
import Container from "./ui/container";
import Link from "next/link";

const Hero: React.FC<{ data: any; loire_map_section: any }> = ({ data, loire_map_section }) => {
    const { title, description, cta_button_text, picture } = data;

    return (
        <div>
            <div className="bg-no-repeat bg-cover bg-center bg-fixed bg-parallax-50%" style={{ backgroundImage: `url(${picture.filename})` }}>
                <Container>
                    <div className="flex items-center w-full lg:w-1/2 lg:px-10">
                        <div className="max-w-2xl mb-8 pr-3">
                            <h1 className="text-4xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight text-white">{title}</h1>
                            <p className="py-5 text-xl leading-normal lg:text-xl xl:text-2xl text-gray-300">{description}</p>
                            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                                <Link href="#contact" className="px-7 py-3 text-white text-xl bg-indigo-600 rounded-md">
                                    {cta_button_text}
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <LoireMap data={loire_map_section} />
        </div>
    );
};

const LoireMap: React.FC<{ data: any }> = ({ data }) => {
    const { title, subtitle, image } = data;

    return (
        <div className="relative flex flex-col items-center">
            {/* // SET H3 FONT */}
            <h3 className="my-4">{title}</h3>
            <Image src={image?.filename} alt={image?.alt} width={0} height={0} sizes="100vw" style={{ width: "90%", height: "150px" }} />
            <p className="my-3">{subtitle}</p>
        </div>
    );
};

export default Hero;
