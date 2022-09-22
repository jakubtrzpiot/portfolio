import Head from 'next/head';
const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Me | trzpiodesign</title>
      </Head>
      <div className="container flex">
        <form className="flex flex-col">
          Contact Me:
          <div>
            <input></input>
            <input></input>
          </div>
          <input></input>
          <input></input>
          <button></button>
        </form>
      </div>
    </>
  );
};

export default Contact;
