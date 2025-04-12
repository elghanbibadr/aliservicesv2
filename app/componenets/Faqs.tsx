// components/Faqs.tsx
'use client'; // Add this directive for useState

import React, { useState } from 'react';
import Link from 'next/link';
import { MinusIcon, PlusIcon } from 'lucide-react';

// Define the type for a single FAQ item
interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

// Sample FAQ Data - Replace or fetch from your backend/CMS
const faqData: FaqItem[] = [
  {
    id: 1,
    question: 'How can I get started?',
    answer: 'Getting started is easy! Simply contact us through our form or give us a call. We\'ll schedule an initial consultation to understand your needs and discuss how we can help your business grow.',
  },
  {
    id: 2,
    question: 'What are the pricing options?',
    answer: 'We offer flexible pricing options tailored to the scope and complexity of your project. This can range from hourly rates for specific tasks to project-based fees or retainer agreements for ongoing support. We provide detailed quotes after the initial consultation.',
  },
  {
    id: 3,
    question: 'How does Alie Services work?',
    answer: 'Alie Services works closely with you to understand your business goals and challenges. We conduct thorough analysis, develop customized strategies, and provide actionable recommendations. We believe in a collaborative approach, ensuring you\'re involved throughout the process.',
  },
  {
    id: 4,
    question: 'Is Alie Services secure?',
    answer: 'Absolutely. We prioritize data security and confidentiality. We employ industry-standard security measures and protocols to protect your sensitive information. Non-disclosure agreements (NDAs) are available upon request.',
  },
  {
    id: 5,
    question: 'What services does Alie Services offer?',
    answer: 'We offer a comprehensive suite of consulting services including business strategy development, market analysis, operational efficiency improvements, financial planning, funding acquisition support, and digital transformation guidance.',
  },
];

const Faqs: React.FC = () => {
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
          {faqData.map((item, index) => (
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