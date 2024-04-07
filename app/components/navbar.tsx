import { FC } from "react";

type TNavSection = {
    title: string;
    cta_button_text: string;
};

const Navbar: FC<{ nav_sections: TNavSection[] }> = ({ nav_sections }) => {
    const { title, cta_button_text } = nav_sections[0];
    return (
        <nav className="flex">
            <h1>{title}</h1>
            <button className="rounded-lg bg-blue-100">{cta_button_text}</button>
        </nav>
    );
};

export default Navbar;
