import Head from "next/head";
import { useState } from "react";
import { Modal } from "../components/Modal";
import astar from "../assets/projects/astar.png";
import khalsuuchat from "../assets/projects/khalsuuchat.png";
import lightsout from "../assets/projects/lightsout.jpg";
import lolcode from "../assets/projects/lolcode.png";
import othello from "../assets/projects/othello.png";
import r_project from "../assets/projects/R_project.png";
import revive from "../assets/projects/revive.png";
import subsetsum from "../assets/projects/subsetsum.png";
import taks from "../assets/projects/taks.png";
import noimage from "../assets/projects/noimage.jpg";
import pacman from "../assets/projects/pacman.jpg";

interface ProjectProps {
  modalTitle: string;
  modalContent: string;
  projectLink: string;
}

const projects: ProjectProps[] = [
  {
    modalTitle: "Revive Library",
    modalContent:
      "A web application that has basic CRUD functions for library.",
    projectLink: "https://github.com/JKBTumpalan/project-revive-library",
  },
  {
    modalTitle: "LOLCODE Interpreter",
    modalContent:
      "An interpreter for the LOLCODE language using Python with GUI",
    projectLink: "https://github.com/JKBTumpalan/cs124_lolcode.interpreter",
  },
  {
    modalTitle: "Project TAKS",
    modalContent:
      "A full-stack application for the city of balanga that has tax-management, news, and employee management features.",
    projectLink: "https://projecttaks.acssuplb.org",
  },
  {
    modalTitle: "KhalsuuChat",
    modalContent: "A centralized chat appplication using Vue and Firebase",
    projectLink: "https://khalsuuchat.web.app/",
  },
  {
    modalTitle: "Twitter Vue",
    modalContent:
      "An application that replicates the twitter web app tweet functionality using Vue.js",
    projectLink: "https://github.com/JKBTumpalan/twitter-vue",
  },
  {
    modalTitle: "Polynomial Regression and Simplex Solver",
    modalContent:
      "A polynomial regression solver and a custom-problem simplex solver. With GUI using Rshiny and Rstudio.",
    projectLink: "https://github.com/JKBTumpalan/CMSC-150",
  },
  {
    modalTitle: "Subset Sum Solver",
    modalContent: "A subset sum solver using backtracking, C.",
    projectLink:
      "https://github.com/JKBTumpalan/cmsc142-subsetsum-backtracking",
  },
  {
    modalTitle: "Othello",
    modalContent: "First game project using python CLI.",
    projectLink: "https://github.com/JKBTumpalan/CMSC12---Othello",
  },
  {
    modalTitle: "PACMAN! in Java",
    modalContent: "Game project using Java and JavaFX.",
    projectLink: "https://github.com/JKBTumpalan/CMSC-22-PACMAN-FINAL-PROJECT",
  },
  {
    modalTitle: "Lights Out!",
    modalContent: "A mobile game application using Kotlin, Android Studio.",
    projectLink: "https://github.com/JKBTumpalan/tumpalan_exer5_lightsOut",
  },
  {
    modalTitle: "8-puzzle solver using AI",
    modalContent:
      "8-puzzle solver using A-star search, with GUI using python tkinter.",
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
    <div className="text-gray-600 body-font bg-gray-800 w-screen min-h-screen sm:pl-32 p-10">
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
            still working hard to master my current skill set (or add to it) to
            be able to deliver more quality projects in the future.
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
          <div className="loader flex flex-wrap lg:w-1/2 w-full ">
            <div
              onClick={() => {
                openModal(0);
              }}
              className="animate-scale-in-center md:p-2 p-1 md:h-96 w-1/2 transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={revive}
              ></img>
            </div>
            <div
              onClick={() => {
                openModal(1);
              }}
              className="animate-scale-in-center md:p-2 p-1 md:h-96 w-1/2 transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={lolcode}
              ></img>
            </div>
            <div
              onClick={() => {
                openModal(2);
              }}
              className="animate-slide-in-elliptic-top-fwd md:p-2 p-1 md:h-96 w-full transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={taks}
              ></img>
            </div>
          </div>
          <div className="flex flex-wrap lg:w-1/2 w-full ">
            <div
              onClick={() => {
                openModal(3);
              }}
              className="animate-slide-in-elliptic-top-fwd md:p-2 p-1 md:h-96 w-full transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={khalsuuchat}
              ></img>
            </div>
            <div
              onClick={() => {
                openModal(4);
              }}
              className="animate-scale-in-center md:p-2 p-1 md:h-96 w-1/2 transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={noimage}
              ></img>
            </div>
            <div
              onClick={() => {
                openModal(5);
              }}
              className="animate-scale-in-center md:p-2 p-1 md:h-96 w-1/2 transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={r_project}
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
              className="animate-scale-in-center md:p-2 p-1 md:h-96 w-1/2 transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={subsetsum}
              ></img>
            </div>
            <div
              onClick={() => {
                openModal(7);
              }}
              className="animate-scale-in-center md:p-2 p-1 md:h-96 w-1/2 transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={othello}
              ></img>
            </div>
            <div
              onClick={() => {
                openModal(8);
              }}
              className="animate-slide-in-elliptic-top-fwd md:p-2 p-1 md:h-96 w-full transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={pacman}
              ></img>
            </div>
          </div>
          <div className="flex flex-wrap lg:w-1/2 w-full ">
            <div
              onClick={() => {
                openModal(9);
              }}
              className="animate-slide-in-elliptic-top-fwd md:p-2 p-1 md:h-96 w-full transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={lightsout}
              ></img>
            </div>
            <div
              onClick={() => {
                openModal(10);
              }}
              className="animate-scale-in-center md:p-2 p-1 md:h-96 w-1/2 transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={astar}
              ></img>
            </div>
            <div
              onClick={() => {
                openModal(11);
              }}
              className="animate-scale-in-center md:p-2 p-1 md:h-96 w-1/2 transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={noimage}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
