import Navbar from "./componenets/Navbar";
import Hero from "./componenets/Hero";
import Container from "./componenets/ui/Container";
import AboutUsSection from "./componenets/AboutUsSection";
import ComprehensiveSolutions from "./componenets/ComprehensiveSolutions";
import HomeBlogs from "./componenets/HomeBlogs";
import Faqs from "./componenets/Faqs";
import Newsletter from "./componenets/NewsLetter";
import Footer from "./componenets/ui/Footer";


export default function Home() {
  return (
    <>
      <Container>
     <Hero/>
    </Container>
     <AboutUsSection/>
     <ComprehensiveSolutions/>
     <HomeBlogs/>
     <Faqs/>
    </>
  

   
  );
}
