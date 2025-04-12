import Navbar from "./componenets/Navbar";
import Hero from "./componenets/Hero";
import Container from "./componenets/ui/Container";
import AboutUsSection from "./componenets/AboutUsSection";
import ComprehensiveSolutions from "./componenets/ComprehensiveSolutions";
import HomeBlogs from "./componenets/HomeBlogs";

export default function Home() {
  return (
    <>
      <Container>
     <Navbar/>
     <Hero/>
    </Container>
     <AboutUsSection/>
     <ComprehensiveSolutions/>
     <HomeBlogs/>
    </>
  

   
  );
}
