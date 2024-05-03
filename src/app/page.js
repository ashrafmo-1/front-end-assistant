import styles from "./page.module.css";
import Banner from "./layout/banars/Banners";
import NavgationBar from "./layout/navbar/nav";
import HomePage from "./home/page";
import Contributors from "./admins/page";
import Catigory from "./sectionBoxesCatigory/page";
import Footer from "./layout/footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <NavgationBar />
      <HomePage />
      <section className="" id="admins">
        <Contributors />
      </section>
      <section className="mt-10" id="catigorys">
        <Catigory />
      </section>
      <section className="border border-sky-900 pt-6" id="footer" style={{backgroundColor: "var(--BGC)"}}>
        <Footer />
      </section>
    </main>
  );
}