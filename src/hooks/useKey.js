import { useEffect } from "react";

export function useKey(key, keyCallback) {
  useEffect(() => {
    const callback = (e) => {
      if (e.code === key) keyCallback();
    };

    document.addEventListener("keydown", callback);

    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [key, keyCallback]);
}
