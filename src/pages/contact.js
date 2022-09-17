import Head from 'next/head';
const Contact = () => {
  return (
    <div className="container__global">
      <Head>
        <title>Contact Me | trzpiodesign</title>
      </Head>
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
  );
};

export default Contact;
