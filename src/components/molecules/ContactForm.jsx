const ContactForm = props => {
  return (
    <form action="#" className="space-y-8 max-w-screen-md">
      <div>
        <label htmlFor="email" className="flex mb-2 text-sm font-medium">
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="outline-accent dark:outline-accentLight bg-gray-50 border border-gray-300 text-sm rounded-xl block w-full p-2.5 dark:bg-accentLight/10 dark:border-accentLight/20 dark:placeholder-gray-400"
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
          className="outline-accent dark:outline-accentLight bg-gray-50 border border-gray-300 text-sm rounded-xl block w-full p-2.5 dark:bg-accentLight/10 dark:border-accentLight/20 dark:placeholder-gray-400"
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
          className="min-h-[42px] outline-accent dark:outline-accentLight bg-gray-50 border border-gray-300 text-sm rounded-xl block w-full p-2.5 dark:bg-accentLight/10 dark:border-accentLight/20 dark:placeholder-gray-400"
          placeholder="Leave a comment..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="py-3 px-5 text-sm font-medium text-center text-white rounded-xl sm:w-fit dark:bg-accentLight bg-accent lg:hover:scale-105 transition-all"
      >
        Send message
      </button>
    </form>
  );
};

export default ContactForm;
