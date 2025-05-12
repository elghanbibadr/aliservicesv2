/* eslint-disable @typescript-eslint/no-explicit-any */
import { addEmail } from "@/app/actions/actions";
import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";

// Consider moving this to an environment variable for security
const resendApiKey = "re_JuEDxF82_F1ZXaqoMYMotQ1WKiwjqt3ig";
if (!resendApiKey) {
  console.error("FATAL: RESEND_API_KEY environment variable not set.");
  // Optionally throw an error or handle appropriately
}
const resend = new Resend(resendApiKey);

export async function POST(req: NextRequest) {
  let requestBody: any; // To store the parsed body for logging

  try {
    requestBody = await req.json();
    console.log("Received Request Body:", JSON.stringify(requestBody, null, 2)); // <<< Log entire incoming body

    const { fullName, phone, message, businessType, email } = requestBody;

    // --- Data Validation & Logging (Essential) ---
    console.log("Extracted Variables:");
    console.log("  fullName:", fullName, `(Type: ${typeof fullName})`);
    console.log("  phone:", phone, `(Type: ${typeof phone})`);
    console.log("  message:", message, `(Type: ${typeof message})`);
    console.log("  businessType:", businessType, `(Type: ${typeof businessType})`);
    console.log("  email:", email, `(Type: ${typeof email})`);

    // Basic Validation Checks
    if (!email || typeof email !== 'string' || !email.includes('@')) {
        console.error("Validation Failed: Invalid 'email' field.");
        return NextResponse.json({ success: false, error: "Invalid email address provided." }, { status: 400 });
    }
    if (!fullName || typeof fullName !== 'string') {
        console.error("Validation Failed: Invalid 'fullName' field.");
        return NextResponse.json({ success: false, error: "Invalid full name provided." }, { status: 400 });
    }
    // Add more checks for other fields if necessary (e.g., ensure they are strings)


    // --- Prepare Payloads (Log these too!) ---

    // ✅ 1. Notification Email Payload
    const notificationPayload = {
      from: "Alie Services <contact@alieservices.com>",
      to: ["contact@alieservices.com"], // Assuming this email is valid and working
      subject: `New Contact Form Submission from ${fullName || 'Unknown Sender'}`, // Add fallback
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName || 'N/A'}</p>
        <p><strong>Email:</strong> ${email || 'N/A'}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Business Type:</strong> ${businessType || 'N/A'}</p>
        <p><strong>Message:</strong> ${message || 'N/A'}</p>
        <hr>
        <p>📌 <strong>Action Required:</strong> Please respond to the inquiry as soon as possible.</p>
      `,
      // Add Plain Text Version (Good Practice)
      text: `New Contact Form Submission\nName: ${fullName || 'N/A'}\nEmail: ${email || 'N/A'}\nPhone: ${phone || 'N/A'}\nBusiness Type: ${businessType || 'N/A'}\nMessage: ${message || 'N/A'}\n\nAction Required: Please respond.`,
    };
    console.log("Sending Notification Payload:", JSON.stringify(notificationPayload, null, 2));
    const res1 = await resend.emails.send(notificationPayload);
    console.log("Resend Notification Result (res1):", JSON.stringify(res1, null, 2));


    // ✅ 2. Auto-Response Email Payload
    const recipientName = typeof fullName === 'string' ? fullName.split(" ")[0] : 'Valued Customer'; // Safer name extraction
    const autoResponsePayload = {
      from: "Alie Services <contact@alieservices.com>",
      to: [email], // Use the validated email
      subject: "Thank You for Reaching Out to Alie Services!",
      html: `
        <p>Dear ${recipientName},</p>
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
      // Add Plain Text Version
      text: `Dear ${recipientName},\n\nThank you for contacting Alie Services! We’ve received your inquiry and will get back to you within 24 hours (Monday–Friday).\n\nIf your request is urgent, feel free to book a consultation: https://calendly.com/alieservices/free-consultation\n\nWe look forward to assisting you.\n\nBest regards,\nKevin Francis\nAlie Services Team\ncontact@alieservices.com`,
    };
    console.log("Sending Auto-Response Payload:", JSON.stringify(autoResponsePayload, null, 2));
    const res2 = await resend.emails.send(autoResponsePayload);
    console.log("Resend Auto-Response Result (res2):", JSON.stringify(res2, null, 2));


    // --- Database Operation ---
    console.log("Attempting to add email to database...");
    // Ensure addEmail doesn't throw unhandled errors
    const dbResult = await addEmail({
      // id: '', // Assuming your addEmail function handles ID generation or doesn't strictly need it here
      userName: fullName || '', // Pass empty string if null/undefined
      phone: phone || '',
      message: message || '',
      businessType: businessType || '',
      email: email, // Already validated
    });
    console.log("Database Add Result (dbResult):", dbResult);


    // --- Success Response ---
    return NextResponse.json({ success: true, notificationId: res1.data?.id, autoResponseId: res2.data?.id });

  } catch (error: any) {
    // --- Enhanced Error Logging ---
    console.error("\n--- ERROR IN /api/contact ROUTE ---");
    console.error("Timestamp:", new Date().toISOString());
    if (requestBody) {
        console.error("Request Body at time of error:", JSON.stringify(requestBody, null, 2));
    } else {
        console.error("Request body could not be parsed or was empty.");
    }

    // Check if it's a Resend specific error structure
    if (error.name && error.message && error.statusCode) {
        console.error("Resend API Error Details:");
        console.error("  Status Code:", error.statusCode);
        console.error("  Name:", error.name);       // e.g., 'validation_error'
        console.error("  Message:", error.message);
    } else {
         // Log generic error
         console.error("Generic Error Caught:");
         console.error("  Message:", error.message);
         console.error("  Stack:", error.stack); // Log stack trace for non-Resend errors
    }
    console.error("Full Error Object:", JSON.stringify(error, null, 2)); // Log the whole thing regardless
    console.error("--- END ERROR --- \n");

    return NextResponse.json(
        {
            success: false,
            error: error.message || 'An unexpected error occurred.',
            error_name: error.name, // Send back the error name if available
            details: "Check server logs for more information." // Don't expose full error object to client
        },
        { status: error.statusCode || 500 } // Use Resend status code or default to 500
    );
  }
}