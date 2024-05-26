import Image from "next/image";
import styles from "./nlc.module.css";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { UrlObject } from "url";
export default function NavLinkcard(props: {
  link: string | UrlObject;
  icon: string | StaticImport;
  name: string;
}) {
  return (
    <div>
      <Link href={props.link} className={styles.nav}>
        <Image src={props.icon} alt="home" priority />
        <span>{props.name}</span>
      </Link>
    </div>
  );
}
