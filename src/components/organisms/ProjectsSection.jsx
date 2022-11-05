import Image from 'next/image';
import Icon from '../atoms/Icon';

const ProjectSection = () => {
  return (
    <div id="projects" className="section">
      <div className="flex flex-col items-center col-span-full lg:col-start-4 lg:col-span-6 mb-20 md:mb-40">
        <h1 className="section__header">Featured Projects</h1>
        <p className="section__text">
          Here are some of my projects. I am currently working on a few more, so
          check back soon!
        </p>
      </div>
      <div className="flex flex-col items-center md:items-end md:text-right row-start-2 col-span-full lg:col-start-9 mb-10 md:mb-0">
        <h1 className="section__subheader">Portfolio website with blog</h1>
        <p className="section__text">
          Portfolio website that I created to showcase my projects and write
          blog posts about my journey as a developer.
        </p>
        <p className="section__text section__tech">
          <span className="font-bold">Technologies used:</span> Next.js,
          Tailwind CSS, Framer Motion, React Markdown, Figma
        </p>
        <a
          href="https://github.com/jakubtrzpiot/next.js-blog"
          target="_blank"
          rel="noreferrer"
          className="items-center md:text-lg gap-2 cursor-pointer"
        >
          Check it out on GitHub <Icon name="github" />
        </a>
      </div>
      <div className="row-start-3 md:row-start-2 col-span-full lg:col-start-1 lg:col-span-7 mb-40 md:mb-80">
        <Image
          alt=""
          draggable={false}
          src="/assets/trzpiodev.png"
          width={688}
          height={412}
        />
      </div>
      <div className="flex flex-col items-center md:items-start row-start-4 md:row-start-3 col-span-full lg:col-start-1 lg:col-span-4 mb-10 md:mb-0">
        <h1 className="section__subheader">Online shopping website</h1>
        <p className="section__text">
          Online shopping website in React with Redux and Firebase. It features
          a shopping cart, user authentication, and a payment system.
        </p>
        <p className="section__text section__tech">
          <span className="font-bold">Technologies used:</span> React, Redux,
          Framer Motion, Firebase, Stripe, Figma
        </p>
        <a
          href="https://github.com/jakubtrzpiot/react-curology-app"
          target="_blank"
          rel="noreferrer"
          className="items-center md:text-lg gap-2 cursor-pointer md:flex-row-reverse"
        >
          Check it out on GitHub <Icon name="github" />
        </a>
      </div>
      <div className="row-start-5 col-span-full md:row-start-3 lg:col-start-8 lg:justify-self-end mb-20">
        <Image
          alt=""
          draggable={false}
          src="/assets/curology_desktop.png"
          width={686}
          height={399}
        />
      </div>
      <div className="row-start-6 col-span-full place-self-center md:row-start-3 lg:col-start-5 lg:col-span-3 mb-40 md:mb-80">
        <Image
          alt=""
          draggable={false}
          src="/assets/curology_tablet.png"
          width={242}
          height={334}
        />
      </div>
      <div className="flex flex-col row-start-7 col-span-full md:row-start-4 md:col-start-6 lg:col-start-8 items-center md:text-right md:items-end mb-10 md:mb-0">
        <h1 className="section__subheader">Weather app, Rainy</h1>
        <p className="section__text">
          Weather App built with React Native. It uses tommorow.io weather API
          to fetch weather data. It also uses Expo Location API to fetch users
          location.
        </p>
        <p className="section__text section__tech">
          <span className="font-bold">Technologies used:</span> React Native,
          Expo, Inline CSS, Figma, tommorow.io API, Expo Location API
        </p>
        <a
          href="https://github.com/jakubtrzpiot/react-native-rainy-app"
          target="_blank"
          rel="noreferrer"
          className="items-center md:text-lg gap-2 cursor-pointer"
        >
          Check it out on GitHub <Icon name="github" />
        </a>
      </div>
      <div className="place-self-center row-start-8 col-span-full md:row-start-4 lg:col-start-1 lg:col-span-5 md:place-self-start mb-20 md:mb-40">
        <Image
          alt=""
          draggable={false}
          src="/assets/rainy.png"
          width={484}
          height={551}
        />
      </div>
    </div>
  );
};

export default ProjectSection;
