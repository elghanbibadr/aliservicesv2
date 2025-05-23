/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "./ui/Container";
// import contactIllustration from "@/public/contact.svg";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const businessTypes = [
    "Small Business Owner",
    "Startup Founder",
    "Freelancer/Consultant",
    "E-commerce Business",
    "Service-Based Business",
    "Tech/Software Company",
    "Healthcare/Wellness Business",
    "Finance/Accounting Services",
    "Marketing/Creative Agency",
    "Other (for users who don’t find their category)",
    "Restaurants",
    "Logistics",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // setSuccess(null);
    setError(null);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("res", response);
      const result = await response.json();

      console.log("result", result);

      if (result.success) {
        setSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          businessType: "",
          message: "",
        });
      } else {
        setError("Something went wrong. Please try again.");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError("Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 4000); // Hide success message after 4 seconds

      return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }
  }, [success]);
  return (
    <Container>
      <section className="mt-0  md:w-[70%] md:mx-auto ">
        <div className="gap-8 items-center">
          {/* Left Side - Testimonial Image */}

          {/* Right Side - Contact Form */}
          <div className=" text-center">
            <h2>Contact Us</h2>
            <p>Get in touch with Alie Services and its services.</p>
            <form className="space-y-5 mt-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full name*"
                  className="w-full text-xl px-7 py-4 "
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email*"
                  className="w-full px-7 py-4 text-xl "
                  required
                />
              </div>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
                className="w-full px-7 py-4 text-xl "
              />
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className="w-full px-7 py-4 text-xl "
                required
              >
                <option value="">Select Business Type*</option>
                {businessTypes.map((type) => (
                  <option key={type} value={type} className="text-black">
                    {type}
                  </option>
                ))}
              </select>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={4}
                className="w-full px-7 py-4 text-xl "
                required
              ></textarea>
              <button
                type="submit"
                className="btn-blue w-full"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send "}
              </button>
            </form>
            {/* Success/Error Messages */}
            {success && (
              <span className="!text-white h-10 bg-green-400 py-2 text-center  text-sm block  mt-5">
                Message sent successfully! We ll get back to you soon{" "}
              </span>
            )}
            {error && (
              <span className="text-red-400 text-xl block mt-5">
                Something went wrong
              </span>
            )}
          </div>
        </div>
      </section>
    </Container>
  );
}
