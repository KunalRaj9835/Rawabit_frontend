import React from "react";

interface IntegrationBadgeProps {
  icon: React.ReactNode;
  text: string;
}

export default function IntegrationBadge({
  icon,
  text,
}: IntegrationBadgeProps) {
  return (
    <div className="flex items-center gap-2 bg-white/5 border border-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
      <div className="text-red-400">{icon}</div>
      <span className="text-xs font-light text-gray-200">{text}</span>
    </div>
  );
}
