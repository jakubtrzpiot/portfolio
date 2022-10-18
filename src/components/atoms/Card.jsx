import React from 'react';

const ProjectCard = ({ project }, { ...props }) => {
  return (
    <div
      className="flex flex-col  bg-dark text-textLight snap-center"
      {...props}
    >
      <div className="px-12 py-12 w-[calc(100vw-48px)]">
        <h2 className="pb-6">Project</h2>
        <p className="text-sm text-stone-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="bg-accentLight rounded-b-xl h-[20px]"></div>
    </div>
  );
};

export default ProjectCard;
