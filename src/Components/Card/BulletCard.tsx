import Image from "next/image";
import styles from "./bc.module.css";

import Link from "next/link";
import { ArrowRight } from "@/Assets/icons";

export default function BulletCard(props: {
  title: string;
  link?: string;
  value: string;
}) {
  const linksUrl: { [key: string]: string } = {
    Email: "mailto:",
    Phone: "tel:",
    Website: "",
  };

  const linkPrefix =
    linksUrl[props.title] !== undefined ? linksUrl[props.title] : "";

  return (
    <div className={styles.bullet}>
      <ArrowRight />
      <span className={styles.key}>{props.title}:</span>
      {props.link ? (
        <Link href={linkPrefix + props.link} className={styles.link}>
          {props.value}
        </Link>
      ) : (
        <span>{props.value}</span>
      )}
    </div>
  );
}
