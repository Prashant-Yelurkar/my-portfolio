import { DataBases, FrameWorks, ProgrammingLanguages } from "@/Utils/data";
import RangeCard from "../Card/RangeCard";
import Container from "../Containers/Container";
import Grid from "../Containers/Grid";
import Section from "../Containers/Section";
import SeactionHeading from "../Heading/SeactionHeading";
import styles from "./skill.module.css";
export default function Skills() {
  return (
    <Section>
      <Container>
        <SeactionHeading
          heading={"Skills"}
          underline={true}
          desc=" Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
        />
        <h1>Languages</h1>

        <Grid minmax={300} gap={30}>
          {ProgrammingLanguages.map((value, index) => {
            return <RangeCard {...value} key={index} />;
          })}
        </Grid>
        <h1>FrameWorks</h1>
        <Grid minmax={300} gap={30}>
          {FrameWorks.map((value, index) => {
            return <RangeCard {...value} key={index} />;
          })}
        </Grid>
        <h1>Data Base</h1>
        <Grid minmax={300} gap={30}>
          {DataBases.map((value, index) => {
            return <RangeCard {...value} key={index} />;
          })}
        </Grid>
      </Container>
    </Section>
  );
}
