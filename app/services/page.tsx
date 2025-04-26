import React from "react";
import Container from "../componenets/ui/Container";
import ServicesPlans from "../componenets/ServicesPlans";
import Faqs from "../componenets/Faqs";
import { faqData } from "../data/data";

const ServicesPage = () => {
  return (
    <>
      <Container>
        <div className="text-center my-20">
          <h1>Our Main Services</h1>
          <p className="md:w-[70%] mx-auto">
            We offer a wide range of consulting services to help businesses
            achieve sustainable growth and long-term success. Our solutions are
            tailored to meet the unique needs of each client, ensuring
            measurable results and impactful outcomes.
          </p>
        </div>
        <ServicesPlans />
      </Container>
      <Faqs faqsData={faqData} />
    </>
  );
};

export default ServicesPage;
