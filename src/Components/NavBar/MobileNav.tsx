import styles from "./mv.module.css";
import { MenuClose, MenuOpen } from "@/Assets/icons";

interface MobileNavProps {
  fn: Function;
  mobView: any;
}
export default function MobileNav({ fn, mobView }: MobileNavProps) {
  return (
    <div className={styles.mobnav}>
      {mobView ? (
        <MenuClose onClick={() => fn()} />
      ) : (
        <MenuOpen onClick={() => fn()} />
      )}
    </div>
  );
}
