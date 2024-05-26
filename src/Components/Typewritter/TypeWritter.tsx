import { useState, useEffect } from "react";
import styles from "./tw.module.css";
export default function TypeWritter(props: { designation: any }) {
  const { designation } = props;
  const [displayedWord, setDisplayWord] = useState(designation[0]);
  const [typing, setTyping] = useState(false);
  const [backSpacing, setBackSpacing] = useState(true);
  const [pause, setPause] = useState(false);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (backSpacing) {
      if (!displayedWord) {
        setTyping(true);
        setBackSpacing(false);
        setIndex(() => (index == designation.length - 1 ? 0 : index + 1));
      } else if (
        displayedWord &&
        index != designation.length - 1 &&
        displayedWord === designation[index + 1].slice(0, displayedWord.length)
      ) {
        setTimeout(() => {
          setTyping(true);
          setBackSpacing(false);
          setIndex(() => (index == designation.length - 1 ? 0 : index + 1));
        }, 200);
      } else {
        setTimeout(() => {
          setDisplayWord(() => displayedWord.slice(0, -1));
        }, 100);
      }
    }
    if (typing) {
      if (displayedWord.length < designation[index].length || !displayedWord) {
        setTimeout(() => {
          setDisplayWord(() =>
            designation[index].slice(0, displayedWord.length + 1)
          );
        }, 100);
      } else {
        setTyping(false);
        setPause(true);
        setTimeout(() => {
          setBackSpacing(true);
          setPause(false);
        }, 2000);
        console.log("backspacing");
      }
    }
  }, [displayedWord, typing, backSpacing]);
  return (
    <p className={styles.track}>
      I&apos; m <span>{displayedWord}</span>
      <span className={pause ? styles.blink : ""}> |</span>
    </p>
  );
}
