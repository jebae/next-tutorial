import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import styles from "~/styles/Home.module.css";
import Images from "~/components/Images";
import { getDogImages } from "~/services/dog";
import { useState } from "react";

export const getServerSideProps: GetServerSideProps<{ dogs: any[] }> = async () => {
  return {
    props: {
      dogs: await getDogImages(),
    },
  };
};

interface Props {
  dogs: any[];
}

const Dogs: NextPage<Props> = ({ dogs }) => {
  const [ active, setActive ] = useState(false);

  const handleClick = () => {
    setActive(prev => !prev);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Dogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Dogs</h1>
        {active
          ? (
            <>
              <Head>
                <title key="hi">Its dogs page</title>
              </Head>
              <button onClick={handleClick}>reset</button>
            </>
          ) : <button onClick={handleClick}>change title</button>}
        <Images type="dog" images={dogs} />
      </main>
    </div>
  );
};

export default Dogs;
