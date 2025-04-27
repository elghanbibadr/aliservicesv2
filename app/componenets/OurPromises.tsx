import { FC } from "react";
// import reliabilityIcon from "@/public/reliability2.svg"
// import innovationIcon from "@/public/inovation.svg"
// import resultsIcon from "@/public/results.svg"
// import collaborative from "@/public/collaborative.svg"


const promises = [
  {
    icon: "",
    title: "Reliability",
    description:
      "Having been in your shoes, we understand the importance of consistent, dependable support.",
  },
  {
    icon: "",
    title: "Innovation",
    description:
      "We combine cutting-edge strategies with practical experience, bringing you solutions that work in the real world, not just on paper.",
  },
  {
    icon:"",
    title: "Results-Driven",
    description:
      "As a former business owner, I know that every investment needs to show returns. We focus on delivering measurable outcomes.",
  },
  {
    icon: "",
    title: "Collaborative",
    description:
      "We're not just consultants—we're partners in your success. We work alongside your team, sharing insights and strategies that drive results.",
  },
];


import Image from "next/image";
interface PromiseCardProps {
  icon?: string;
  title: string;
  description: string;
  withImage?:boolean
}

export const PromiseCard: FC<PromiseCardProps> = ({ icon, title, description,withImage=false }) => {
  return (
    <div className="bg-white shadow-2xl rounded-3xl mt-6 p-5   ">
     {/* {withImage && <div className=" rounded-lg mb-4">
        <Image height={80} width={80} src={icon} alt={title} className="" />
      </div>} */}
      <h6 className=" block !text-lg my-8 text-heading  ">{title}</h6>
      <p className=" !text-sm mt-2 ">{description}</p>
    </div>
  );
};

const PromiseSection: FC = () => {
  

  return (
    <section className="py-12  ">
      <div className=" mx-auto px-4 ">
        <h2 className="text-[4rem] text-heading font-bold text-center mb-10">Our Promise to You</h2>
        <p className="md:w-[70%] text-center mx-auto">We know the late nights, the tough decisions, and the constant juggling of priorities—because we have lived it. Our expertise comes not just from years of consulting, but from real-world experience in building and scaling businesses. We specialize in helping startups and small businesses overcome operational challenges and unlock their full potential.</p>
        <div className="grid mt-10 grid-cols-1 md:grid-cols-2 md:w-[80%] mx-auto gap-6">
          {promises.map((promise, index) => (
            <PromiseCard
              key={index}
              icon={promise.icon}
              title={promise.title}
              withImage={true}
              description={promise.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;