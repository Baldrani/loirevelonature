import Link from "next/link";
import { PropsWithChildren } from "react";

const FooterInformations: React.FC = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800 py-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-[2fr_1fr] items-start gap-4 px-4 md:px-6">
                <div className="flex flex-col gap-2">
                    <Link className="font-semibold underline underline-offset-2" href="#">
                        Loire Vélo Nature
                    </Link>
                    <div className="text-sm text-gray-500 dark:text-gray-400">© 2024 Loire Vélo Nature. All rights reserved.</div>

                    <div className="flex items-center gap-0.5 text-sm">
                        <p className="text-sm">
                            SARL ARAWAK production - 3 avenue du 11 novembre - 37130 BRÉHÉMONT - APE : 7721Z - 441 325 008 000 23 - RCS Tours - N° Etablissement APS : 03704ET0064
                        </p>
                    </div>
                    <div className="flex items-center gap-0.5 text-sm">
                        {/* @ts-ignore */}
                        <MailIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <a href="mailto:contact@loirevelonature.com" className="text-sm">
                            contact@loirevelonature.com
                        </a>
                    </div>
                    <div className="flex items-center gap-0.5 text-sm">
                        {/* @ts-ignore */}
                        <PhoneIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <p className="text-sm">
                            <a href="tel:+33503892314">+33 (0)6 03 89 23 14</a>
                        </p>
                    </div>
                    <div className="flex items-center gap-0.5 text-sm">
                        {/* @ts-ignore */}
                        <LocateIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <p className="text-sm">
                            <a href="https://maps.app.goo.gl/oVJ8Shk1Utmd3w6T8">3 avenue du 11 Novembre, 37130 BREHEMONT</a>
                        </p>
                    </div>
                </div>
                <nav className="grid gap-4 md:justify-self-end lg:grid-cols-[repeat(4)] text-sm">
                    {/* <div className="flex flex-col gap-1">
                        <Link className="underline underline-offset-2" href="#">
                            Home
                        </Link>
                        <Link className="underline underline-offset-2" href="#">
                            Bikes
                        </Link>
                        <Link className="underline underline-offset-2" href="#">
                            Pricing
                        </Link>
                        <Link className="underline underline-offset-2" href="#">
                            Contact us
                        </Link>
                    </div> */}
                    <div className="flex flex-col gap-1">
                        <Link className="underline underline-offset-2" href="#">
                            Terms & Conditions
                        </Link>
                        <Link className="underline underline-offset-2" href="#">
                            Privacy Policy
                        </Link>
                    </div>
                    <div className="flex flex-col gap-1">
                        <Link className="underline underline-offset-2" href="#">
                            About us
                        </Link>
                        <Link className="underline underline-offset-2" href="#">
                            FAQ
                        </Link>
                    </div>
                    <div className="w-10">
                        <a href="https://www.facebook.com/profile.php?id=100063615400006">
                            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7208)"></circle>{" "}
                                    <path
                                        d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z"
                                        fill="white"
                                    ></path>{" "}
                                    <defs>
                                        {" "}
                                        <linearGradient id="paint0_linear_87_7208" x1="16" y1="2" x2="16" y2="29.917" gradientUnits="userSpaceOnUse">
                                            {" "}
                                            <stop stop-color="#18ACFE"></stop> <stop offset="1" stop-color="#0163E0"></stop>{" "}
                                        </linearGradient>{" "}
                                    </defs>{" "}
                                </g>
                            </svg>
                        </a>
                    </div>
                </nav>
            </div>
            <p className="text-center text-xs text-gray-500">
                Made with 🩷 by <Link href="http://www.maelmayon.fr">Maël Mayon</Link>
            </p>
        </footer>
    );
};

const LocateIcon: React.FC<PropsWithChildren> = props => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="2" x2="5" y1="12" y2="12" />
            <line x1="19" x2="22" y1="12" y2="12" />
            <line x1="12" x2="12" y1="2" y2="5" />
            <line x1="12" x2="12" y1="19" y2="22" />
            <circle cx="12" cy="12" r="7" />
        </svg>
    );
};

const MailIcon: React.FC<PropsWithChildren> = props => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    );
};

const PhoneIcon: React.FC<PropsWithChildren> = props => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
};

export default FooterInformations;
