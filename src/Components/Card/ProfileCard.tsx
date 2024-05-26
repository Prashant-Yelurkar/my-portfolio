import Image from "next/image";
import styles from "./pc.module.css";
import me from "@/Assets/images/me.png";
import { mediaData } from "@/Utils/data";
import MediaButton from "../Buttons/MediaButton";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.profileImg}>
        <Image src={me} alt="me" priority />
      </div>
      <div className={styles.profileName}>
        <h3>Prashant Erappa Yelurkar</h3>
      </div>
      <div className={styles.socialMedia}>
        {mediaData.map((value, index) => {
          return <MediaButton {...value} key={index} />;
        })}
      </div>
    </div>
  );
}
