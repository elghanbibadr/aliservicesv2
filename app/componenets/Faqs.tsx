// components/Faqs.tsx
'use client'; // Add this directive for useState

import React, { useState } from 'react';
import Link from 'next/link';
import { MinusIcon, PlusIcon } from 'lucide-react';



const Faqs = ({faqsData}:{faqsData:any}) => {
  // State to track the currently open FAQ item index (null means none are open)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Function to toggle the accordion item
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"> {/* Centered and constrained width */}

        {/* Header Text */}
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            FAQs
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Find answers to commonly asked questions about Alie Services and its services.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-12">
          {faqsData.map((item:any, index:number) => (
            <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Question Button */}
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full px-5 py-4 text-left text-gray-800 hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span className="font-medium">{item.question}</span>
                <span>
                  {activeIndex === index ? (
                    <MinusIcon className="h-6 w-6 text-blue-600" />
                  ) : (
                    <PlusIcon className="h-6 w-6 text-gray-500" />
                  )}
                </span>
              </button>

              {/* Answer Panel (conditionally rendered height) */}
              <div
                id={`faq-answer-${item.id}`}
                role="region"
                aria-labelledby={`faq-question-${item.id}`} // You might want to add an id to the question span/button
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                <div className="px-5 pb-4 pt-1"> {/* Added pt-1 for slight space */}
                  <p className="text-gray-600 text-base leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? CTA */}
        <div className="bg-blue-100 text-center p-6 sm:p-8 rounded-lg mb-10">
          <h3 className="text-xl font-semibold text-blue-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-blue-800">
            Contact us for more information.
          </p>
        </div>

        {/* Bottom Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/learn-more" passHref>
               <button className="btn-transparent">
                 Learn More
               </button>
            </Link>
            <Link href="/contact" passHref>
              <button className="btn-blue">
                Contact Us
              </button>
           </Link>
        </div>

      </div>
    </section>
  );
};

export default Faqs;