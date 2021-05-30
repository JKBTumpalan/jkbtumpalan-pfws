import Head from "next/head";
import { useState } from "react";
import { Modal } from "../components/Modal";

interface ProjectProps {
  modalTitle: string;
  modalContent: string;
  projectLink: string;
}

const projects: ProjectProps[] = [
  {
    modalTitle: "Project TAKS",
    modalContent: "Dummy Project",
    projectLink: "https://projecttaks.acssuplb.org",
  },
  {
    modalTitle: "KhalsuuChat",
    modalContent: "Dummy Project",
    projectLink: "https://khalsuuchat.web.app/",
  },
  {
    modalTitle: "Revive Library",
    modalContent: "Dummy Project",
    projectLink: "https://github.com/JKBTumpalan/project-revive-library",
  },
  {
    modalTitle: "LOLCODE Interpreter",
    modalContent: "Dummy Project",
    projectLink: "https://github.com/JKBTumpalan/cs124_lolcode.interpreter",
  },
  {
    modalTitle: "Twitter Vue",
    modalContent: "Dummy Project",
    projectLink: "https://github.com/JKBTumpalan/twitter-vue",
  },
  {
    modalTitle: "Lights Out!",
    modalContent: "Dummy Project",
    projectLink: "https://github.com/JKBTumpalan/tumpalan_exer5_lightsOut",
  },
  {
    modalTitle: "Subset Sum Solver",
    modalContent: "Dummy Project",
    projectLink:
      "https://github.com/JKBTumpalan/cmsc142-subsetsum-backtracking",
  },
  {
    modalTitle: "Othello",
    modalContent: "Dummy Project",
    projectLink: "https://github.com/JKBTumpalan/CMSC12---Othello",
  },
  {
    modalTitle: "PACMAN! in Java",
    modalContent: "Dummy Project",
    projectLink: "https://github.com/JKBTumpalan/CMSC-22-PACMAN-FINAL-PROJECT",
  },
  {
    modalTitle: "Polynomial Regression and Simplex Solver",
    modalContent: "Dummy Project",
    projectLink: "https://github.com/JKBTumpalan/CMSC-150",
  },
  {
    modalTitle: "8-puzzle solver using AI",
    modalContent: "Dummy Project",
    projectLink:
      "https://github.com/CMSC-170-1st-Sem-2020-2021/exer03-a-star-search-JKBTumpalan",
  },
  {
    modalTitle: "Dummy project",
    modalContent: "Dummy Project",
    projectLink: "Dummy Project",
  },
];

export const Works: React.FC = () => {
  let [isOpen, setIsOpen] = useState<boolean>(false);
  let [project, setProject] = useState<ProjectProps>(projects[0]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(projectIndex: number) {
    setProject(projects[projectIndex]);
    setIsOpen(true);
  }

  return (
    <div className="text-gray-600 body-font bg-gray-700 w-screen min-h-screen sm:pl-32 p-10">
      <Head>
        <title> Works </title>
      </Head>

      <div className="container px-5 py-6 mx-auto flex flex-col justify-evenly">
        <div className="flex w-full sm:flex-row flex-col justify-around">
          <div className="flex flex-col ">
            <h2 className="text-xs text-teal-500 tracking-widest font-medium title-font">
              Work
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-truegray-200">
              Projects showcase
            </h1>
          </div>
          <p className="lg:w-1/2 leading-relaxed text-base text-white ml-5 my-5 ">
            Personal and university projects using different technologies. I am
            still working hard to add more projects and hopefully add more to my
            current skillset.
          </p>
        </div>
        <Modal
          modalTitle={project.modalTitle}
          modalContent={project.modalContent}
          projectLink={project.projectLink}
          modalState={isOpen}
          closeModal={closeModal}
        />
        <div className="flex lg:flex-row flex-col mt-10">
          <div className="flex flex-wrap lg:w-1/2 w-full ">
            <div
              onClick={() => {
                openModal(0);
              }}
              className="md:p-2 p-1 w-1/2 transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/500x300"
              ></img>
            </div>
            <div
              onClick={() => {
                openModal(1);
              }}
              className="md:p-2 p-1 w-1/2 transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/501x301"
              ></img>
            </div>
            <div
              onClick={() => {
                openModal(2);
              }}
              className="md:p-2 p-1 w-full transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://dummyimage.com/600x360"
              ></img>
            </div>
          </div>
          <div className="flex flex-wrap lg:w-1/2 w-full ">
            <div
              onClick={() => {
                openModal(3);
              }}
              className="md:p-2 p-1 w-full transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://dummyimage.com/601x361"
              ></img>
            </div>
            <div
              onClick={() => {
                openModal(4);
              }}
              className="md:p-2 p-1 w-1/2 transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/502x302"
              ></img>
            </div>
            <div
              onClick={() => {
                openModal(5);
              }}
              className="md:p-2 p-1 w-1/2 transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/503x303"
              ></img>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col">
          <div className="flex flex-wrap lg:w-1/2 w-full ">
            <div
              onClick={() => {
                openModal(6);
              }}
              className="md:p-2 p-1 w-1/2 transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/500x300"
              ></img>
            </div>
            <div
              onClick={() => {
                openModal(7);
              }}
              className="md:p-2 p-1 w-1/2 transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/501x301"
              ></img>
            </div>
            <div
              onClick={() => {
                openModal(8);
              }}
              className="md:p-2 p-1 w-full transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://dummyimage.com/600x360"
              ></img>
            </div>
          </div>
          <div className="flex flex-wrap lg:w-1/2 w-full ">
            <div
              onClick={() => {
                openModal(9);
              }}
              className="md:p-2 p-1 w-full transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://dummyimage.com/601x361"
              ></img>
            </div>
            <div
              onClick={() => {
                openModal(10);
              }}
              className="md:p-2 p-1 w-1/2 transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/502x302"
              ></img>
            </div>
            <div
              onClick={() => {
                openModal(11);
              }}
              className="md:p-2 p-1 w-1/2 transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
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
