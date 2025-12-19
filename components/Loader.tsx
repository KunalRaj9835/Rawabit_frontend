"use client";

import Lottie from "lottie-react";
import loadingAnimation from "@/public/loading/loading.json";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="w-40 h-40">
        <Lottie
          animationData={loadingAnimation}
          loop
          autoplay
        />
      </div>
    </div>
  );
}
