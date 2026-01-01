import React, { useEffect, useState } from "react";
import content from "../../data/content.json";

/* =========================
   Count Up Stat Component
========================= */
const Stat = ({ value, label }) => {
  const target = parseInt(value.replace(/\+$/, ""), 10);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const stepTime = 30;
    const increment = Math.ceil(target / (duration / stepTime));

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="bg-accent-light rounded-xl p-4 text-center">
      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-900">
        {count}+
      </div>
      <div className="text-xs sm:text-sm text-secondary-600 mt-1">{label}</div>
    </div>
  );
};

/* =========================
   Main Hero Component
========================= */
 const PortfolioHero = () => {
  return (
  <section className="min-h-screen bg-gradient-to-br from-slate-200 via-slate-100 to-blue-100 flex items-center px-4 sm:px-6 lg:px-8"> 

      <div className="w-full max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-6 py-12 sm:px-10 lg:px-14">

          {/* LEFT — IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-72 h-96 sm:w-80 sm:h-[26rem] bg-image-gradient rounded-3xl overflow-hidden shadow-xl">
              <img
                src={content.hero.image.src}
                alt={content.hero.image.alt}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* RIGHT — TEXT */}
          <div className="flex justify-center lg:justify-end">
            <div className="max-w-lg text-center lg:text-left space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-secondary-900 leading-tight">
                {content.hero.greeting}
                <br />
                <span className="block mt-1 text-accent">
                  {content.hero.name}
                </span>
              </h1>

              <p className="text-secondary-700 text-sm sm:text-base md:text-lg leading-relaxed">
                {content.hero.descriptionSegments.map((seg, idx) => {
                  if (seg.strong) {
                    return (
                      <span key={idx} className="font-semibold">
                        {seg.strong}
                      </span>
                    );
                  }

                  return <React.Fragment key={idx}>{seg.text}</React.Fragment>;
                })}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                {content.hero.stats.map((stat, idx) => (
                  <Stat key={idx} value={stat.value} label={stat.label} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
