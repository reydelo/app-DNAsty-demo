import { useRef, useState, useEffect, RefObject } from "react";

export default function useScrollPercentage(): [
  RefObject<HTMLInputElement>,
  number
] {
  const scrollRef = useRef<HTMLInputElement>(null);
  const [scrollPercentage, setScrollPercentage] = useState(NaN);

  useEffect(() => {
    const element = scrollRef.current;

    const reportScroll: EventListener = (event: Event) => {
      const targetElement = event.target as HTMLInputElement;
      setScrollPercentage(getScrollPercentage(targetElement));
    };

    if (element !== null) {
      element.addEventListener("scroll", reportScroll, { passive: true });

      const percentage = getScrollPercentage(element);
      setScrollPercentage(percentage);

      return () => element.removeEventListener("scroll", reportScroll);
    }
  }, []);

  return [scrollRef, Number.isNaN(scrollPercentage) ? 0 : scrollPercentage];
}

function getScrollPercentage(element: HTMLInputElement) {
  if (element === null) {
    return NaN;
  }
  const height = element.scrollHeight - element.clientHeight;
  return Math.round((element.scrollTop / height) * 100);
}
