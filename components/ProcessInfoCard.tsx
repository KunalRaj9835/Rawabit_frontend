
import React from "react";

interface ProcessInfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
}

export default function ProcessInfoCard({
  icon,
  title,
  description,
  color = "bg-white",
}: ProcessInfoCardProps) {
  return (
    <div
      className={`${color} border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-lg`}
    >
      <div className="flex items-center gap-3 mb-3 text-red-600">
        {icon}
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>

      <p className="text-sm text-gray-600 font-light leading-relaxed">
        {description}
      </p>
    </div>
  );
}
