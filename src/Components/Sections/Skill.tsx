import { DataBases, FrameWorks, ProgrammingLanguages } from "@/Utils/data";
import RangeCard from "../Card/RangeCard";
import Container from "../Containers/Container";
import Grid from "../Containers/Grid";
import Section from "../Containers/Section";
import SectionHeading from "@/Components/Heading/SeactionHeading";
import styles from "./skill.module.css";

export default function Skills() {
  function Spacer() {
    return <div style={{ height: "20px" }} />;
  }

  function Heading(props: { title: string }) {
    const { title } = props;
    return (
      <h3>
        <strong>
          <i>
            <u>{title}</u>
          </i>
        </strong>
      </h3>
    );
  }

  return (
    <Section>
      <Container>
        <SectionHeading
          heading="Skills"
          underline={true}
          desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
        />
        <Spacer />

        <Heading title="Languages" />
        <Spacer />

        <Grid minmax={300} gap={30}>
          {ProgrammingLanguages.map((value, index) => (
            <RangeCard {...value} key={index} />
          ))}
        </Grid>
        <Spacer />

        <Heading title="FrameWorks" />
        <Spacer />
        <Grid minmax={300} gap={30}>
          {FrameWorks.map((value, index) => (
            <RangeCard {...value} key={index} />
          ))}
        </Grid>
        <Spacer />

        <Heading title="Data Base" />
        <Spacer />
        <Grid minmax={300} gap={30}>
          {DataBases.map((value, index) => (
            <RangeCard {...value} key={index} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
