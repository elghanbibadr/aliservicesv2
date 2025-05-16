/* eslint-disable @typescript-eslint/no-explicit-any */
import { addEmail } from "@/app/actions/actions";
import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend('re_JuEDxF82_F1ZXaqoMYMotQ1WKiwjqt3ig');

export async function POST(req: NextRequest) {
  try {
    const { fullName, phone, message, businessType, email } = await req.json();

    // ✅ 1. Send notification email to Alie Services
    const res1=await resend.emails.send({
      from: "Alie Services <contact@alieservices.com>",
      to: ["contact@alieservices.com"],
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Business Type:</strong> ${businessType}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr>
        <p>📌 <strong>Action Required:</strong> Please respond to the inquiry as soon as possible.</p>
      `,
    });

    console.log("data1",res1)

    // ✅ 2. Send auto-response email to the user
  const res2=  await resend.emails.send({
      from: "Alie Services <contact@alieservices.com>",
      to: [email],
      subject: "Thank You for Reaching Out to Alie Services!",
      html: `
        <p>Dear ${fullName.split(" ")[0]},</p>
        <p>Thank you for contacting Alie Services! We’ve received your inquiry and will get back to you within 24 hours (Monday–Friday).</p>
        <p>If your request is urgent, feel free to book a consultation using the link below:</p>
        <p>📅 <a href="https://calendly.com/alieservices/free-consultation">Schedule a Consultation</a></p>
        <p>We look forward to assisting you.</p>
        <br>
        <p>Best regards,</p>
        <p><strong>Kevin Francis</strong></p>
        <p>Alie Services Team</p>
        <p>📧 contact@alieservices.com</p>
      `,
    });



    await addEmail({id:'', userName:fullName, phone, message, businessType, email })


    if(res1.data?.id && res2.data?.id){
      return NextResponse.json({ success: true });
    }else{
        return NextResponse.json({ success: false });
    }
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}