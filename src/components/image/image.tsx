"use client";

import { useImageStatus } from "@/hooks/use-image-status";
import NextImage, { type ImageProps } from "next/image";
import { useRef } from "react";

type CSSPropertiesWithVariables = React.CSSProperties & {
  [v: `--${string}`]: number | string | undefined;
};

export { ImageProps };

export const Image: React.FC<ImageProps> = ({ width, height, alt, ...props }) => {
  const ref = useRef<HTMLImageElement>(null);
  const loaded = useImageStatus(ref);

  return (
    <>
      <style jsx global>{`
        [data-lazy-fade]:not([data-lazy-fade="complete"]) {
          opacity: 0;
        }
        [data-lazy-fade="complete"] {
          transition: opacity 0.5s ease;
        }
        @supports (font: -apple-system-body) and (-webkit-appearance: none) {
          img[loading="lazy"] {
            clip-path: inset(0.6px);
          }
        }
      `}</style>
      <NextImage
        {...{ ...props, width, height, alt, ref }}
        style={{ ...props.style, "--w": width, "--h": height } as CSSPropertiesWithVariables}
        className={["aspect-[var(--w)/var(--h)]", props.className].filter(Boolean).join(" ")}
        data-lazy-fade={loaded}
      />
    </>
  );
};
