import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";
import styles from "./st.module.css";
interface FlexProps {
  gap?: number;
  direction: string;
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
}
export default function Flex({ gap, direction, children }: FlexProps) {
  return (
    <div
      className={`${direction == "row" ? styles.row : styles.col}`}
      style={{ display: "flex", gap: gap + "px" }}
    >
      {children}
    </div>
  );
}
