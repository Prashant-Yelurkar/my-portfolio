import { ResumeData } from "@/Utils/data";
import {
  ResumeSummaryCard,
  ResumeEducationCard,
  ResumeExpericenceCard,
} from "../Card/ResumeCards";
import Container from "../Containers/Container";
import Flex from "../Containers/Flex";
import Section from "../Containers/Section";
import SeactionHeading from "../Heading/SeactionHeading";
import styles from "./resume.module.css";
import Link from "next/link";

export default function Resume() {
  return (
    <Section>
      <Container>
        <Flex direction={"col"} gap={40}>
          <SeactionHeading
            heading={"Resume"}
            underline={true}
            desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
          />
          <Flex direction={"row"} gap={30}>
            <div>
              <h2>Summary</h2>
              <div className={styles.leftBorder}>
                <ResumeSummaryCard {...ResumeData.summary} />
              </div>
              <br />
              <h2>Education</h2>

              <div className={styles.leftBorder}>
                {ResumeData.education.map((item, index) => {
                  return <ResumeEducationCard key={index} {...item} />;
                })}
              </div>
            </div>
            <div>
              <h2>Professional Experience</h2>

              <div className={styles.leftBorder}>
                {ResumeData.exprience.map((item, index) => {
                  return <ResumeExpericenceCard key={index} {...item} />;
                })}
              </div>
            </div>
          </Flex>
          <Link legacyBehavior href="@/Assets/files/resume.pdf">
            <a download>Download</a>
          </Link>
        </Flex>
      </Container>
    </Section>
  );
}
