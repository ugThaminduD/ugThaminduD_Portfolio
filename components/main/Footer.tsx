import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg  ">
        <div className="w-full flex flex-col items-center justify-center m-auto  ">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap pt-10 pb-5  bg-gradient-to-tr from-purple-800 to-black-500">
                
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    <a href="https://github.com/ugThaminduD" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </a>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaYoutube />
                        <span className="text-[15px] ml-[6px]">Youtube</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDiscordLogo />
                        <span className="text-[15px] ml-[6px]">Discord</span>    
                    </p>
                </div>

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaInstagram />
                        <span className="text-[15px] ml-[6px]">Instagram</span>    
                    </p>
                    <a href="www.linkedin.com/in/ugThaminduDil" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaLinkedin />
                        <span className="text-[15px] ml-[6px]">Linkedin</span>    
                    </a>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaTwitter />
                        <span className="text-[15px] ml-[6px]">Twitter</span>    
                    </p>
                </div>

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Become Sponsor</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">Learning about me</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">#@gmail.com</span>    
                    </p>
                </div>

            </div>

            <div className="mb-[20px] text-[15px] text-center pt-10">
                &copy; Dev 2024 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer