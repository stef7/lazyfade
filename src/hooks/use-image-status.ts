"use client";

import React, { useEffect, useState } from "react";

export const useImageStatus = (imageRef: React.RefObject<HTMLImageElement>) => {
  const [status, setStatus] = useState<"pending" | "loading" | "complete">();

  useEffect(() => {
    const { current: image } = imageRef;
    if (!image) return;

    setStatus(image.complete ? "complete" : "pending");
    if (image.complete) return;
 
    /** Note: `loadstart` event not firing in Chrome: https://crbug.com/458851 */
    const onLoadStart = () => setStatus("loading");
    const onLoad = () => setStatus("complete");
    image.addEventListener("loadstart", onLoadStart);
    image.addEventListener("load", onLoad);
    return () => {
      image.removeEventListener("loadstart", onLoadStart);
      image.removeEventListener("load", onLoad);
    };
  }, [imageRef]);

  return status;
};
