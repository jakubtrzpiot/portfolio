const ContactForm = props => {
  return (
    <form action="#" className="flex flex-col gap-6 max-w-screen-md">
      <div>
        <label htmlFor="email" className="flex mb-2 text-sm font-medium">
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="outline-accent   bg-gray-50 border border-gray-300 text-sm  block w-full p-2.5      "
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
          className="outline-accent   bg-gray-50 border border-gray-300 text-sm  block w-full p-2.5      "
          placeholder="Let me know how I can help you"
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
          className="min-h-[42px] outline-accent   bg-gray-50 border border-gray-300 text-sm  block w-full p-2.5      "
          placeholder="Leave a comment..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="py-3 px-5 text-sm font-medium text-center text-white    bg-accent lg:hover:scale-105 transition-all"
      >
        Send message
      </button>
    </form>
  );
};

export default ContactForm;
