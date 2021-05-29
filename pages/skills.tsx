import { Description } from "@headlessui/react/dist/components/description/description";
import jkbtumpalan_avatar from "../assets/jkbtumpalan_avatar.jpg";
import CardComponent1 from "../components/CardComponent1";
import Head from "next/head";

const mainSkillset = [
  {
    title: "React",
    description: "Dummy description",
  },
  {
    title: "React",
    description: "Dummy description",
  },
  {
    title: "React",
    description: "Dummy description",
  },
];

export const Skills: React.FC = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-700 w-screen">
      <Head>
        <title> Skills </title>
      </Head>
      <div className="container px-5 pb-6 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-teal-500 tracking-widest font-medium title-font mb-1">
            Area of expertise
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-truegray-200">
            Skills &amp; Experiences
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {mainSkillset.map((skill, key) => {
            return (
              <CardComponent1
                title={skill.title}
                description={skill.description}
              ></CardComponent1>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col text-center w-full my-20">
        <h2 className="text-xs text-teal-500 tracking-widest font-medium title-font mb-1">
          Other technologies
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-truegray-200">
          University experiences and Tech backgrounds
        </h1>
      </div>

      <div className="container px-5 py-6 mx-auto">
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-teal-100 text-teal-500 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Shooting Stars
            </h2>
            <p className="leading-relaxed text-base">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine.
            </p>
            <a className="mt-3 text-teal-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              The Catalyzer
            </h2>
            <p className="leading-relaxed text-base">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine.
            </p>
            <a className="mt-3 text-teal-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-teal-100 text-teal-500 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24"
            >
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-teal-100 text-teal-500 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              The 400 Blows
            </h2>
            <p className="leading-relaxed text-base">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine.
            </p>
            <a className="mt-3 text-teal-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <button className="flex mx-auto mt-20 text-white bg-teal-500 border-0 py-2 px-8 focus:outline-none hover:bg-teal-600 rounded text-lg">
          Button
        </button>
      </div>
    </section>
  );
};

export default Skills;
