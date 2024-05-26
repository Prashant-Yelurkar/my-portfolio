import styles from "./sidebar.module.css";
import { navData } from "@/Utils/data";
import NavLinkCard from "../Card/NavLinkCard";
import Profile from "../Card/ProfileCard";
import CopyRightCard from "../Card/CopyRightCard";

export default function SideBar() {
  return (
    <aside className={styles.sideBar}>
      <Profile />

      <nav className={styles.navigation}>
        <div>
          {navData.map((value, index) => (
            <NavLinkCard {...value} key={index} />
          ))}
        </div>
      </nav>

      <CopyRightCard />
    </aside>
  );
}
