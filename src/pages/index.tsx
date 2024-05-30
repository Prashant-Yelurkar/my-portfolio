import SeactionHeading from "@/Components/Heading/SeactionHeading";
import Layout from "@/Components/Layout/Layout";
import Section from "@/Components/Containers/Section";
import TypeWritter from "@/Components/Typewritter/TypeWritter";
import styles from "@/styles/Home.module.css";
import Container from "@/Components/Containers/Container";
import About from "@/Components/Sections/About";
import Skills from "@/Components/Sections/Skill";

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
        <Section>
          <div className={styles.home}>
            <Container>
              <h2>Prashant Yelurkar</h2>
              <TypeWritter designation={designation} />
            </Container>
          </div>
        </Section>
        <About />
        <Skills />
      </div>
    </Layout>
  );
}
