import Image from "next/image";
import styles from "./nlc.module.css";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { UrlObject } from "url";
export default function NavLinkcard(props: {
  link: string | UrlObject;
  icon: any;
  name: string;
  scrollTo: Function;
  selected: string;
}) {
  const { link, icon, name, scrollTo, selected } = props;
  return (
    <div
      className={`${styles.nav} ${selected == link ? styles.selected : ""}`}
      onClick={() => scrollTo(link)}
    >
      {icon}
      <span>{name}</span>
    </div>
  );
}
