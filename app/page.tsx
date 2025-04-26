import Hero from "./componenets/Hero";
import Container from "./componenets/ui/Container";
import AboutUsSection from "./componenets/AboutUsSection";
import ComprehensiveSolutions from "./componenets/ComprehensiveSolutions";
import HomeBlogs from "./componenets/HomeBlogs";
import Faqs from "./componenets/Faqs";
import { faqData } from "./data/data";




export default function Home() {
  return (
    <>
      <Container>
     <Hero/>
    </Container>
     <AboutUsSection/>
     <ComprehensiveSolutions/>
     <HomeBlogs/>
     <Faqs faqsData={faqData} />
    </>
  

   
  );
}
