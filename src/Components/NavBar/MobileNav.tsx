import styles from "./mv.module.css";
import Image from "next/image";
import menuIcon from "@/Assets/icons/hamburger.svg";
import { MouseEventHandler } from "react";

export default function MobileNav(props: {
  fn?: MouseEventHandler<HTMLImageElement>;
}) {
  const handleClick = props.fn || (() => {});

  return (
    <div className={styles.mobnav}>
      <Image onClick={handleClick} src={menuIcon} alt="menuIcon" />
    </div>
  );
}
