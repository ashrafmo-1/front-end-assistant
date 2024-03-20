import styles from "./page.module.css";
import HomePage from "./pages/home/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomePage />
      <h1 className="text-6xl font-bold underline">
        Hello world!
      </h1>
    </main>
  );
}
