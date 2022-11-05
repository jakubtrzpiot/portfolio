const AboutSection = () => {
  const techStack = [
    'HTML5',
    'Node.js',
    'CSS3',
    'Next.js',
    'JavaScript',
    'React',
    'Python',
    'React Native',
  ];
  return (
    <div id="about" className="section overflow-none">
      <div className="about__left col-span-full md:col-start-1 lg:col-start-1 md:row-span-full md:col-span-6 lg:col-span-7">
        <h1 className="section__header relative before:absolute before:left-0 before:lg:-top-8 before:-top-6 before:w-20 before:h-0.5 before:bg-primary">
          A Few Words <span>About Myself</span>
        </h1>
        <p className="section__text">
          I am a self-taught
          <span className="text-primary font-medium"> web developer </span> with
          a passion for creating beautiful and functional websites. I am
          currently pursuing my Bachelors in Automation and Robotics Engineering
          from Cracow University of Technology.
        </p>
        <p className="section__text w-fit font-medium">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/jakubtrzpiot"
          >
            <span className="text-primary">GitHub</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jakubtrzpiot/"
          >
            <span className="text-primary">LinkedIn</span>
          </a>
        </p>
      </div>
      <div className="about__right col-span-full md:col-end-13 lg:col-end-13 md:row-span-full md:col-span-7 lg:col-span-6">
        <div className="lg:pl-20 py-20">
          <h1 className="text-white font-medium text-xl">Technologies I use</h1>
          <ul className="grid grid-cols-2 pt-16 text-lg gap-6 w-fit">
            {techStack.map((tech, index) => (
              <li key={index} className="text-white list-disc ml-5">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
