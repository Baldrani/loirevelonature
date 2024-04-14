import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const Testimonials: React.FC<{ data: any }> = ({ data }) => {
    const { title, testimonial_cards } = data;
    return (
        <section className="px-52 bg-zinc-950 pt-24 pb-32">
            <h2 className="text-4xl font-bold text-center mb-20">{title}</h2>
            <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-2">
                {testimonial_cards.map((t: any) => (
                    <TestimonialCard data={t} key={t.name} />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;

const TestimonialCard: React.FC<{ data: any }> = ({ data }) => {
    const { name, comment, date_of_publication } = data;
    return (
        <Card>
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{date_of_publication}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{comment}</p>
            </CardContent>
        </Card>
    );
};

const Avatar: React.FC<{ image: string; name: string }> = ({ name, image }) => {
    return (
        <div className="flex items-center mt-3 space-x-3">
            <div className="flex-shrink-0 overflow-hidden rounded-full w-10 h-10">
                <Image src={image} width="100" height="100" alt="Avatar" />
            </div>
            <div>
                <div className="text-lg font-medium">{name}</div>
            </div>
        </div>
    );
};
