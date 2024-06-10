import Layout from "@/Components/Layout/Layout";
import Section from "@/Components/Containers/Section";
import TypeWritter from "@/Components/Typewritter/TypeWritter";
import styles from "@/styles/Home.module.css";
import Container from "@/Components/Containers/Container";
import About from "@/Components/Sections/About";
import Skills from "@/Components/Sections/Skill";
import Resume from "@/Components/Sections/Resume";
import { useEffect, useState } from "react";
import { getSocialMedia, getSkills } from "@/Actions/Controller";

const designation = [
  "Data Scientist",
  "Data Anylist",
  "Developer",
  "Designer",
  "Freelancer",
];
export default function Index() {
  const [media, setMedia] = useState([]);
  const [skills, setSkills] = useState({
    language: [],
    framework: [],
    database: [],
  });
  useEffect(() => {
    const getMedia = async () => {
      const response: any = await getSocialMedia();
      setMedia(response.data.data);
    };

    const getSkillsData = async () => {
      const response: any = await getSkills();
      setSkills(response.data.data[0]);
      console.log(response.data.data[0]);
    };
    getMedia();
    getSkillsData();
  }, []);
  return (
    <Layout title="Prashant Yelurkar" socialMedia={media}>
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
          <Skills skillsData={skills} />
        </div>
        <div id="resume">
          <Resume />
        </div>
      </div>
    </Layout>
  );
}
