"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { useState } from 'react';

const Navbar = () => {
  return (
    <div className="w-auto h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          
          <span className="font-bold ml-[10px] text-white">
            Developed by UG Thamindu Dilhara
          </span>
        </a>

        {/* <div className="w-[500px] h-auto flex flex-row items-center justify-between md:mr-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white font-bold">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] ml-[15px] mr-[15px] px-[20px] py-[10px] rounded-full ">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div> */}

        {/* <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;