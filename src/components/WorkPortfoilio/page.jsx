import React from "react";
import { ArrowUp } from "lucide-react";
import content from "../../data/content.json";

const WorkPortfoilio = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-secondary py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section - Text Content */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-900">
            {content.work.title}
          </h2>

          {content.work.paragraphs.map((p, pIdx) => (
            <p
              key={pIdx}
              className="text-secondary-600 text-base sm:text-lg leading-relaxed"
            >
              {p.segments.map((seg, sIdx) => {
                if (seg.strong) {
                  return <strong key={sIdx}>{seg.strong}</strong>;
                }

                return <React.Fragment key={sIdx}>{seg.text}</React.Fragment>;
              })}
            </p>
          ))}
        </div>

        {/* Bottom Section - Practice/Experience Cards */}
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.work.cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:bg-accent-light hover:border-accent hover:border-2 transition-all duration-300 cursor-pointer group"
              >
                <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-accent transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-secondary-700 leading-relaxed group-hover:text-secondary-800 transition-colors duration-300">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-accent hover:bg-accent-hover text-white p-3 sm:p-4 rounded-full shadow-lg transition"
        aria-label="Scroll to top"
      >
        <ArrowUp size={22} />
      </button>
    </div>
  );
};

export default WorkPortfoilio;