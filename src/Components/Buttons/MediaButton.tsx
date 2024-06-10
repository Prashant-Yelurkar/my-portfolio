import Link from "next/link";
import styles from "./mbt.module.css";
import { UrlObject } from "url";
import { mediaData } from "@/Utils/data";

interface MediaProps {
  link: string | UrlObject;
  name: string;
}
export default function MediaButton({ link, name }: MediaProps) {
  return (
    <div>
      <Link className={styles.mediaButton} href={link}>
        {mediaData.filter((obj) => obj.name === name)[0].icon}
      </Link>
    </div>
  );
}
