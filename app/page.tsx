import Image from "next/image";
import Header from "@/components/Header";
import Carousel from "@/components/carousel";
import WhyUs from "@/components/WhyUs";
import CallToAction from "@/components/CallToAction";
import AboutUsSection from "@/components/Aboutus";
import ITSolutionsHero from "@/components/ITLandingPage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="home-top"> 
    <main>
        <div id = "top-home">
       <Carousel/>
       </div>
       <AboutUsSection />
       <WhyUs/>
       <CallToAction/>
       <ITSolutionsHero/>

    </main>
   </div>
  );
}
