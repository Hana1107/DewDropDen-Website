import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    // code here
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to Dewdrop Den</h1>
        <p>Your one-stop shop for unique accessories.</p>
      </main>
    </div>
  );
}
