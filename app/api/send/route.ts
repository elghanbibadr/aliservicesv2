// File: app/api/your-route-name/route.ts (or wherever your Resend test POST route is)
import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY; // Or directly paste your key for this one test if you suspect env var issues

// Log the API key being used (mask most of it for security in logs)
console.log(
  "Resend Route: Initializing with API Key starting with:",
  apiKey ? apiKey.substring(0, 5) + "..." + apiKey.substring(apiKey.length - 5) : "API KEY NOT FOUND/SET"
);

if (!apiKey) {
  console.error("Resend Route: FATAL - RESEND_API_KEY is not set in the environment.");
  return Response.json({ error: { message: "Server configuration error: RESEND_API_KEY missing." } }, { status: 500 });
}

const resend = new Resend(apiKey);

export async function POST() {
  console.log("Resend Route: POST request received.");
  try {
    console.log("Resend Route: Attempting to send email with 'onboarding@resend.dev' as FROM.");

    const { data, error } = await resend.emails.send({
      from:'contac2t@alieservices.com', // <<< CHANGED BACK TO YOUR CUSTOM DOMAIN
      to: ['delivered@resend.dev'],
      subject: "Test from contact@alieservices.com", // Updated subject
      html: "<strong>This is a test email sent FROM contact@alieservices.com.</strong>", // Updated HTML
    });

    if (error) {
      console.error("Resend Route: resend.emails.send returned an error:", JSON.stringify(error, null, 2));
      return Response.json({ error }, { status: error.statusCode || 500 }); // Use error's statusCode if available
    }

    console.log("Resend Route: resend.emails.send was successful. Data:", JSON.stringify(data, null, 2));
    return Response.json({ data });

  } catch (catchError: any) { // Catch any other unexpected errors
    console.error("Resend Route: CATCH BLOCK triggered. Error:", JSON.stringify(catchError, null, 2));
    return Response.json(
        { error: { message: catchError.message || "An unexpected error occurred in the catch block.", name: catchError.name } },
        { status: 500 }
    );
  }
}