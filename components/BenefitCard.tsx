import React from "react";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export default function BenefitCard({
  icon,
  title,
  desc,
}: BenefitCardProps) {
  return (
    <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
      <div className="flex items-center gap-3 mb-4 text-red-600">
        {icon}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>

      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
