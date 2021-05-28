import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Home </title>
      </Head>

      <div className="w-full h-screen">
        <title> Home </title>
        <div className="flex justify-left items-center space-x-2 border-2 border-red-500">
          <span className="w-10 h-10 text-emerald-500 font-mono hover:animate-fade-in-down">
            {" "}
            HELLO
          </span>
        </div>{" "}
        <div className="flex justify-left items-center space-x-2 border-2 border-red-500">
          <span className="w-10 h-10 text-emerald-500 font-mono hover:animate-fade-in-down">
            {" "}
            H
          </span>
          <span className="w-10 h-10 text-emerald-500 font-mono hover:animate-fade-out-down">
            {" "}
            E
          </span>
          <span className="w-10 h-10 text-emerald-500 font-mono hover:animate-fade-in-up">
            L
          </span>
          <span className="w-10 h-10 text-emerald-500 font-mono hover:animate-fade-out-up">
            L
          </span>
          <span className="w-10 h-10 text-emerald-500 font-mono hover:animate-fade-out-up">
            {" "}
            O
          </span>
        </div>
      </div>
    </div>
  );
}
