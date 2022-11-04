import ContactForm from '../molecules/ContactForm';
import Image from 'next/image';

const ContactSection = () => {
  return (
    <div id="contact" className="section md:mb-20">
      <div className="col-span-full place-self-center lg:col-start-1 lg:col-span-6">
        <h1 className="section__header">Contact Me</h1>
        <p className="section__text">
          Found a bug? Got any feedback about my website? Want to hire me? Just
          let me know.
        </p>
        <ContactForm />
      </div>
      <div className="hidden lg:flex col-start-8 col-span-full">
        <Image
          alt=""
          draggable={false}
          src="/assets/support.svg"
          width={500}
          height={282}
        />
      </div>
    </div>
  );
};
export default ContactSection;
