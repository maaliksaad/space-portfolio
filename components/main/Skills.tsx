import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import { SkillText } from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden   py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />
      <div className="flex flex-row justify-around flex-wrao mt-4 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            alt={image.skill_name}
            width={image.width}
            heigth={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrao mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            alt={image.skill_name}
            width={image.width}
            heigth={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrao mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            alt={image.skill_name}
            width={image.width}
            heigth={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrao mt-4 gap-5 items-center">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            alt={image.skill_name}
            width={image.width}
            heigth={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrao mt-4 gap-5 items-center">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            alt={image.skill_name}
            width={image.width}
            heigth={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className=" w-full h-full z-[-10] opacity-30  flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            autoPlay
            preload="false"
            playsInline
            muted
            loop
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
