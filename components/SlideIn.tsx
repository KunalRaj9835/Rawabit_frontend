"use client";

import { useEffect, useRef, useState } from "react";

interface SlideInProps {
  children: React.ReactNode;
  direction?: "left" | "right";
}

export default function SlideIn({
  children,
  direction = "left",
}: SlideInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const hidden =
    direction === "left" ? "-translate-x-24" : "translate-x-24";

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out
        ${visible ? "opacity-100 translate-x-0" : `opacity-0 ${hidden}`}
      `}
    >
      {children}
    </div>
  );
}
