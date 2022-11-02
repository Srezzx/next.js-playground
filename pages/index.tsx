import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import generateRSS from "../lib/GenerateRssFeed";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <p>hello</p>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  // ........
  await generateRSS(); // calling to generate the feed
  return {
    props: { id: 1, name: "Ali" },
  };
  // ........
};
