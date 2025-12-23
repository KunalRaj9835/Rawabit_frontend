import React from "react";

interface ProcessCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export default function ProcessCard({
  icon,
  title,
  desc,
}: ProcessCardProps) {
  return (
    <div className="p-8 bg-white rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
      <div className="flex items-center gap-3 mb-3 text-red-600">
        {icon}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>

      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
