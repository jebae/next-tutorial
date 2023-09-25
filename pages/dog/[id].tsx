import { GetServerSideProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import styles from "~/styles/Home.module.css";
import { getDog } from "~/services/dog";
import Image from "next/image";
import Link from "next/link";
import Meta from "~/components/Meta";

interface Props {
  url: string;
  breeds: { id: number, name: string }[];
  width: number;
  height: number;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async ({ params }) => {
  try {
    const { breeds = [], url = "", width, height } = await getDog(params?.id!);

    return {
      props: { breeds, url, width, height },
    };
  } catch {
    return {
      props: {},
      notFound: true,
    };
  }
};

const DogDetail: NextPage<Props> = ({ url, breeds, width, height }) => {
  const breedsNames = breeds?.map(({ name }) => name).join(", ") || "unknown";

  return (
    <div className={styles.container}>
      <Meta
        title={breedsNames}
        subtitle={`${width} x ${height}`}
        image={url}
      />
      <main className={styles.main}>
        <h1>{breedsNames}</h1>
        <Link href="/dogs">To list</Link>
        <Image
          src={url}
          alt="dog"
          width={width}
          height={height}
        />
      </main>
    </div>
  );
};

export default DogDetail;
