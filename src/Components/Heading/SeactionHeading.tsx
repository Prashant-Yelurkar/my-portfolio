import styles from "./sh.module.css";

export default function SeactionHeading(props: {
  heading: string;
  underline: boolean;
  desc?: string;
}) {
  return (
    <div>
      <h1 className={` ${props.underline ? styles.unferline : styles.heading}`}>
        {props.heading}
      </h1>
      <p>{props.desc}</p>
    </div>
  );
}
