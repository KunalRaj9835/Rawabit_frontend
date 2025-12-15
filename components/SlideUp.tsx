"use client";

import { useEffect, useRef, useState } from "react";

interface SlideUpProps {
  children: React.ReactNode;
  className?: string;
}

export default function SlideUp({ children, className = "" }: SlideUpProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-7000 ease-out
        ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}