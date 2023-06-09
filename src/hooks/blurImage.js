import { useEffect, useState } from "react";

export const useDynamicSrc = (hd, low) => {
  const [src, set] = useState(low ?? "");

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      set(hd);
    };
  }, [hd, src]);

  return [src, src !== hd];
};

