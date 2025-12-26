import { CheckCircle } from "lucide-react";

interface ChecklistCardProps {
  title: string;
  items: string[];
}

export default function ChecklistCard({ title, items }: ChecklistCardProps) {
  return (
    <div className="bg-white/5 border border-white/20 rounded-xl p-6 backdrop-blur-sm">
      <h3 className="text-lg font-light mb-4 text-red-400">{title}</h3>

      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center gap-2 text-sm text-gray-300 font-light"
          >
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
