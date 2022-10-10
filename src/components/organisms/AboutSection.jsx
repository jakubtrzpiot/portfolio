import Image from 'next/image';

const AboutSection = () => {
  return (
    <div id="about" className="flex flex-col h-[100vh] pt-[120px] pb-10">
      <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-6 lg:mb-10">
        About Me
      </h1>
      <p className="text-base md:text-xl leading-8 md:leading-9 text-disabled dark:text-[#aaa] mb-10 lg:mb-12">
        I am a student aspiring to be a full stack web developer with a passion
        for learning and building new things. I have experience with many
        different technologies and frameworks.
      </p>
      <div className="flex lg:hidden relative w-full h-full">
        <Image src="/assets/socials.svg" layout="fill" alt="socials" />
      </div>
    </div>
  );
};

export default AboutSection;
