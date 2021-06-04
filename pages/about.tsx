import jkbtumpalan_avatar from "../assets/jkbtumpalan_avatar.jpg";
import Head from "next/head";
import aboutpic from "../assets/pic1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faGamepad,
  faVolleyballBall,
} from "@fortawesome/free-solid-svg-icons";

export const About: React.FC = () => {
  return (
    <section className="text-gray-600 body-font w-screen bg-gray-800 sm:pl-30 p-20">
      <Head>
        <title> About </title>
      </Head>

      <div className="container px-5 py-5 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden animate-fade-in-up">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src={aboutpic}
            ></img>
          </div>
          <div className="flex flex-col sm:flex-row mt-10 animate-scale-in-center">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={jkbtumpalan_avatar}
                ></img>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-teal-500 text-lg">
                  John Karl Tumpalan
                </h2>
                <div className="w-2/3 h-1 bg-truegray-500 rounded mt-2 mb-4"></div>
                <div className="text-md text-white">About me</div>
                <div className="loader flex sm:flex-col flex-row space-around py-2 mt-2">
                  <div className="animate-bounce">
                    <FontAwesomeIcon
                      className="w-4 cursor-pointer sm:my-4 sm:mx-0 my-0 mx-4 text-blue-400 hover:text-teal-700 transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                      size="lg"
                      icon={faCode}
                    />
                  </div>
                  <div className="animate-bounce">
                    <FontAwesomeIcon
                      className="w-4 cursor-pointer sm:my-4 sm:mx-0 my-0 mx-4 text-blue-400 hover:text-teal-700 transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                      size="lg"
                      icon={faGamepad}
                    />
                  </div>
                  <div className="animate-bounce">
                    <FontAwesomeIcon
                      className="w-4 cursor-pointer sm:my-4 sm:mx-0 my-0 mx-4 text-blue-400 hover:text-teal-700 transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                      size="lg"
                      icon={faVolleyballBall}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-truegray-500 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-base mb-4 text-white">
                A competitive and skillful undergraduate Computer Science
                student passionate in creating computer applications and
                building modern web applications.
              </p>
              <p className="leading-relaxed text-base mb-4 text-white">
                Cheerful and well-organized person with organizational
                leadership experiences in{" "}
                <span className="text-teal-500">
                  {" "}
                  Records and Documentation{" "}
                </span>
              </p>
              <p className="leading-relaxed text-base mb-4 text-white">
                Fast-learner and focused.
              </p>
              <p className="leading-relaxed text-base mb-4 text-white">
                Currently interested in software engineering and development
                specifically in the field of
                <span className="text-teal-500"> Web Development </span> and
                <span className="text-teal-500"> Mobile Development </span>
              </p>
              <p className="leading-relaxed text-base mb-4 text-white">
                An avid gamer of competitive-shooter, MOBA, and RPG games. I
                also do casual sports activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
