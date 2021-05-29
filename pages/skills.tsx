import { Description } from "@headlessui/react/dist/components/description/description";
import jkbtumpalan_avatar from "../assets/jkbtumpalan_avatar.jpg";
import CardComponent1 from "../components/CardComponent1";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faCss3,
  faCuttlefish,
  faPython,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const mainSkillset = [
  {
    title: "React",
    description: "mostly used React for creating web applications.",
    icon: faReact,
  },
  {
    title: "JavaScript",
    description:
      "Used javascript for nodeJS back-end servers and MERN stack applications, was also able to use typescript lately.",
    icon: faJs,
  },
  {
    title: "SQL",
    description:
      "Used different NoSQL and SQL databases (MariaDB, PostgreSQL, MongoDB), ORMs (Mongoose, Sequelize), and query languages like GraphQL.",
    icon: faDatabase,
  },
];

const subSkillset = [
  {
    title: "Python",
    description:
      "used python to create projects like a programming language interpreter, a CLI-othello, etc.",
    icon: faPython,
  },
  {
    title: "Vue",
    description: "used Vuejs for some web applications.",
    icon: faVuejs,
  },
  {
    title: "CSS",
    description:
      "used CSS, including SASS as preprocessor and tailwind as framework.",
    icon: faCss3,
  },
  {
    title: "HTML",
    description: "basic HTML knowledge.",
    icon: faCss3,
  },
  {
    title: "C",
    description:
      "used C in different university projects and exercises concerning linked list, data structures, algorithm analysis, POSIX threads, parallel programming, etc.",
    icon: faCuttlefish,
  },
];

export const Skills: React.FC = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-700 w-screen sm:pl-30 p-20">
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
        <div className="flex flex-wrap justify-center -m-4">
          {mainSkillset.map((skill, key) => {
            return (
              <CardComponent1
                title={skill.title}
                description={skill.description}
                icon={skill.icon}
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
        {subSkillset.map((skill, key) => {
          return (
            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="sm:w-24 sm:h-24 h-16 w-16 sm:mr-10 inline-flex items-center justify-center rounded-full bg-teal-100 text-teal-500 flex-shrink-0">
                <FontAwesomeIcon
                  className="w-4 cursor-pointer text-blue-400 hover:text-teal-700 transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  size="lg"
                  icon={skill.icon}
                />
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-teal-600 text-lg title-font font-medium mb-2">
                  {skill.title}
                </h2>
                <p className="leading-relaxed text-base text-truegray-200">
                  {skill.description}
                </p>
              </div>
            </div>
          );
        })}
        <Link href="/works" passHref>
          <a>
            <button className="flex mx-auto mt-20 text-white bg-teal-700 border-0 py-2 px-8 focus:outline-none hover:bg-teal-600 rounded text-lg z-20">
              Check works
            </button>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Skills;
