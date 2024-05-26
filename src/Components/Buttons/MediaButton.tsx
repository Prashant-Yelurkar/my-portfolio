import Image from "next/image";
import Link from "next/link";
import styles from "./mbt.module.css";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { UrlObject } from "url";
export default function MediaButton(props: {
  link: string | UrlObject;
  icon: string | StaticImport;
  name: string;
}) {
  return (
    <div>
      <Link className={styles.mediaButton} href={props.link}>
        <Image src={props.icon} alt={props.name} />
      </Link>
    </div>
  );
}
