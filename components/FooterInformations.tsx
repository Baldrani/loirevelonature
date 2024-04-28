import Link from "next/link";
import { PropsWithChildren } from "react";

const FooterInformations: React.FC = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800 py-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] items-start gap-4 px-4 md:px-6">
                <div className="flex flex-col gap-2">
                    <Link className="font-semibold underline underline-offset-2" href="#">
                        Rent a Bike
                    </Link>
                    <div className="text-sm text-gray-500 dark:text-gray-400">© 2024 Rent a Bike. All rights reserved.</div>
                    <div className="flex items-center gap-0.5 text-sm">
                        <p className="text-sm">SARL Rent a Bike - APE code 1234Z - RCS registration 123 456 789 - Establishment number 1A2B3/C</p>
                    </div>
                    <div className="flex items-center gap-0.5 text-sm">
                        {/* @ts-ignore */}
                        <MailIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <p className="text-sm">info@rentabike.com</p>
                    </div>
                    <div className="flex items-center gap-0.5 text-sm">
                        {/* @ts-ignore */}
                        <PhoneIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <p className="text-sm">+1 (555) 555-5555</p>
                    </div>
                    <div className="flex items-center gap-0.5 text-sm">
                        {/* @ts-ignore */}
                        <LocateIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <p className="text-sm">123 Main St, Anytown USA 12345</p>
                    </div>
                </div>
                <nav className="grid gap-4 md:justify-self-end lg:grid-cols-[repeat(4)] text-sm">
                    <div className="flex flex-col gap-1">
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
                    </div>
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
                            Our team
                        </Link>
                    </div>
                    <div className="flex flex-col gap-1">
                        <Link className="underline underline-offset-2" href="#">
                            FAQ
                        </Link>
                        <Link className="underline underline-offset-2" href="#">
                            How it works
                        </Link>
                    </div>
                    <div className="flex flex-col gap-1">
                        <Link className="underline underline-offset-2" href="#">
                            Contact customer service
                        </Link>
                        <Link className="underline underline-offset-2" href="#">
                            Contact sales
                        </Link>
                    </div>
                </nav>
            </div>
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
