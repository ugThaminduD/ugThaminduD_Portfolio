"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import ServiceCard from "../sub/ServiceCard";

import Image from "next/image";

const Service = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full space-y-20">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-bold text-center text-gray-200"
        >
          Service
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Offer
        </motion.div>
      </div>
      
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 md:space-x-4">
        <ServiceCard
          src="/ps.png"
          title="Web Development"
          description="Transforming your ideas into engaging and responsive websites is my passion. With expertise in modern web technologies, I build user-friendly, dynamic websites that not only look great but also provide a seamless user experience across all devices."
        />
        <ServiceCard
          src="/ps.png"
          title="Server-Side Development"
          description="Enhance your web application's performance and scalability with robust server-side development. I specialize in creating secure, efficient, and scalable back-end solutions using the latest technologies to ensure your application can handle any demand."
        />
        <ServiceCard
          src="/ps.png"
          title="Problem Solving"
          description="Facing a technical challenge? Let me help you navigate and solve complex issues with innovative solutions. My strong analytical skills and experience in debugging and optimization ensure that your project stays on track and runs smoothly."
        />
      </div>
      {/* <div className="absolute z-[20] bottom-[1px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div> */}

      {/* <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className=" z-10"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div>
      </div> */}
      

      {/* <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm/"
        />
      </div> */}
    </div>
  );
};

export default Service;