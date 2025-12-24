"use client";

import React, { useEffect } from "react";
import { X, CheckCircle, AlertCircle } from "lucide-react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
  duration?: number;
}

export default function Toast({ message, type, onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

 
  return (
    <div className="fixed top-4 right-4 left-4 sm:left-auto sm:right-4 z-50 animate-slide-in">
      <div
        className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-2xl border ${
          type === "success"
            ? "bg-green-50 border-green-200 text-green-800"
            : "bg-red-50 border-red-200 text-red-800"
        }`}
      >
        {type === "success" ? (
          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
        ) : (
          <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
        )}
        <p className="font-light text-sm sm:text-base flex-1">{message}</p>
        <button
          onClick={onClose}
          className="ml-2 sm:ml-4 hover:opacity-70 transition-opacity p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}