"use client";

import Link from "next/link";
import { Button } from "./ui/button";

const Services: React.FC<{ data: any }> = ({ data }) => {
    const { title, service_cards } = data;

    return (
        <section className="pb-32 pt-24">
            <h2 className="text-4xl font-bold text-center mb-20">{title}</h2>
            <div className="py-4 px-4 mx-auto max-w-screen-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 xl:gap-10">
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
        <Card className="flex flex-col justify-between">
            <CardHeader className="pb-3 flex flex-row items-center space-x-3">
                <Icon icon={icon?.icon} inline width={32} />
                <div>
                    <CardTitle className="mb-1">{title}</CardTitle>
                    <CardDescription className="max-w-lg text-balance">{subtitle}</CardDescription>
                </div>
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
