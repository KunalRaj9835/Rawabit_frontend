import React from "react";

interface PhaseStepItemProps {
  step: string;
  title: string;
  description: string;
}

export default function PhaseStepItem({
  step,
  title,
  description,
}: PhaseStepItemProps) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center font-light text-sm">
        {step}
      </div>

      <div className="flex-1">
        <h4 className="text-base font-semibold mb-1">{title}</h4>
        <p className="text-sm text-gray-600 font-light">{description}</p>
      </div>
    </div>
  );
}

