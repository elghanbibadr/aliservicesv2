import React from "react";
import Map from "../componenets/Map";
import ContactForm from "../componenets/ContactForm";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Container from "../componenets/ui/Container";

const page = () => {
  return (
    <Container>
      <div className="md:grid md:grid-cols-3">
      <div className="p-4">
      {/* Heading */}
      <h3>
        Get In Touch With Alie Services Consultation Experts
      </h3>

      {/* Paragraph */}
      <p className="small-desc">
        Ready to transform your business? Get in touch with our team of experts and let&apos;s discuss how we can help you achieve your goals.
      </p>

      {/* Information Subheading */}
      <h6 className="text-lg text-heading mb-4 font-medium">
        Our information
      </h6>

      {/* Contact Details List */}
      <div className="space-y-5"> {/* Adjust spacing between items */}

        {/* Addresses Row */}
        <div className="flex items-start space-x-3">
          <MapPinIcon
            className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" // Adjusted color and top margin
            aria-hidden="true"
          />
          {/* Container for both addresses - using grid for potential side-by-side on wider screens */}
          <div className="">
             {/* Address 1 */}
             <div className="">
                <span className="block text-sm">8 The Green #8783,</span>
                <span  className="block text-sm">Dover, Delaware, 19901</span>
                <span  className="block text-sm">USA</span>
             </div>
             {/* Address 2 */}
             <div>
                <span className="block text-sm">77 City Centre Drive,</span>
                <span className="block text-sm">East Tower, Suite 501</span>
                <span className="block text-sm">Mississauga, Ontario,</span>
                <span className="block text-sm">L5B1M5, Canada</span>
             </div>
          </div>
        </div>

        {/* Phone Row */}
        <div className="flex items-center space-x-3"> {/* items-center is fine for single line */}
          <PhoneIcon
            className="h-6 w-6 text-blue-600 flex-shrink-0"
            aria-hidden="true"
          />
          <span className="text-sm text-gray-600">
            888-688-1816 / 302-573-9071
          </span>
        </div>

        {/* Email Row */}
        <div className="flex items-center space-x-3">
          <EnvelopeIcon
            className="h-6 w-6 text-blue-600 flex-shrink-0"
            aria-hidden="true"
          />
          <a
            href="mailto:info@alieservices.com"
            className="text-sm text-gray-600 hover:text-blue-700 hover:underline"
          >
            info@alieservices.com
          </a>
        </div>

      </div>
    </div>
        <div className="col-span-2">
            <ContactForm />
        </div>
      </div>
      <Map />
    </Container>
  );
};

export default page;
