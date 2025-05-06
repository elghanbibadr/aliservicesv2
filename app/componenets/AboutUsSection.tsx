// components/AboutUsSection.js
import Image from 'next/image';
import aboutUsBg from '@/public/aboutUsBg.png'
import Container from './ui/Container';
import { CircleCheck } from 'lucide-react';
import Link from 'next/link';

const AboutUsSection = () => {

  return (
    <section className="bg-[#D3DFFA] py-16 sm:py-24">
      <Container>
        <div className="lg:flex lg:items-center lg:gap-16">
          {/* Image Column */}
          <div className="relative w-full lg:w-1/2 mb-12 lg:mb-0">
           <Image src={aboutUsBg} height={500} width={500} alt='' />
          </div>

          {/* Text Content Column */}
          <div className="w-full lg:w-1/2">
            <h2 className=" font-bold tracking-tight text-gray-900  mb-6">
              About Us
            </h2>
            <p >
              We are a trusted consulting firm dedicated to empowering businesses in the U.S. and Canada. Our team of experts specializes in business strategy, marketing solutions, and operational efficiency to help companies optimize their performance and achieve long-term success.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <CircleCheck  className="flex-shrink-0  h-6 w-6 text-blue-600 mr-3 mt-1" />
                <span className="text-gray-700">
                  <strong className="font-medium text-gray-900">Expert-Led Strategies</strong> - Our experienced consultants bring deep industry insights.
                </span>
              </li>
              <li className="flex items-start">
                <CircleCheck className="flex-shrink-0 h-6 w-6 text-blue-600 mr-3 mt-1" />
                <span className="text-gray-700">
                  <strong className="font-medium text-gray-900">Tailored Solutions</strong> - We craft strategies specific to your business needs.
                </span>
              </li>
              <li className="flex items-start">
                <CircleCheck className="flex-shrink-0 h-6 w-6 text-blue-600 mr-3 mt-1" />
                <span className="text-gray-700">
                  <strong className="font-medium text-gray-900">Proven Success</strong> - Track record of helping businesses grow and scale.
                </span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link target='_blank' href="https://calendly.com/alieservices/free-consultation">
                <button
                  className="btn-transparent"
                >
                  Learn More
                </button>
              </Link>
              <Link href="/contact">
                <button
                  className="btn-blue"
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};


export default AboutUsSection;