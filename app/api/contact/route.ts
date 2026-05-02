import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "anasyusuf1@outlook.dk",
      subject: `Ny besked fra ${name}`,
      text: `Navn: ${name}\nEmail: ${email}\n\nBesked:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Noget gik galt" }, { status: 500 });
  }
}