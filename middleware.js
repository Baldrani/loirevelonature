import { NextResponse } from "next/server";

const locales = process.env.NEXT_PUBLIC_LOCALES?.split(",");

const DEFAULT_LOCALE = "fr";

function getLocale() {
    return DEFAULT_LOCALE;
}

export function middleware(request) {
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some(locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

    if (pathnameHasLocale) return;

    // Redirect if there is no locale
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;

    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        "/((?!api|_next/static|_next/image|favicon.ico|.*\\.aac|.*\\.webp).*)",
        // Optional: only run on root (/) URL
        // '/'
    ],
};
