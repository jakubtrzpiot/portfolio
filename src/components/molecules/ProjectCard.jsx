import React from 'react';
import Image from 'next/image';

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col rounded-xl dark:bg-accentLight/20 bg-dark text-textLight md:w-1/2">
      <div className="bg-accentLight dark:bg-accent h-[10vh] rounded-t-xl"></div>
      <div className="px-10 py-8">
        <h2 className="pb-4">Nazwa projektu</h2>
        <p className="text-sm text-stone-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
