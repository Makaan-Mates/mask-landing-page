"use client";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/Lamp";

function Banner() {
  return (
    <div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text pb-4 text-center text-4xl font-bold text-transparent md:text-7xl"
        >
          Wear a mask <br /> and get started now
        </motion.h1>
      </LampContainer>
    </div>
  );
}

export default Banner;
