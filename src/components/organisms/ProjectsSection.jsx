import Card from '../atoms/Card';

const ProjectSection = () => {
  return (
    <div id="projects" className="section">
      <div className="col-span-full lg:col-start-4 lg:col-span-6">
        <h1 className="section__header">Featured Projects</h1>
        <p className="section__text">
          Here are some of my projects. I am currently working on a few more, so
          check back soon!
        </p>
      </div>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default ProjectSection;
