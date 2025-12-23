import React from "react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export default function UseCaseCard({ icon, title, desc }: CardProps) {
  return (
    <div className="p-8 bg-white border rounded-xl hover:shadow-xl transition">
      <div className="flex gap-3 text-red-600 mb-3 items-center">
        {icon}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
