import SeactionHeading from "@/Components/Heading/SeactionHeading";
import Layout from "@/Components/Layout/Layout";
import Section from "@/Components/Containers/Section";
import TypeWritter from "@/Components/Typewritter/TypeWritter";
import styles from "@/styles/Home.module.css";
import Container from "@/Components/Containers/Container";
import About from "@/Components/Sections/About";
import Skills from "@/Components/Sections/Skill";
import Resume from "@/Components/Sections/Resume";

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
        <div className={styles.home} id={"home"}>
          <Section>
            <Container>
              <h2>Prashant Yelurkar</h2>
              <TypeWritter designation={designation} />
            </Container>
          </Section>
        </div>

        <div id="about">
          <About />
        </div>
        <div id="skill">
          <Skills />
        </div>
        <div id="resume">
          <Resume />
        </div>
      </div>
    </Layout>
  );
}
