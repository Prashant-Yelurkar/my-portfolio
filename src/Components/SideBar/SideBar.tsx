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

  useEffect(() => {
    fn();

    const element = document.getElementById(scrollTo);
    if (element) {
      element.scrollIntoView({
        block: "start",
      });
    }
  }, [scrollTo]);
  function handelScroll(link: string) {
    setScrollTo(link);
  }
  return (
    <aside className={`${styles.sideBar} ${mobView ? styles.mobNav : ""}`}>
      <Profile />

      <nav className={styles.navigation}>
        <div>
          {navData.map((value, index) => (
            <NavLinkCard
              selected={scrollTo}
              {...value}
              key={index}
              scrollTo={(link: string) => {
                handelScroll(link);
              }}
            />
          ))}
        </div>
      </nav>

      <CopyRightCard />
    </aside>
  );
}
