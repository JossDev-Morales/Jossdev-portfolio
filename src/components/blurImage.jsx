import { useDynamicSrc } from "../hooks/blurImage";

export default function BlurImage({ src, lowSrc , config}) {
  const [dSrc, blur] = useDynamicSrc(src, lowSrc);
  return (
    <img
    className={config.classWrapper?config.classWrapper:undfined}
      style={{
        filter: blur ? "blur(20px)" : "none",
        transition: "filter 1s ease-out",
      }}
      src={dSrc}
      alt="zelda"
    />
  );
}
