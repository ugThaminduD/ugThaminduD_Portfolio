import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}
interface Propss {
  src: string;
  title: string;
}



const ProjectCard1 = ({ src, title }: Propss) => {
    return (
      <div className="w-full h-auto relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-gradient-to-r from-purple-900 to-black-500">
        <Image
          src={src}
          alt={title}
          width={500}
          height={500}
          className="w-full object-contain"
        />
  
        <div className="relative p-4">
          {/* <h1 className="text-2xl font-semibold text-white">{title}</h1> */}
          {/* <p className="mt-2 text-gray-300">{description}</p> */}
        </div>
      </div>
    );
  };
  
  export default ProjectCard1;
  