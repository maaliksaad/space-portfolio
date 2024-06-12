"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { useInView } from "react-intersection-observer";

export const SkillText = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full h-auto flex flex-col items-center justify-center"
    >
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box px-[7px] py-[8px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="w-5 h-5 text-[#b49bff] mr-[10px]" />
        <h1 className="Welcome-text text-[13px]">
          think better with Next js 23
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Making apps with modern technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Never miss a task deadline or idea
      </motion.div>
    </motion.div>
  );
};
