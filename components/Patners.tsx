export default function ClientShowcase() {
  const logos = [
    "/role/1r.png",
    "/role/2r.png",
    "/role/3r.png",
    "/role/4r.png",
    "/role/5r.png",
    "/role/6r.png",
    "/role/7r.png",
    "/role/8r.png",
    "/role/9r.png",
    "/role/10r.png",
    "/role/11r.png",
    "/role/12r.png",
  ];

  return (
    <section className="bg-[#eef3f7] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-5xl font-semibold text-[#101828] mb-14">
          Our Partners
        </h2>

        {/* Single scrolling row */}
        <div className="relative overflow-hidden">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee {
              animation: marquee 40s linear infinite;
            }
            .marquee:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="flex gap-20 marquee w-max">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center flex-shrink-0"
                style={{ width: "140px", height: "70px" }}
              >
                <img
  src={logo}
  alt="Partner logo"
  className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
/>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
