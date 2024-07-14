import { NextResponse } from "next/server";
import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
    const data = await request.json();

    const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
            from: "Acme <onboarding@resend.dev>",
            to: [process.env.EMAIL_TO, "mael.mayon@gmail.com"],
            subject: `Message de Loire Vélo Nature`,
            html: `De : ${data.email}\n\n${data.message}`,
        }),
    });

    if (res.ok) {
        const data = await res.json();
        return NextResponse.json(data);
    } else {
        return NextResponse.error();
    }
}
