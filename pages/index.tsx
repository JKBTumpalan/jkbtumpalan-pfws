import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import home_avatar from "../assets/home_avatar.png";

const nameText: string[] = [
  "J",
  "o",
  "h",
  "n",
  " ",
  "K",
  "a",
  "r",
  "l",
  " ",
  "T",
  "u",
  "m",
  "p",
  "a",
  "l",
  "a",
  "n",
  ",",
];

const descText: string[] = [
  "a",
  " ",
  "d",
  "e",
  "v",
  "e",
  "l",
  "o",
  "p",
  "e",
  "r",
  ".",
];
export default function Home() {
  return (
    <div className="bg-gray-800 w-screen sm:pl-30 p-20 md:pt-10 pt-64">
      <link
        rel="stylesheet"
        media="screen"
        href="https://fontlibrary.org//face/myfirstfont"
        type="text/css"
      />
      <Head>
        <title> Home </title>
      </Head>
      <div className="sm:w-1/2 w-full sm:p-10">
        <div className="animate-fade-in-up duration-700 text-white">
          <span className="font-extrabold md:text-5xl text-3xl hover:text-teal-500">
            H
          </span>
          <span className="font-extrabold md:text-5xl text-3xl hover:text-teal-500">
            i
          </span>
          &nbsp;
          <span className="font-extrabold md:text-5xl text-3xl hover:text-teal-500">
            t
          </span>
          <span className="font-extrabold md:text-5xl text-3xl hover:text-teal-500">
            h
          </span>
          <span className="font-extrabold md:text-5xl text-3xl hover:text-teal-500">
            e
          </span>
          <span className="font-extrabold md:text-5xl text-3xl hover:text-teal-500">
            r
          </span>
          <span className="font-extrabold md:text-5xl text-3xl hover:text-teal-500">
            e
          </span>
          <span className="font-extrabold md:text-5xl text-3xl hover:text-teal-500">
            ,
          </span>
        </div>
        <div className="animate-fade-in-up duration-700 text-white">
          <span className="font-extrabold md:text-5xl text-3xl hover:text-teal-500">
            I'
          </span>
          <span className="font-extrabold md:text-5xl text-3xl hover:text-teal-500">
            m&nbsp;&nbsp;
          </span>
          <div className=" animate-wiggle inline-block">
            {nameText.map((letter, key) => {
              return (
                <span
                  className={
                    `font-extrabold md:text-5xl text-3xl hover:text-white ` +
                    `${
                      ["J", "K", "T"].includes(letter)
                        ? "text-rose-600"
                        : "text-white"
                    }`
                  }
                >
                  {letter}
                </span>
              );
            })}
          </div>
        </div>
        <div className="animate-fade-in-up duration-700  inline-block">
          {descText.map((letter, key) => {
            return (
              <span className="hover:text-teal-500 font-extrabold md:text-5xl text-3xl text-white">
                {letter}
              </span>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center items-center space-evenly sm:w-1/2 w-full animate-fade-in-up duration-700 sm:mt-5 mt-10">
        <div className="mx-5 animate-pulse ease duration-300">
          <a
            href="https://linkedin.com/in/JKBTumpalan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="w-20 cursor-pointer text-teal-500 hover:text-teal-700 transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              size="2x"
              icon={faLinkedin}
            />
          </a>
        </div>
        <div className="mx-5 animate-pulse ease duration-300">
          <a
            href="https://github.com/JKBTumpalan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="w-20 cursor-pointer text-teal-500 hover:text-teal-700 transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              size="2x"
              icon={faGithub}
            />
          </a>
        </div>
        <div className="mx-5 animate-pulse ease duration-300">
          <a
            href="https://instagram.com/khalsuu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="w-20 cursor-pointer text-teal-500 hover:text-teal-700 transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              size="2x"
              icon={faInstagram}
            />
          </a>
        </div>
      </div>
      <div className="lg:absolute mx-auto lg:top-0 lg:left-0 w-full lg:h-screen lg:mt-0 md:-mt-24 sm:-mt-32 mt-16">
        <img
          src={home_avatar}
          className="object-contain animate-tracking-in-expand-fwd-top"
        ></img>
      </div>
      <div></div>
    </div>
  );
}
