import Head from "next/head";

export const Works: React.FC = () => {
  return (
    <div className="text-gray-600 body-font">
      <Head>
        <title> Works </title>
      </Head>

      <div className="container px-5 pb-6 mx-auto flex flex-wrap border-2 ">
        <div className="flex w-full sm:flex-row flex-col">
          <div className="flex flex-col text-left w-full mb-20">
            <h2 className="text-xs text-teal-500 tracking-widest font-medium title-font mb-1">
              Work
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-truegray-200">
              Projects showcase
            </h1>
          </div>
          <p className="lg:pl-6 lg:w-1/3 mx-auto leading-relaxed text-base text-white mb-20">
            Personal and university projects using different technologies. I am
            still working hard to add more projects and hopefully add more to my
            current skillset.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/500x300"
              ></img>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/501x301"
              ></img>
            </div>
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://dummyimage.com/600x360"
              ></img>
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://dummyimage.com/601x361"
              ></img>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/502x302"
              ></img>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/503x303"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
