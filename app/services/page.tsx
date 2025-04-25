import React from "react";
import Container from "../componenets/ui/Container";
import solutionIcon1 from "@/public/solutionIcon1.svg"
import solutionIcon2 from "@/public/solutionIcon2.svg"
import solutionIcon3 from "@/public/solutionIcon3.svg"
import Image from 'next/image';
import ServicesPlans from "../componenets/ServicesPlans";
import Faqs from "../componenets/Faqs";
import CallToAction from "../componenets/CallToAction";

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
const ServicesPage = () => {
  return (
    <>
    <Container>
      <div className="text-center my-20">
        <h1>Our Main Services</h1>
        <p className="md:w-[70%] mx-auto">
          We offer a wide range of consulting services to help businesses
          achieve sustainable growth and long-term success. Our solutions are
          tailored to meet the unique needs of each client, ensuring measurable
          results and impactful outcomes.
        </p>
      </div>
          <ServicesPlans />
          <Faqs/>
    </Container>
          <CallToAction/>
    </>
    

  );
};

export default ServicesPage;
