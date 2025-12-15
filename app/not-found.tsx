"use client";

import Lottie from "lottie-react";
import Link from "next/link";
import animationData from "@/public/lottie/404.json";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">

      {/* Lottie */}
      <div className="w-full max-w-3xl flex justify-center">
        <Lottie
          animationData={animationData}
          loop
          className="w-full"
        />
      </div>

      {/* Button – reduced gap */}
      <Link
        href="/"
        className="
          mt-4
          px-8 py-4
          bg-[#0e355d]
          text-white
          rounded-lg
          text-sm
          font-medium
          hover:bg-[#123f6d]
          transition
        "
      >
        Go back home
      </Link>
    </div>
  );
}
