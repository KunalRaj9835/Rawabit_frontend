import React from "react";

interface ResponseCardProps {
  step: string | number;
  title: string;
  desc: string;
}

export default function ResponseCard({
  step,
  title,
  desc,
}: ResponseCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-600">
      <div className="text-3xl font-bold text-red-600 mb-3">{step}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
