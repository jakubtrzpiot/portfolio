import ProjectCard from '../molecules/ProjectCard';

const ProjectSection = () => {
  return (
    <div
      id="projects"
      className="container flex flex-col min-h-[100vh] pt-[80px] pb-10"
    >
      <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-6 lg:mb-10">
        My Projects
      </h1>
      <p className="text-base md:text-xl leading-8 md:leading-9 text-disabled dark:text-[#aaa]">
        {`Here are some of my projects. I'm currently working on a few more, so
        check back soon!`}
      </p>
      <div className="flex flex-row gap-6 pt-10 grow overflow-y-auto items-center">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectSection;
