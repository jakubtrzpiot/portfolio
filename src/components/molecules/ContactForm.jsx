const ContactForm = props => {
  return (
    <form action="#" className="flex flex-col gap-6">
      <div>
        <label htmlFor="email" className="flex mb-2 text-sm font-medium">
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="contact__input"
          placeholder="email@address.com"
          required
        ></input>
      </div>
      <div>
        <label htmlFor="subject" className="flex mb-2 text-sm font-medium">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="contact__input"
          placeholder="Let me know how I can help You."
          required
        ></input>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="flex mb-2 text-sm font-medium">
          Your message
        </label>
        <textarea
          id="message"
          rows="6"
          className="min-h-[42px] contact__input"
          placeholder="Leave a comment..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="justify-items-end py-3 px-5 text-sm font-medium text-white bg-primary lg:hover:-translate-y-1 transition-all"
      >
        Send message
      </button>
    </form>
  );
};

export default ContactForm;
