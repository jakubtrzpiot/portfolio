const AboutSection = () => {
  return (
    <section className="">
      <div
        id="about"
        className="container flex flex-col min-h-[100vh] pt-[80px] pb-10"
      >
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-6 ">
          About Me
        </h1>
        <p className="text-base md:text-xl leading-8 md:leading-9 text-disabled  ">
          I am a student aspiring to be a full stack web developer with a
          passion for learning and building new things. I have experience with
          many different technologies and frameworks.
        </p>
        <div className="flex grow pt-10"></div>
      </div>
    </section>
  );
};

export default AboutSection;
