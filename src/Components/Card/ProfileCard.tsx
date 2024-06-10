import Image from "next/image";
import styles from "./pc.module.css";
import me from "@/Assets/images/me.png";
import MediaButton from "../Buttons/MediaButton";
import { Key } from "react";

interface ProfileProps {
  socialMedia: any;
}
export default function Profile({ socialMedia }: ProfileProps) {
  return (
    <div className={styles.profile}>
      <div className={styles.profileImg}>
        <Image src={me} alt="me" loading="lazy" />
      </div>
      <div className={styles.profileName}>
        <h3>Prashant Erappa Yelurkar</h3>
      </div>
      <div className={styles.socialMedia}>
        {socialMedia.map((value: any, index: Key | null | undefined) => {
          return <MediaButton {...value} key={index} />;
        })}
      </div>
    </div>
  );
}
