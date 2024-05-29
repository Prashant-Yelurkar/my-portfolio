import { ReactElement, JSXElementConstructor } from "react";
import styles from "./st.module.css";
export default function Section(props: {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
}) {
  return <section className={styles.section}>{props.children}</section>;
}
