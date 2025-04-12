// components/SolutionsSection.js
import React from 'react';
import solutionIcon1 from "@/public/solutionIcon1.svg"
import solutionIcon2 from "@/public/solutionIcon2.svg"
import solutionIcon3 from "@/public/solutionIcon3.svg"
import Image from 'next/image';

const solutionsData = [
  {
    icon: solutionIcon1, // Using ArrowPathIcon as a placeholder for the strategy icon
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
    title: 'Business Strategy Consulting',
    description: 'Develop a clear roadmap to scale and succeed. We help businesses set achievable goals and create actionable strategies to reach them.',
    link: '#', // Replace with actual link
  },
  {
    icon: solutionIcon2,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
    title: 'Operational Efficiency Planning',
    description: 'We optimize processes for increased productivity and cost-effectiveness. We identify inefficiencies and provide solutions to streamline operations.',
    link: '#', // Replace with actual link
  },
   {
    icon: solutionIcon3, // Using AdjustmentsHorizontalIcon for the funding icon
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
    title: 'Funding Awareness & Support',
    description: 'Secure funding opportunities to expand your business, with guidance on grants, loans, and investment strategies.',
    link: '#', // Replace with actual link
  },
];

const ComprehensiveSolutions = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Text */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="">
            Comprehensive Solutions for Business Growth
          </h2>
          <p className="mt-4  max-w-3xl mx-auto">
            We offer a wide range of consulting services to help businesses achieve sustainable growth and long-term success. Our solutions are tailored to meet the unique needs of each client, ensuring measurable results and impactful outcomes.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 mt-10 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutionsData.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 lg:p-8 flex flex-col transition duration-300 ease-in-out hover:shadow-xl" // Added hover effect
            >
              {/* Icon */}
              {/* <div className={`w-12 h-12 rounded-lg ${solution.bgColor} flex items-center justify-center mb-6`}>
                <solution.icon className={`h-6 w-6 ${solution.iconColor}`} aria-hidden="true" />
              </div> */}
              <Image className='mb-6' src={solution.icon} height={60} width={60} alt="solution icon" />

              {/* Title */}
              <h3 className=" mb-3">
                {solution.title}
              </h3>

              {/* Description */}
              <span className="text-[13px] md:text-[14px] text-text my-4">
                {solution.description}
              </span>

              {/* Learn More Button */}
              <div className="mt-auto"> {/* Pushes button to bottom */}
                <button
                  className="btn-transparent"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveSolutions;