import { CheckCircle } from "lucide-react";

interface MetricRowProps {
  label: string;
  value: string;
  target: string;
  targetLabel: string;
  status?: "success" | "warning" | "error"|"excellent";
}

export default function MetricRow({
  label,
  value,
  target,
  targetLabel,
}: MetricRowProps) {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 pb-4">
      <div className="flex-1">
        <p className="text-sm font-light text-gray-700">{label}</p>
        <p className="text-xs text-gray-500 mt-1">
          {targetLabel}: {target}
        </p>
      </div>

      <div className="text-right">
        <p className="text-2xl font-light text-green-600">{value}</p>
        <CheckCircle className="w-4 h-4 text-green-500 ml-auto mt-1" />
      </div>
    </div>
  );
}
