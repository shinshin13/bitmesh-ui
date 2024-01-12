import { useState, useEffect } from "react";
import { debounce } from "./debounce";
export default function useMediaQuery(query: string, defaultValue?: boolean) {
  const [matches, setMatches] = useState(
    defaultValue || window.matchMedia(query).matches
  );

  useEffect(() => {
    const resize = () => {
      setMatches(window.matchMedia(query).matches);
    };
    resize();
    const debouncedResize = debounce(resize, 100);

    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  }, [query]);

  return [matches];
}
