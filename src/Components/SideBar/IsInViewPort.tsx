import { useState, useEffect } from "react";

export default function IsInViewport(selector: any) {
  const [isInViewport, setIsInViewport] = useState(false);

  const checkVisibility = () => {
    const element = document.getElementById(selector);
    if (element) {
      const rect = element.getBoundingClientRect();
      setIsInViewport(
        rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  };

  useEffect(() => {
    checkVisibility();
    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, [selector]);

  return isInViewport;
}
