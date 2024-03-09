import Hero from "../components/custom/Hero";
import Navbar from "../components/custom/Navbar";
import { Spotlight } from "../components/ui/Spotlight";
import Banner from "../components/custom/Banner";
import Colleges from "../components/custom/Colleges";
import Features from "../components/custom/Features";
import About from "../components/custom/About";

const Landing = () => {
  return (
    <>
      <div id="masktop" className="">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <Navbar />
        <div className="bg-grid-small-white/[0.2]">
          <Hero />
        </div>
        <Colleges />
        <div id="features" className="max-md:mt-20  max-md:pt-16 pt-28"></div>
        <Features />
        <div id="aboutus" className="max-md:mt-20 max-md:pt-16 pt-28"></div>
        <About />
        <div className="max-md:mt-20 mt-20"></div>

        <Banner />
      </div>
    </>
  );
};

export default Landing;
