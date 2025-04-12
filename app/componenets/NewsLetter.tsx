// components/Newsletter.tsx
'use client'; // Needed for useState

import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Implement your newsletter subscription logic here
    // e.g., send the email to your backend API
    console.log('Subscribing email:', email);
    // Optionally clear the input after submission or show a success message
    // setEmail('');
    alert(`Thank you for subscribing with ${email}! (Implementation needed)`);
  };

  return (
    <section className="bg-blue-50 py-16 sm:py-20 md:pb-32"> {/* Slightly lighter blue bg */}
      <div className="container mx-auto max-w-xl px-4 sm:px-6 lg:px-8"> {/* Constrained width */}
        <div className="text-center">
          {/* Title */}
          <h2 >
            Subscribe to our newsletter
          </h2>

          {/* Description */}
          <p>
            We recommend you subscribe to our newsletter, drop your email below to get daily updates about us.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 sm:mt-10">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {/* Email Input */}
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none w-full sm:flex-grow px-5 py-3 border border-gray-300 bg-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out text-base" // Added text-base
                placeholder="Enter your email address"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full sm:w-auto flex-shrink-0 inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;