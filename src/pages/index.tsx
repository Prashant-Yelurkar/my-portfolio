import SeactionHeading from "@/Components/Heading/SeactionHeading";
import Layout from "@/Components/Layout/Layout";
import Section from "@/Components/Section/Section";
import TypeWritter from "@/Components/Typewritter/TypeWritter";
import styles from "@/styles/Home.module.css";
import me from "@/Assets/images/me.png";
import Image from "next/image";
import Grid from "@/Components/Section/Grid";
import BulletCard from "@/Components/Card/BulletCard";
import { myDetails } from "@/Utils/data";

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
            <h2>Prashant Yelurkar</h2>
            <TypeWritter designation={designation} />
          </div>
        </Section>
        <Section>
          <div className={styles.about}>
            <Grid col={"1fr"} row={"0.5fr 1fr 6fr"} gap={25}>
              <>
                <SeactionHeading heading={"About"} underline={true} />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consequuntur maxime quos omnis in ipsa aliquid laborum? Alias
                  expedita, tenetur temporibus iste deserunt praesentium quo
                  sint ipsa officiis nihil sit, quam et impedit ratione magnam
                  consequatur dignissimos? Quod laboriosam, delectus magnam
                  eveniet, est dignissimos harum obcaecati ducimus aliquid id
                  modi soluta!
                </p>
                <Grid col={"1fr 2fr"} row={"1fr"} gap={20}>
                  <>
                    <div>
                      <Image src={me} alt={"me"} />
                    </div>
                    <div>
                      <Grid col={"1fr"} row={"0.8fr 1.2fr 2fr 1fr"} gap={10}>
                        <>
                          <SeactionHeading
                            heading={"Full Stack Developer & Data Anylist "}
                            underline={false}
                          />
                          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Similique totam perferendis quidem eaque,
                            doloremque deleniti error molestiae harum. Alias
                            sunt architecto sed! Commodi.
                          </p>
                          <div>
                            <Grid col={"1fr 1fr"} row="repeat(4, 1fr)" gap={20}>
                              {myDetails.map((value, index) => {
                                return <BulletCard {...value} key={index} />;
                              })}
                            </Grid>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maiores temporibus illo quo inventore soluta
                            praesentium velit quidem saepe quas dolores ullam
                            est magnam architecto sed fuga officia, in sequi
                            dolorem!
                          </p>
                        </>
                      </Grid>
                    </div>
                  </>
                </Grid>
              </>
            </Grid>
          </div>
        </Section>
      </div>
    </Layout>
  );
}
