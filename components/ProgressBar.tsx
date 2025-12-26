interface ProgressBarProps {
  label: string;
  percentage: number;
  barColor?: string;
}

export default function ProgressBar({
  label,
  percentage,
  barColor = "bg-red-600",
}: ProgressBarProps) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1 font-light">
        <span>{label}</span>
        <span className="text-red-600">{percentage}%</span>
      </div>

      <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
        <div
          className={`h-full ${barColor} transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
