import { usePathname } from "next/navigation";

const useGetLocale = () => {
    const pathname = usePathname();

    process.env.NEXT_PUBLIC_LOCALES?.split(",").map(locale => {
        if (pathname === `/${locale}`) return locale;
    });

    return process.env.NEXT_PUBLIC_DEFAULT_LOCALE;
};

export default useGetLocale;
