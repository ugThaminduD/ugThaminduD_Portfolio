"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
// import ServiceCard from "../sub/ServiceCard";
import Image from "next/image";


interface Props {
  src: string;
  title: string;
}

const ServiceCard1 = ({ src, title }: Props) => {
  return (
    <div className="w-[full] h-[full] flex items-center justify-center relative overflow-hidden rounded-lg shadow-lg border border-[white] bg-gradient-to-br from-purple-800 to-cyan-800">
      <div className="w-[full] h-[full] flex items-center justify-center ">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-[auto] h-[auto] object-contain "
        />
      </div>

      <div className="relative">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
      </div>
    </div>
  );
};


const   HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20] grid gap-8 md:grid-cols-2"  //1st
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          

          <span >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              UG Thamindu Dilhara
            </span>
          </span>

          <span className="h-[auto] w-[300px]">
            <span>
              <ServiceCard1
                src="/CV.jpg"
                title=""
              />
            </span>
          </span>
          
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 max-w-[600px]"
        >
          Welcome to the portfolio of UG Thamindu Dilhara, a dedicated Full Stack Software Engineer 
          with a wealth of experience across web, mobile, and software development landscapes. 
          Dive into my diverse range of projects and discover the innovative solutions I&apos;ve crafted. 
          From intuitive mobile applications to dynamic websites and robust software systems, 
          my work is a testament to my passion for technology and commitment to excellence. 
          Explore my portfolio to see how my skills and creativity come together to deliver high-quality, impactful digital experiences.
          
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          href="https://drive.google.com/file/d/1UvWnghODXgaYe49M7lj1nRXsHfOXvZyM/view?usp=sharing"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Resume
          
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;