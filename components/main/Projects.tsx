import React from "react";
import ProjectCard from "../sub/ProjectCard";
import ProjectCard1 from "../sub/ProjectCard1";


const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pb-80"
      id="projects"
    >
      <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pt-20">
        My Projects
      </h1>
      
      <div className="h-[full] w-[full] flex flex-col md:flex-row gap-10 px-[500px] py-20">
        <ProjectCard
          src="/BornToBattle.png"
          title="BronToBattle"
          description="Group project - Dancing Competition Management system for Invisible Dance Studio"
        />
      </div>
      
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-[80px]">
        <ProjectCard1
          src="/LandSale.png"
          title="Interactive Website Cards"
          // description=""
        />
        <ProjectCard1
          src="/PersonalWeb.png"
          title="Personal Themed Website"
          // description=""
        />
      </div>
    </div>
  );
};

export default Projects;