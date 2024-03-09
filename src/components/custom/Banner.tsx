"use client";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/Lamp";

function Banner() {
  return (
    <div className="relative flex flex-col justify-center">
      <LampContainer className="">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text pb-4 text-center text-5xl xl:text-6xl max-md:text-3xl font-bold text-transparent  "
        >
          Wear a mask <br /> and get started now
        </motion.h1>
      </LampContainer>
      <div className="mt-12 absolute bottom-56 flex w-full justify-center">
        <a href="https://maskers.vercel.app">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d1d1d1_0%,#161616_50%,#f1f1f1_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl max-md:text-sm">
              Join the community
            </span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Banner;
