import { CheckCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const pricingPlans = [
  {
    title: "Starter Package",
    tagline: "Build a Strong Foundation",
    description: "Best for: Small business owners & entrepreneurs seeking clarity and direction.",
    features: [
      "Personalized strategy session to identify growth opportunities.",
      "Clear roadmap to streamline operations & increase profitability.",
      "Industry-specific insights & custom business structuring."
    ],
    buttonText: "📅 Book a Free Consultation"
  },
  {
    title: "Growth Package",
    tagline: "Scale & Optimize Your Business",
    description: "Best for: Businesses looking to scale strategically & maximize profits.",
    features: [
      "Proven strategies to remove bottlenecks & accelerate growth.",
      "Personalized automation & efficiency improvements.",
      "Customer acquisition & digital marketing optimization."
    ],
    buttonText: "📅 Book a Free Consultation",
    popular: true
  },
  {
    title: "Enterprise Package",
    tagline: "High-Level Strategy & Execution",
    description: "Best for: Established businesses & executives who need a transformative strategy.",
    features: [
      "Executive strategy sessions tailored to your unique challenges.",
      "Advanced automation & AI-driven process improvements.",
      "Market expansion strategies for long-term success."
    ],
    buttonText: "📞 Contact Sales"
  }
];

const ServicesPlans = () => {
  return (
    <div>
      <div className="text-center my-10  mt-40">
        <h2>Our Packages</h2>
        <p>Choose from our strategically designed service packages to accelerate your business success.</p>
      </div>
      <div className="flex flex-col md:mt-20 md:flex-row gap-6 justify-center items-center  text-white ">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-secondaryblack p-6  rounded-2xl  w-full  relative shadow-lg"
          >
            {plan.popular && (
              <span className="absolute top-4 right-4 bg-darkblue text-white text-xl font-medium px-8 py-2 rounded">
                Popular
              </span>
            )}
            <h4 className="text-2xl md:text-4xl text-heading mb-6 font-bold">{plan.title}</h4>
            <p className=" ">{plan.tagline}</p>
            <Link
              target="_blank"
              href=" https://calendly.com/alieservices/free-consultation"
            >
              <button
                className={`block my-10 ${index === 2 ? "btn btn-transparent border border-darkblue" : "btn btn-blue"} text-white py-5 px-14 capitalize`}
              >
                {plan.buttonText}
              </button>
            </Link>
            <span className="  text-text mb-8 mt-8 ">
              {plan.description}
            </span>
            <ul className="mt-4 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="my-10 flex  gap-4">
                  <CheckCircle color="#0056B3" height={20} />
                  <span className="text-[1.1rem] text-xs md:text-[1rem]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPlans;