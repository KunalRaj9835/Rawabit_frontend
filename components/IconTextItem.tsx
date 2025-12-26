interface IconTextItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function IconTextItem({
  icon,
  title,
  description,
}: IconTextItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 mt-0.5">{icon}</div>

      <div>
        <h4 className="text-sm font-semibold mb-1">{title}</h4>
        <p className="text-xs text-gray-600 font-light">{description}</p>
      </div>
    </div>
  );
}
