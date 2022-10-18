import ContactForm from '../molecules/ContactForm';

const ContactSection = () => {
  return (
    <div id="contact" className="container flex flex-col pt-[80px]">
      <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-6 lg:mb-10">
        Contact Me
      </h1>
      <p className="text-base md:text-xl leading-8 md:leading-9 text-disabled   mb-8 lg:mb-12">
        Found a bug? Got some feedback about my website? Want to hire me? Just
        let me know.
      </p>
      <ContactForm />
    </div>
  );
};
export default ContactSection;
