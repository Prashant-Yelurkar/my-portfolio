import Flex from "../Containers/Flex";
import styles from "./range.module.css";
export default function RangeCard(props: {
  amount: string | number | readonly string[] | undefined;
  name: string;
}) {
  const { amount, name } = props;
  const gradientStyle = {
    background: `linear-gradient(
      to right,
      #149ddd 0%,
      #149ddd ${amount}%,
      #dce8f8 ${amount}%,
      #dce8f8 100%
    )`,
  };
  return (
    <div className={styles.range}>
      <div className={styles.flex}>
        <span className={styles.title}>{name}</span>
        <span>{amount}%</span>
      </div>

      <input
        style={gradientStyle}
        type="range"
        value={amount}
        min={0}
        max={100}
        onChange={() => {}}
      />
    </div>
  );
}
