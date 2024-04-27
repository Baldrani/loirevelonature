"use client";

import Link from "next/link";
import { Button } from "./ui/button";

const Services: React.FC<{ data: any }> = ({ data }) => {
    const { title, service_cards } = data;

    return (
        <section className="pb-32 pt-24">
            <h2 className="text-4xl font-bold text-center mb-20">{title}</h2>
            {/* <div className="w-full bg-gray-100 dark:bg-gray-900 py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {service_cards.map((s: any) => (
                            <ParallaxCard data={s} key={s.title} />
                        ))}{" "}
                    </div>
                </div>
            </div> */}
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

import { Icon } from "@iconify/react";

const ServiceCard: React.FC<{ data: any }> = ({ data }) => {
    const { title, subtitle, description, cta_button_text, cta_button_link, icon } = data;

    return (
        <Card className="sm:col-span-2">
            <CardHeader className="pb-3">
                <Icon icon={icon?.icon} inline width={24} />
                <CardTitle>{title}</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">{subtitle}</CardDescription>
            </CardHeader>
            <CardContent>{description}</CardContent>
            <CardFooter>
                {cta_button_link && cta_button_text && (
                    <Link className="mr-2 text-5xl font-extrabold" href={cta_button_link}>
                        <Button className="flex justify-center my-8">{cta_button_text}</Button>
                    </Link>
                )}
            </CardFooter>
        </Card>
    );
};
