import ContactForm from '../molecules/ContactForm';

const ContactSection = () => {
  return (
    <div id="contact" className="section">
      <div className="col-span-full place-self-center lg:col-start-4 md:col-span-6">
        <h1 className="section__header">Contact Me</h1>
        <p className="section__text">
          Found a bug? Got any feedback about my website? Want to hire me? Just
          let me know.
        </p>
        <ContactForm />
      </div>
    </div>
  );
};
export default ContactSection;
