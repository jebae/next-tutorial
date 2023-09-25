import type { GetStaticPropsResult, NextPage } from "next";
import Head from "next/head";
import styles from "~/styles/Home.module.css";
import Images from "~/components/Images";
import { getCatImages } from "~/services/cat";

export const getServerSideProps = async (): Promise<GetStaticPropsResult<{ cats: any[] }>> => {
  return {
    props: {
      cats: await getCatImages(),
    },
  };
};

interface Props {
  cats: any[];
}

const Cats: NextPage<Props> = ({ cats }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Cats</h1>
        <Images type="cat" images={cats} />
      </main>
    </div>
  );
};

export default Cats;
