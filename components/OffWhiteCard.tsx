import React from "react";

interface OffWhiteCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export default function OffWhiteCard({
  icon,
  title,
  desc,
}: OffWhiteCardProps) {
  return (
    <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
      <div className="flex items-center gap-3 mb-3 text-red-600">
        {icon}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
