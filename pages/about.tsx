import jkbtumpalan_avatar from "../assets/jkbtumpalan_avatar.jpg";
import Head from "next/head";

export const About: React.FC = () => {
  return (
    <section className="text-gray-600 body-font w-screen bg-gray-700">
      <Head>
        <title> About </title>
      </Head>

      <div className="container px-5 py-5 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="https://dummyimage.com/1200x500"
            ></img>
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
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
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-truegray-500 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-base mb-4 text-white">
                A competitive and skillful undergraduate Computer Science
                student passionate in creating computer applications and
                building modern progressive web applications.
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
