import { RefObject, useEffect, useState } from "react";
const useOuterHTML = <T extends RefObject<HTMLElement>>(ref: T) => {
  const [HTML, setHTML] = useState<string | undefined>("");
  

  useEffect(() => {
    const res = ref.current?.outerHTML;
    setHTML(res);
  }, [ref]);

  return [HTML];
};
export { useOuterHTML };
