import Flex from "../Containers/Flex";
import styles from "./range.module.css";
export default function RangeCard(props: { rating: string; name: string }) {
  const { rating, name } = props;
  const gradientStyle = {
    background: `linear-gradient(
      to right,
      #149ddd 0%,
      #149ddd ${rating}%,
      #dce8f8 ${rating}%,
      #dce8f8 100%
    )`,
  };
  return (
    <div className={styles.range}>
      <div className={styles.flex}>
        <span className={styles.title}>{name}</span>
        <span>{rating}%</span>
      </div>

      <input
        style={gradientStyle}
        type="range"
        value={rating}
        min={0}
        max={100}
        onChange={() => {}}
      />
    </div>
  );
}
