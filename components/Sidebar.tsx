import Image from "next/image";
import avatar from "../assets/jkbtumpalan_avatar.jpg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCogs,
  faEye,
  faEnvelope,
  IconDefinition,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Router, useRouter } from "next/router";

const navLinks = [
  {
    text: "HOME",
    pathname: "/",
    active: true,
    icon: faHome,
  },
  {
    text: "ABOUT",
    pathname: "/",
    active: true,
    icon: faUser,
  },
  {
    text: "SKILLS",
    pathname: "/",
    active: true,
    icon: faCogs,
  },
  {
    text: "WORKS",
    pathname: "/",
    active: true,
    icon: faEye,
  },
  {
    text: "CONTACT",
    pathname: "/",
    active: true,
    icon: faEnvelope,
  },
];

interface NavLinkProps {
  text: String;
  pathname: String;
  active: boolean;
  icon: IconDefinition;
}

const NavbarLink: React.FC<NavLinkProps> = ({
  text,
  pathname,
  active,
  icon,
}) => {
  return (
    <Link href={`${pathname}`} passHref>
      <a className="flex flex-row items-center text-teal-400 w-full dark:bg-gray-700 dark:text-gray-200">
        <div className="group w-full mt-3 transition duration-250 ease-in-out transform hover:scale-110">
          <div className="block group-hover:hidden h-10 w-full text-center">
            <FontAwesomeIcon
              className="w-full text-coolgray-400"
              size="2x"
              icon={icon}
              fixedWidth
            />
          </div>
          <div
            className={`pt-2 hidden group-hover:block w-full text-xs h-10 text-center opacity-0 transition-opacity duration-500 ease-in transform hover:opacity-100 hover:scale-110`}
          >
            {text}
          </div>
        </div>
      </a>
    </Link>
  );
};

export const Sidebar: React.FC = ({ children }) => {
  const router = useRouter();

  return (
    <div className="sm:inline-block hidden fixed w-1/7 top-0 left-0">
      <div className="flex flex-col w-20 justify-end h-screen py-8 bg-black border-r dark:bg-gray-800 dark:border-gray-600">
        <div className="flex flex-col items-center justify-start h-1/5">
          <Image
            className="object-cover w-10 h-10 mx-2 rounded-full"
            width={45}
            height={45}
            src={avatar}
            alt="avatar"
          />
        </div>

        <div className="flex flex-col justify-center items-center h-3/5 w-full">
          {navLinks.map((link, key) => {
            return (
              <NavbarLink
                key={key}
                text={link.text}
                pathname={link.pathname}
                active={router.pathname === link.pathname ? true : false}
                icon={link.icon}
              />
            );
          })}
        </div>

        <div className="flex flex-col justify-end items-center flex-1 h-1/5">
          <div className="mt-4">
            <FontAwesomeIcon
              className="w-full cursor-pointer text-coolgray-400 hover:text-teal-700 transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              size="1x"
              icon={faFacebook}
            />
          </div>
          <div className="mt-4">
            <FontAwesomeIcon
              className="w-full cursor-pointer text-coolgray-400 hover:text-teal-700 transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              size="1x"
              icon={faLinkedin}
            />
          </div>
          <div className="mt-4">
            <FontAwesomeIcon
              className="w-full cursor-pointer text-coolgray-400 hover:text-teal-700 transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              size="1x"
              icon={faTwitter}
            />
          </div>
          <div className="mt-4">
            <FontAwesomeIcon
              className="w-full cursor-pointer text-coolgray-400 hover:text-teal-700 transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              size="1x"
              icon={faInstagram}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
