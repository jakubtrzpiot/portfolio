import React from 'react';
import Image from 'next/image';

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col rounded-xl dark:bg-accentLight/20 bg-dark text-textLight">
      <div className="bg-accentLight dark:bg-accent h-[20vh] w-[calc(100vw-2rem)] xl:w-[600px] rounded-t-xl"></div>
      <div className="px-10 py-5">
        <h2>Nazwa projektu</h2>
        <br></br>
        <p className="text-sm text-stone-300 h-[20vh]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
