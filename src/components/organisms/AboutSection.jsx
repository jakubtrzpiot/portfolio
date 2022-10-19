const AboutSection = () => {
  const techStack = [
    'HTML5',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Next.js',

    'Python',
  ];
  return (
    <div id="about" className="section overflow-none">
      <div className="pr-10 lg:pr-40 col-span-full lg:col-start-1 lg:col-span-7 lg:row-span-full pb-[calc(100px+40px)] pt-20 lg:py-32 relative after:absolute after:-z-10 after:bg-secondary after:h-full after:w-screen after:top-0 after:lg:right-0 after:right-5">
        <h1 className="section__header relative before:absolute before:left-0 before:lg:-top-8 before:-top-6 before:w-20 before:h-0.5 before:bg-primary">
          A Few Words <span>About Myself</span>
        </h1>
        <p className="section__text">
          I am a self-taught
          <span className="text-primary font-medium"> web developer </span> with
          a passion for creating beautiful and functional websites. Im currently
          pursuing my Bachelors in Automation and Robotics from Cracow
          University of Technology.
        </p>
        <p className="section__text w-fit">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/jakubtrzpiot"
            className="text-primary font-medium"
          >
            @jakubtrzpiot on GitHub
          </a>
        </p>
        <p className="section__text -mt-5 lg:-mt-4 w-fit">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jakubtrzpiot/"
            className="text-primary font-medium"
          >
            @jakubtrzpiot on LinkedIn
          </a>
        </p>
      </div>
      <div className="-mt-[100px] z-10 lg:mt-0 flex py-[60px] items-center justify-center col-span-full lg:col-end-13 lg:col-span-6 lg:row-span-full relative after:absolute after:top-0 after:-z-10 after:bg-primary after:h-full after:w-screen after:lg:left-0 after:left-5 after:lg:h-[calc(100%-120px)] after:lg:top-[60px]">
        <div className="pl-10 py-10">
          <h1 className="text-white font-medium text-xl">Technologies I use</h1>
          <ul className="grid grid-cols-2 pt-16 text-lg gap-6 w-fit">
            {techStack.map((tech, index) => (
              <li key={index} className="text-white list-triang ml-5">
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
