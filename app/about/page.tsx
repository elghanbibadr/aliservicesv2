import React from "react";
import Container from "../componenets/ui/Container";
import ourMission from "@/public/ourMission.svg";
import Image from "next/image";
import ContactForm from "../componenets/ContactForm";
import Link from "next/link";

const AboutUsPage = () => {
  return (
    <>
    
    <Container>
      <div className="text-center my-20">
        <h1>About Us </h1>
        <h4>Empowering Businesses for Sustainable Success</h4>
        <p className="md:w-[70%] mx-auto">
          At Alie Services, we are committed to helping businesses navigate
          challenges, seize opportunities, and achieve long-term success. With a
          strong presence in the U.S. and Canada, our consulting expertise spans
          strategic planning, marketing solutions, and operational efficiency.
          Whether you re a startup, a small business, or an established
          enterprise, we provide the tools and insights needed to scale
          efficiently and confidently.
        </p>
        <div className="flex gap-3 items-center mx-auto w-fit mt-8">
          <Link target="_blank" href="https://calendly.com/alieservices/free-consultation"><button className="btn-blue">Get Started</button></Link>
          <Link href="/contact"><button className="btn-transparent">Contact Us</button></Link>
        </div>
      </div>
      {/* ection 2 */}
      <div className="bg-white">
        <div className="relative isolate overflow-hidden ">
          <div className=" pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 justify-center items-center  lg:gap-x-8 lg:px-8 lg:py-20">
        
            <div className="">
              <Image
                src={ourMission}
                height={700}
                width={700}
                alt="hero image"
              />
            </div>
            <div className="px-6 lg:px-0 lg:pt-4">
              <div className="">
                <h2 className="mt-10 ">
                Our Mission
                </h2>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                We empower businesses with strategic solutions that drive growth, enhance brand visibility, and optimize operations. Our goal is to help entrepreneurs and business owners make informed decisions that lead to measurable success.
                </p>
             
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 3 */}
     
    </Container>
     <div className="bg-[#D3DFFA] text-center py-16 sm:py-24">
     <Container>
         <h2>Our Vision</h2>
         <p className="md:w-[70%] md:mx-auto">
         To be the go-to consulting firm for businesses seeking sustainable growth, innovative strategies, and a competitive edge in their industries.
         </p>
     </Container>
    </div>

    {/* contact */}
    <ContactForm/>
    </>

  );
};

export default AboutUsPage;
