import Link from "next/link";
import { Button } from "./ui/button";

const Services: React.FC<{ data: any }> = ({ data }) => {
    const { title, service_cards } = data;

    return (
        <section className="pb-32 pt-24">
            <h2 className="text-4xl font-bold text-center mb-20">{title}</h2>
            <div className="py-4 px-4 mx-auto max-w-screen-xl">
                <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0 place-items-center items-stretch">
                    {service_cards.map((s: any) => (
                        <ServiceCard data={s} key={s.title} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ServiceCard: React.FC<{ data: any }> = ({ data }) => {
    const { title, subtitle, description, cta_button_text, cta_button_link } = data;

    return (
        <Card className="sm:col-span-2">
            <CardHeader className="pb-3">
                <CardTitle>{title}</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">{subtitle}</CardDescription>
            </CardHeader>
            <CardContent>{description}</CardContent>
            <CardFooter>
                {cta_button_link && (
                    <Link className="mr-2 text-5xl font-extrabold" href={cta_button_link}>
                        <Button className="flex justify-center my-8">{cta_button_text}</Button>
                    </Link>
                )}
            </CardFooter>
        </Card>
    );
};
