import Image from 'next/image';
import React from 'react';
// You might need to find the specific power icon you like.
// IoPowerOutline is a common choice from react-icons/io5
import Turnonicon from '@/public/Turnonicon.svg'
import Container from './ui/Container';
const CallToAction = () => {
  return (
    // Section container with light blue background and padding
    <section className="bg-cyan py-16 md:py-24">
      {/* Centering container */}
      <Container className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex container for layout (stack on mobile, row on medium screens up) */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">

          {/* Text Content Area (Takes more space) */}
          <div className="md:w-1/2 lg:w-3/5 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
              Take the next step in your business growth journey
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Unlock your business's full potential with expert strategies
              and tailored solutions, let's discuss how we can optimize your operations
              and drive sustainable growth.
            </p>
            {/* Call to Action Button */}
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-3 rounded-full transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-50"
              aria-label="Book your consultation"
            >
              Book your consultation
            </button>
          </div>

          {/* Image/Icon Area */}
          <div className="">
           
           <Image src={Turnonicon} alt='turn on icon' height={700} width={700} />

          </div>

        </div>
      </Container>
    </section>
  );
};

export default CallToAction;