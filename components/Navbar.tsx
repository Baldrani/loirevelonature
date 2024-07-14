"use client";

import Link from "next/link";
import { FC } from "react";
import LangSwitcher from "./LangSwitcher";
import Container from "./ui/container";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

type TNavSection = {
    title: string;
    cta_button_text: string;
    cta_button_link: {
        url: string;
    };
};

const Navbar: FC<{ data: TNavSection }> = ({ data }) => {
    const { title, cta_button_text, cta_button_link } = data;

    return (
        <header className="sm:flex sm:justify-between py-3 px-4 border-b">
            <Container>
                <div className="relative px-4 sm:px6 lg:px-8 flex h-16 items-center justify-between w-full">
                    <div className="flex items-center">
                        <Link href="/" className="ml-4 lg:ml-0 flex items-center">
                            <Image src="/logo.webp" width="70" height="70" alt={`Logo ${title}`} />
                            <p className="text-xl font-">{title}</p>
                        </Link>
                    </div>
                    <div className="flex space-x-3">
                        <Link href={cta_button_link.url} target="_blank" className={buttonVariants({ variant: "outline" })}>
                            {cta_button_text}
                        </Link>
                        <LangSwitcher />
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Navbar;
