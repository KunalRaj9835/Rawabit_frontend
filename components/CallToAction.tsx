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
    "/role/13r.png",
    "/role/14r.png",
    "/role/16r.png",
    "/role/17r.png",
    "/role/18r.png",
    "/role/19r.png",
    "/role/20r.png",
    "/role/21r.png",
    "/role/22r.png",
    "/role/23r.png",
    "/role/24r.png",
    "/role/25r.png",
    "/role/26r.png",
    "/role/27r.png",
    "/role/28r.png",
    "/role/29r.png",
    "/role/30r.png",
    "/role/31r.png",
    "/role/33r.png",
    "/role/34r.png",
    "/role/35r.png",
    "/role/36r.png",
    "/role/37r.png",
    "/role/38r.png",
    "/role/39r.png",
    "/role/40r.png",
    "/role/41r.png",
    "/role/43r.png",
    "/role/44r.png",
    "/role/45r.png",
    "/role/47r.png",
    "/role/48r.png",
    "/role/50r.png",
    "/role/51r.png",
    "/role/52r.png",
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-800 tracking-wide">
            TRUSTED BY INDUSTRY LEADERS
          </h2>
          <div className="h-1 w-24 bg-red-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Infinite Logo Carousel */}
        <div className="w-full overflow-hidden">
          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 120s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div 
            className="flex gap-16 animate-scroll"
            style={{ width: 'fit-content' }}
          >
            {/* Duplicate logos for seamless loop */}
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: '140px', height: '140px' }}
              >
                <img
                  src={logo}
                  alt={`Partner ${(i % logos.length) + 1}`}
                  className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Optional subtitle */}
        <p className="text-center text-gray-500 mt-12 text-sm">
          Powering innovation for organizations worldwide
        </p>
      </div>
    </section>
  );
}