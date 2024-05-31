import styles from "./nlc.module.css";
import { UrlObject } from "url";
import { useEffect } from "react";
import { navData } from "@/Utils/data";

export default function NavLinkcard(props: {
  link: string;
  icon: any;
  name: string;
  scrollTo: Function;
  selected: string;
  setSelected: Function;
}) {
  const { link, icon, name, scrollTo, selected, setSelected } = props;

  function handelClick() {
    scrollTo(link);
  }
  const checkIsInViewPort = (value: any) => {
    const item = value.getBoundingClientRect();
    return (
      item.top < 500 // &&
      //   item.left >= 0 &&
      //   item.bottom <=
      //     (window.innerHeight || document.documentElement.clientHeight) &&
      //   item.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  useEffect(() => {
    const elementToCheck = document.getElementById(link);
    const handleScroll = () => {
      if (checkIsInViewPort(elementToCheck)) {
        // if (scrollTo != selected) {
        setSelected(link);
        // }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.nav} ${selected == link ? styles.selected : ""}`}
      onClick={handelClick}
    >
      {icon}
      <span>{name}</span>
    </div>
  );
}
