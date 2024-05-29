import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";
import styles from "./st.module.css";
export default function Flex(props: {
  gap?: number;
  row?: any;
  col?: any;
  children:
    | string
    | number
    | bigint
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | Promise<AwaitedReactNode>
    | null
    | undefined;
}) {
  return (
    <div
      className={`${props.row ? styles.row : styles.col}`}
      style={{ display: "flex", gap: props.gap + "px" }}
    >
      {props.children}
    </div>
  );
}
