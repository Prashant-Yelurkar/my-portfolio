import { ReactElement, JSXElementConstructor } from "react";
import styles from "./st.module.css";

export default function Grid(props: {
  gap: number;
  col: any;
  row: any;
  children: ReactElement<any, string | JSXElementConstructor<any>>;
}) {
  return (
    <div
      style={{
        gap: props.gap + "px",
        display: "grid",
        gridTemplateColumns: props.col,
        gridTemplateRows: props.row,
      }}
    >
      {props.children}
    </div>
  );
}
