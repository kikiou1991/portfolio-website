import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_CoUHpMeE_9FSFPGxEBWqJd7eCpUZ73M6U");
const fromEmail = "gadorjani@windowslive.com";

export async function POST(req, res) {
    const { email, subject, message } = await req.json();
    console.log(email, subject, message, "hello")
    try {
        const data = await resend.emails.send({
            from: "Gabor <szabogergo.ev@gadorjani.co.uk>",
            to: [fromEmail, email],
            subject: subject,
            text: message,


        });
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}