"use client";

import Link from "next/link";
import { FC } from "react";
import LangSwitcher from "./LangSwitcher";
import Container from "./ui/container";
import { Button } from "./ui/button";

type TNavSection = {
    title: string;
    cta_button_text: string;
};

const Navbar: FC<{ data: TNavSection }> = ({ data }) => {
    const { title, cta_button_text } = data;

    return (
        <header className="sm:flex sm:justify-between py-3 px-4 border-b">
            <Container>
                <div className="relative px-4 sm:px6 lg:px-8 flex h-16 items-center justify-between w-full">
                    <div className="flex items-center">
                        <Link href="/" className="ml-4 lg:ml-0">
                            <h1 className="text-xl">{title}</h1>
                        </Link>
                    </div>
                    <div className="flex space-x-3">
                        <Button>{cta_button_text}</Button>
                        <LangSwitcher />
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Navbar;
