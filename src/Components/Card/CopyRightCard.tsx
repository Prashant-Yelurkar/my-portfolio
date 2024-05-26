import Link from "next/link";
import styles from "./crc.module.css";
export default function CopyRightCard() {
  return (
    <div className={styles.copyRight}>
      <h5>© 2024 All Rights Reserved</h5>
      <p>
        Designed by <Link href={"/"}>Prashant</Link>
      </p>
    </div>
  );
}
