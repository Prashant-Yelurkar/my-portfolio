import Layout from "@/Components/Layout/Layout";
import TypeWritter from "@/Components/Typewritter/TypeWritter";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

const designation = [
  "Data Scientist",
  "Data Anylist",
  "Developer",
  "Designer",
  "Freelancer",
];
export default function Index() {
  return (
    <Layout title="Prashant Yelurkar">
      <div className={styles.main}>
        <section className={styles.section}>
          <div className={styles.home}>
            <h2>Prashant Yelurkar</h2>
            <TypeWritter designation={designation} />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.about}>about</div>
        </section>
      </div>
    </Layout>
  );
}
