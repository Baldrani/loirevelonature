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
                        <p className="text-sm">+33 (0)6 03 89 23 14</p>
                    </div>
                    <div className="flex items-center gap-0.5 text-sm">
                        {/* @ts-ignore */}
                        <LocateIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <p className="text-sm">3 avenue du 11 Novembre, 37130 BREHEMONT</p>
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
                </nav>
            </div>
            <p className="text-center text-xs text-gray-500">
                Made with 🩷 by <Link href="maelmayon.fr">Maël Mayon</Link>
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
