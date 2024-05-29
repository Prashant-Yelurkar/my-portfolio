import { ReactElement, JSXElementConstructor } from "react";
import styles from "./st.module.css";

interface GridProps {
  gap: number;
  minmax: number;
  children: ReactElement<any, string | JSXElementConstructor<any>>[];
}

export default function Grid({ gap, minmax, children }: GridProps) {
  const gridStyle = {
    ...(gap ? { gap: gap + "px" } : {}),
    ...(minmax
      ? {
          gridTemplateColumns:
            "repeat(auto-fill, minmax(" + minmax + "px, 1fr))",
        }
      : {}),
  };

  return (
    <div className={styles.grid} style={gridStyle}>
      {children}
    </div>
  );
}
