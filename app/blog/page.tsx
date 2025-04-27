
import { getBlogs } from "../lib/sanity";

import { PromiseCard } from "../componenets/OurPromises";
import BlogCards from "../componenets/Blogs";
import Container from "../componenets/ui/Container";
import Faqs from "../componenets/Faqs";
import { faqData } from "../data/data";
const promises = [
  {
    icon: "",
    title: "Curated Industry Insights",
    description:
      "External expert perspectives and market trends to keep you ahead in your industry.",
  },
  {
        icon: "",
    title: "Original Thought Leadership",
    description:
      "In-depth analysis and best practices from Alie Services, ensuring you have the latest knowledge.",
  },
  {
    icon: "",
    title: "Growth Strategies",
    description:
      "Actionable frameworks for business optimization and expansion, tailored to your needs.",
  },
];

const page = async () => {
  const blogs = await getBlogs();

  console.log("blogs",blogs)

  return (
    <Container>
         <div className="text-center mb-5 mt-20 ">
          <h2 className="text-3xl font-bold tracking-tight !text-gray-900 sm:text-4xl">
          Our Blog
          </h2>
          
        </div>
      <section className="  ">
        <div className=" mx-auto px-4 ">
          <h3 className="text-[4rem] !text-lightBlue font-bold text-center mb-10">
            The Growth Blueprint: Insights for Smart Businesses
          </h3>
          <p className="md:w-[70%] text-center mx-auto">
            Explore expert strategies, industry insights, and actionable advice
            designed to help your business streamline operations, scale
            efficiently, and stay ahead in today’s evolving marketplace.
          </p>
          <h4 className="text-text mb-4 text-center">What You’ll Find Here: </h4>
          <div className="grid  grid-cols-1 md:grid-cols-3 md:w-[80%] mx-auto gap-6">
            {promises.map((promise, index) => (
              <PromiseCard
                key={index}
                icon={promise.icon}
                title={promise.title}
                description={promise.description}
              />
            ))}
          </div>
        </div>
      </section>
      <BlogCards blogs={blogs} />
     <Faqs faqsData={faqData} />
    </Container>
  );
};

export default page;