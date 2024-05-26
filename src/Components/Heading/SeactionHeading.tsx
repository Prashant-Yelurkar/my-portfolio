import styles from "./sh.module.css";

export default function SeactionHeading(props: {
  heading: string;
  underline: boolean;
}) {
  return (
    <h1 className={` ${props.underline ? styles.unferline : styles.heading}`}>
      {props.heading}
    </h1>
  );
}
