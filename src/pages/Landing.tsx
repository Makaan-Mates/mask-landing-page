import { SpotlightPreview } from "../components/custom/SpotlightPreview";
import Hero from "../components/custom/Hero";
import Navbar from "../components/custom/Navbar";
import { Spotlight } from "../components/ui/Spotlight";

const Landing = () => {
  return (
    <>
      <div className="">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <div className="bg-grid-small-white/[0.2]">
          <Navbar />
          <Hero />
        </div>
      </div>
    </>
  );
};

export default Landing;
