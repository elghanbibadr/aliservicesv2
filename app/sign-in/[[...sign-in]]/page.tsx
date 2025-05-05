import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center h-screen items-center">
      <SignIn
      
        redirectUrl="/admin/emails" // Redirect after successful sign-in
        appearance={{
          elements: {
            headerTitle: {
              fontSize: "18px",
            },
            formField__emailAddress: {
              font: 18, // Increase email label font size
            },
            formFieldInput: {
              fontSize: "10px", // Increase input text size
              height: "80px", // Increase input height
              padding: "6px", // Adjust padding for better spacing
            },
            card: {
              padding: "24px",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            },
            formButtonPrimary: {
              fontSize: "16px",
              border: "none",
              textTransform: "none",
              backgroundColor: "#0056B3",
            },
          },
        }}
      />
    </div>
  );
}