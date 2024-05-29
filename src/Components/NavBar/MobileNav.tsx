import styles from "./mv.module.css";
import Image from "next/image";
import menuIcon from "@/Assets/icons/hamburger.svg";
import { MouseEventHandler } from "react";
import closeIcon from "@/Assets/icons/closeIcon.svg";
export default function MobileNav(props: { fn: () => void; mobNav: any }) {
  const handleClick = props.fn || (() => {});

  return (
    <div className={styles.mobnav}>
      {props.mobNav ? (
        <Image onClick={handleClick} src={closeIcon} alt="menuIcon" />
      ) : (
        <Image onClick={handleClick} src={menuIcon} alt="menuIcon" />
      )}
    </div>
  );
}
