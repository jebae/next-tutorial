import { NextPage } from "next";
import styles from "~/styles/Home.module.css";

const Dog: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 style={{ fontSize: "100px" }}>🐾</h1>
      </main>
    </div>
  );
};

export default Dog;
