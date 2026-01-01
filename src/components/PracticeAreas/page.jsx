import React from "react";
import {
  Scale,
  Home,
  Briefcase,
  Shield,
  Landmark,
  FileText,
} from "lucide-react";
import content from "../../data/content.json";

const iconMap = {
  Scale,
  Home,
  Briefcase,
  Shield,
  Landmark,
  FileText,
};

const PracticeAreas = () => {
  return (
    <section
      className="bg-slate-50 py-20 px-4"
      aria-label={content.practiceAreas.ariaLabel}
    >
      <div className="max-w-7xl mx-auto">

        {/* SEO Heading */}
        <header className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            {content.practiceAreas.title}
          </h2>
          <p className="mt-4 text-gray-600 max-w-4xl mx-auto">
            {content.practiceAreas.description}
          </p>
        </header>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.practiceAreas.areas.map((area, index) => {
            const Icon = iconMap[area.icon];

            return (
              <article
                key={index}
                className="
                  bg-slate-900 text-slate-100
                  rounded-2xl p-8
                  shadow-md
                  hover:bg-slate-800
                  hover:shadow-2xl
                  transition-all duration-300
                  cursor-pointer
                  group
                "
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="
                      w-12 h-12 rounded-xl
                      bg-yellow-500 text-slate-900
                      flex items-center justify-center
                      transition-all duration-300
                      group-hover:bg-yellow-400
                    "
                  >
                    {Icon && <Icon className="w-6 h-6" />}
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {area.title}
                  </h3>
                </div>

                {/* List */}
                <ul className="space-y-2 text-slate-300 text-sm">
                  {area.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-yellow-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PracticeAreas;
