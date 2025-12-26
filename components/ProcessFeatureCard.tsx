

import Image from "next/image";
import Link from "next/link";

interface ProcessFeatureCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
  readMore: string;
}

export default function ProcessFeatureCard({
  image,
  title,
  description,
  href,
  readMore,
}: ProcessFeatureCardProps) {
  return (
    <div className="bg-[#111827] border border-white/20 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-red-600 group h-full">
      <div className="relative w-full h-56">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-light text-white mb-4">{title}</h3>

        <p className="text-sm text-white/90 font-light mb-6 leading-relaxed">
          {description}
        </p>

        <Link
          href={href}
          className="inline-flex items-center gap-2 text-red-400 text-sm font-light transition-all group-hover:gap-3"
        >
          {readMore} →
        </Link>
      </div>
    </div>
  );
}
