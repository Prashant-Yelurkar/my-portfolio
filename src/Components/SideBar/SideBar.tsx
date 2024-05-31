import styles from "./sidebar.module.css";
import { navData } from "@/Utils/data";
import NavLinkCard from "../Card/NavLinkCard";
import Profile from "../Card/ProfileCard";
import CopyRightCard from "../Card/CopyRightCard";
import { useEffect, useState } from "react";
interface SideBarProps {
  mobView: any;
  fn: Function;
}
export default function SideBar({ fn, mobView }: SideBarProps) {
  const [scrollTo, setScrollTo] = useState("home");
  const [selectedNav, setSelectedNav] = useState("home");

  function handelScrollTo(link: string) {
    setSelectedNav(link);
    setScrollTo(link);
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({
        block: "start",
      });
    }
  }

  return (
    <aside className={`${styles.sideBar} ${mobView ? styles.mobNav : ""}`}>
      <Profile />

      <nav className={styles.navigation}>
        <div>
          {navData.map((value, index) => (
            <NavLinkCard
              selected={selectedNav}
              setSelected={(link: string) => setSelectedNav(link)}
              {...value}
              key={index}
              scrollTo={(link: string) => {
                handelScrollTo(link);
                fn();
              }}
            />
          ))}
        </div>
      </nav>

      <CopyRightCard />
    </aside>
  );
}
