"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  src: string;
  alt: string;
  width: number;
  heigth: number;
  index: number;
}

const SkillDataProvider = ({ src, alt, width, heigth, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <img src={src} alt={alt} width={width} height={heigth} />
    </motion.div>
  );
};

export default SkillDataProvider;
