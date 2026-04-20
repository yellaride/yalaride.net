import Image from 'next/image';

const PlatformMarquee = () => {
  const text = "JOIN YALARIDE.COM NOW";
  const items = Array(10).fill(text);

  return (
    <div className="relative w-full overflow-hidden flex items-center py-[5vh] lg:py-[6vh]">
      {/* Background Image */}
      <Image
        src="/hero-section/semi-headings.png"
        alt="Marquee background"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />

      <div className="animate-marquee relative z-10 flex whitespace-nowrap">
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="mx-8 text-2xl font-bold italic tracking-tighter text-white">
              {item}
            </span>
            <span className="text-2xl text-white/50">★</span>
          </div>
        ))}
        {/* Duplicate content for seamless loop */}
        {items.map((item, index) => (
          <div key={`dup-${index}`} className="flex items-center">
            <span className="mx-8 text-2xl font-bold text-white">
              {item}
            </span>
            <span className="text-2xl text-white/50">★</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformMarquee;
