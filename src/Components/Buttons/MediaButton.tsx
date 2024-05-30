import Image from "next/image";
import Link from "next/link";
import styles from "./mbt.module.css";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { UrlObject } from "url";
interface MediaProps {
  link: string | UrlObject;
  icon: any;
  name: string;
}
export default function MediaButton({ link, icon, name }: MediaProps) {
  return (
    <div>
      <Link className={styles.mediaButton} href={link}>
        {icon}
      </Link>
    </div>
  );
}
