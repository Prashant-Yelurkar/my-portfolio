import Image from "next/image";
import styles from "./bc.module.css";
import arrowIcon from "@/Assets/icons/arrowIcon.svg";
import Link from "next/link";
export default function BulletCard(props: {
  point: string | number;
  value: string | number;
  link: boolean;
}) {
  const linksUrl = {
    Email: "mailto:",
    Phone: "tel:",
    Website: "",
  };
  return (
    <div className={styles.bullet}>
      <Image src={arrowIcon} alt="bullet" />
      <span className={styles.key}> {props.point}: </span>

      {!props.link ? (
        <span>{props.value}</span>
      ) : (
        <Link href={linksUrl[props.point] + props.value}>{props.value}</Link>
      )}
    </div>
  );
}
