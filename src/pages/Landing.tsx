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
      <div className="">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <Navbar />
        <div className="bg-grid-small-white/[0.2]">
          <Hero />
        </div>
        <Colleges />
        <div className="mt-40"></div>
        <Features />
        <div className="mt-40"></div>
        <About />
        <Banner />
      </div>
    </>
  );
};

export default Landing;
