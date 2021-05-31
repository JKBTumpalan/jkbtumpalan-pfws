import Head from "next/head";

export const Contact: React.FC = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-800 w-screen sm:pl-20 p-10 overflow-visible ">
      <Head>
        <title> Contact </title>
      </Head>
      <div className="flex flex-col text-center min-w-full ">
        <h2 className="text-xs text-teal-500 tracking-widest font-medium title-font mb-1">
          Contact me
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-truegray-200">
          Address and Socials
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center text-center rounded-md w-full overflow-visible my-10">
        <h1 className="text-3xl font-semibold text-teal-500 dark:text-gray-100  "></h1>
        <p className="max-w-md mt-5 text-truegray-200 dark:text-gray-400 w-full ">
          Feel free to leave a message if you have any offers, feedback, or
          concerns.
        </p>
        <div className="w-full mt-5 flex flex-col items-center">
          <div className="loader flex md:flex-row flex-col justify-center">
            <a href="https://m.me/khalsuu">
              <button className="animate-tracking-in-contract-bck-bottom md:my-0 my-2 px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-700 rounded-md sm:mx-2 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                Send message
              </button>
            </a>
            <a href="mailto:jbtumpalan@up.edu.ph?subject=Website E-mail">
              <button className="animate-tracking-in-contract-bck-bottom md:my-0 my-2 px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-700 rounded-md sm:mx-2 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                Send e-mail
              </button>
            </a>
          </div>
          <div className="w-full">
            <p className="text-xs text-truegray-200 mt-3">
              {" "}
              As of now, the submission function is not yet functional. Clicking
              the buttons will direct you to my facebook account or e-mail.
            </p>
          </div>
        </div>
      </div>
      <div className="animate-tracking-in-expand-fwd-top mx-auto flex flex-col justify-center items-center my-10 md:ml-10">
        <div className="h-96 bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end justify-start relative ">
          <div className="mapouter ">
            <div className="gmap_canvas ">
              <iframe
                width="100%"
                height="100%"
                id="gmap_canvas"
                className="absolute inset-0"
                src="https://maps.google.com/maps?q=Plaridel,%20bulacan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                scrolling="no"
              ></iframe>
            </div>
          </div>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md ">
            <div className="lg:w-1/2 sm:px-24 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">Plaridel, Bulacan, Philippines 3004</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-500 leading-relaxed">
                jkbtumpalan@gmail.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">63 905 621 1422</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
