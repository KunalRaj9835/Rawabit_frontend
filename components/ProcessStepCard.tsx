import React from "react";

interface ProcessStepCardProps {
  icon: React.ReactNode;
  step: string;
  title: string;
  desc: string;
}

export default function ProcessStepCard({
  icon,
  step,
  title,
  desc,
}: ProcessStepCardProps) {
  return (
    <div className="bg-white border border-gray-900/20 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <span className="text-2xl font-extralight text-red-600">
          {step}
        </span>
      </div>

      <h3 className="text-lg font-semibold mb-3 text-gray-900">
        {title}
      </h3>

      <p className="text-[13px] text-gray-600 leading-relaxed font-light">
        {desc}
      </p>
    </div>
  );
}
