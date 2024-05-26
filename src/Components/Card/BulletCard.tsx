import Image from "next/image";
import styles from "./bc.module.css";
import arrowIcon from "@/Assets/icons/arrowIcon.svg";
import Link from "next/link";

interface BulletCardProps {
  point: string;
  value: string | number;
  link: boolean;
}

const BulletCard: React.FC<BulletCardProps> = ({ point, value, link }) => {
  const linksUrl: { [key: string]: string } = {
    Email: "mailto:",
    Phone: "tel:",
    Website: "",
  };

  const linkPrefix = linksUrl[point] !== undefined ? linksUrl[point] : "";

  return (
    <div className={styles.bullet}>
      <Image src={arrowIcon} alt="bullet" />
      <span className={styles.key}>{point}:</span>
      {!link ? (
        <span>{value}</span>
      ) : (
        <Link href={linkPrefix + link}>{value}</Link>
      )}
    </div>
  );
};

export default BulletCard;
