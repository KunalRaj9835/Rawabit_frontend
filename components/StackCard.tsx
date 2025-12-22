import Link from "next/link";

interface StackCardProps {
  image: string;
  title: string;
  href: string;
}

export default function StackCard({ image, title, href }: StackCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <div
        className="
          bg-black rounded-2xl p-4 h-full
          shadow-lg
          transition-all duration-300 ease-out
          transform
          group-hover:-translate-y-3
          group-hover:shadow-2xl
          cursor-pointer
        "
      >
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover rounded-lg"
        />

        {/* Title */}
        <h3 className="mt-4 text-lg font-semibold text-white leading-relaxed">
          {title}
        </h3>

        {/* Read more */}
        <div className="mt-3 text-sm font-light text-red-400 underline flex items-center gap-1 group-hover:text-red-300 transition">
          Read more →
        </div>
      </div>
    </Link>
  );
}
