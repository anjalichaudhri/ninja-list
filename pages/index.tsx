import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Ninja List | Home
        </title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h2 className={styles.title}>Home</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat esse ea
          ratione laudantium temporibus corrupti quas! Iure facere velit magnam
          voluptates, quam officiis doloremque sapiente blanditiis optio.
          Quisquam, placeat error?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat esse ea
          ratione laudantium temporibus corrupti quas! Iure facere velit magnam
          voluptates, quam officiis doloremque sapiente blanditiis optio.
          Quisquam, placeat error?
        </p>
        <Link legacyBehavior href="/ninjas"><a className={styles.btn}>Ninja Listing</a></Link>
      </div>
    </>
    
  );
}
