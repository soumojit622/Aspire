"use client";

import { FileText, Send, Bell } from "lucide-react";
import { useEffect, useState } from "react";

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("features-section");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const features = [
    {
      title: "Post Jobs Easily",
      description:
        "Create and publish job listings in minutes with our intuitive interface and customizable templates.",
      icon: FileText,
      color: "from-indigo-500 to-blue-500",
      delay: 200,
    },
    {
      title: "Seamless Applications",
      description:
        "Streamline the application process for candidates with one-click apply and resume parsing.",
      icon: Send,
      color: "from-indigo-500 to-purple-500",
      delay: 400,
    },
    {
      title: "Real-time Updates",
      description:
        "Stay informed with instant notifications about new applications and candidate interactions.",
      icon: Bell,
      color: "from-indigo-500 to-pink-500",
      delay: 600,
    },
  ];

  return (
    <section className="py-20" id="features-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-400 to-indigo-600 pb-5">
            Powerful Features for Modern Recruiting
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to streamline your hiring process and find the
            perfect candidates.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-lg transition-all duration-1000 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/30 group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${feature.delay}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-lg mb-6 flex items-center justify-center bg-gradient-to-br ${feature.color} shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>

              <div className="mt-6 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
