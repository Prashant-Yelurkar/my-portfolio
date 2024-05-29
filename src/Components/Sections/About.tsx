import { myDetails } from "@/Utils/data";
import BulletCard from "../Card/BulletCard";
import Container from "../Containers/Container";
import Flex from "../Containers/Flex";
import Grid from "../Containers/Grid";
import SeactionHeading from "../Heading/SeactionHeading";
import styles from "./about.module.css";
import me from "@/Assets/images/me.png";
import Image from "next/image";
import Section from "../Containers/Section";
export default function About() {
  return (
    <Section>
      <Container>
        <div className={styles.about}>
          <Flex col={true} gap={25}>
            <SeactionHeading
              heading={"About"}
              underline={true}
              desc=" Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consequuntur maxime quos omnis in ipsa aliquid laborum? Alias
                  expedita, tenetur temporibus iste deserunt praesentium quo
                  sint ipsa officiis nihil sit, quam et impedit ratione magnam
                  consequatur dignissimos? Quod laboriosam, delectus magnam
                  eveniet, est dignissimos harum obcaecati ducimus aliquid id
                  modi soluta!"
            />
            <Flex row={true} gap={25}>
              <div className={styles.photo}>
                <Image src={me} alt={"me"} />
              </div>
              <div>
                <Flex col={true} gap={20}>
                  <SeactionHeading
                    heading={"Full Stack Developer & Data Anylist "}
                    underline={false}
                    desc=" Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Similique totam perferendis quidem eaque,
                            doloremque deleniti error molestiae harum. Alias
                            sunt architecto sed! Commodi."
                  />

                  <Grid minmax={350} gap={20}>
                    {myDetails.map((value, _index) => {
                      return <BulletCard {...value} key={_index} />;
                    })}
                  </Grid>
                </Flex>
              </div>
            </Flex>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              temporibus illo quo inventore soluta praesentium velit quidem
              saepe quas dolores ullam est magnam architecto sed fuga officia,
              in sequi dolorem!
            </p>
          </Flex>
        </div>
      </Container>
    </Section>
  );
}
