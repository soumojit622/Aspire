"use client";

import {
  Smartphone,
  ArrowLeft,
  Heart,
  MessageSquare,
  Share2,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function MobileFriendly() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("mobile-section");
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

  return (
    <section className="py-20 " id="mobile-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-400 to-indigo-600 pb-5">
            Mobile Friendly
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Access Aspire on the go with our fully responsive mobile experience.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Phone mockup 1 */}
          <div
            className={`relative w-64 h-[500px] bg-black rounded-[36px] border-4 border-gray-800 shadow-xl overflow-hidden transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-20 blur-sm rounded-[36px]"></div>

            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-10"></div>

            {/* Status bar */}
            <div className="h-8 bg-gray-900 flex justify-between items-center px-4 text-xs text-gray-400">
              <span>9:41</span>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
                <span>85%</span>
              </div>
            </div>

            {/* App header */}
            <div className="bg-gray-900 p-3 flex items-center justify-between">
              <div className="flex items-center">
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="text-indigo-500 font-bold">Aspire</span>
              </div>
              <div className="flex items-center space-x-2">
                <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                  <MessageSquare className="w-3 h-3" />
                </button>
                <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                  <Share2 className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Job cards */}
            <div className="p-3 space-y-3 overflow-y-auto h-[calc(100%-8rem)]">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-gray-900 rounded-lg p-4 border border-gray-800 shadow-sm hover:border-indigo-500/30 transition-all duration-300"
                  style={{
                    transform: `translateX(${
                      item === 1 ? "0" : item === 2 ? "-10" : "-20"
                    }px)`,
                    opacity: item === 1 ? 1 : item === 2 ? 0.8 : 0.6,
                    scale: item === 1 ? "1" : item === 2 ? "0.98" : "0.96",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-sm">
                        Senior Frontend Developer
                      </h3>
                      <p className="text-gray-400 text-xs">TechCorp Inc.</p>
                    </div>
                    <button className="text-indigo-400 hover:text-indigo-300 transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    <span className="bg-gray-800 text-xs px-2 py-0.5 rounded border border-gray-700 hover:border-indigo-500/30 transition-colors">
                      React
                    </span>
                    <span className="bg-gray-800 text-xs px-2 py-0.5 rounded border border-gray-700 hover:border-indigo-500/30 transition-colors">
                      TypeScript
                    </span>
                    <span className="bg-gray-800 text-xs px-2 py-0.5 rounded border border-gray-700 hover:border-indigo-500/30 transition-colors">
                      Remote
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    <span>$120k - $150k</span>
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom navigation */}
            <div className="absolute bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 h-14 flex items-center justify-around px-2">
              <button className="flex flex-col items-center justify-center w-12 h-12 text-indigo-500">
                <Smartphone className="w-5 h-5" />
                <span className="text-xs mt-1">Jobs</span>
              </button>
              <button className="flex flex-col items-center justify-center w-12 h-12 text-gray-500 hover:text-indigo-400 transition-colors">
                <Heart className="w-5 h-5" />
                <span className="text-xs mt-1">Saved</span>
              </button>
              <button className="flex flex-col items-center justify-center w-12 h-12 text-gray-500 hover:text-indigo-400 transition-colors">
                <MessageSquare className="w-5 h-5" />
                <span className="text-xs mt-1">Chat</span>
              </button>
              <button className="flex flex-col items-center justify-center w-12 h-12 text-gray-500 hover:text-indigo-400 transition-colors">
                <div className="w-5 h-5 rounded-full bg-gray-800"></div>
                <span className="text-xs mt-1">Profile</span>
              </button>
            </div>

            {/* Swipe indicators */}
            <div className="absolute bottom-16 left-0 right-0 flex justify-center space-x-1 py-2">
              <div className="w-6 h-1 rounded-full bg-indigo-500"></div>
              <div className="w-1 h-1 rounded-full bg-gray-800"></div>
              <div className="w-1 h-1 rounded-full bg-gray-800"></div>
            </div>
          </div>

          {/* Phone mockup 2 */}
          <div
            className={`relative w-64 h-[500px] bg-black rounded-[36px] border-4 border-gray-800 shadow-xl overflow-hidden transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-20 blur-sm rounded-[36px]"></div>

            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-10"></div>

            {/* Status bar */}
            <div className="h-8 bg-gray-900 flex justify-between items-center px-4 text-xs text-gray-400">
              <span>9:41</span>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
                <span>85%</span>
              </div>
            </div>

            {/* App header */}
            <div className="bg-gray-900 p-3 flex items-center justify-between">
              <div className="flex items-center">
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="text-indigo-500 font-bold">Job Details</span>
              </div>
              <div className="flex items-center space-x-2">
                <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                  <Heart className="w-3 h-3" />
                </button>
                <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                  <Share2 className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Job details */}
            <div className="p-4 overflow-y-auto h-[calc(100%-8rem)]">
              <div className="mb-4">
                <h3 className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Senior Frontend Developer
                </h3>
                <p className="text-gray-400 text-sm">TechCorp Inc.</p>
                <div className="flex items-center mt-1 text-xs text-gray-500">
                  <span>San Francisco, CA</span>
                  <span className="mx-2">•</span>
                  <span>Remote Friendly</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-800 text-xs px-2 py-1 rounded border border-gray-700 hover:border-indigo-500/30 transition-colors">
                  React
                </span>
                <span className="bg-gray-800 text-xs px-2 py-1 rounded border border-gray-700 hover:border-indigo-500/30 transition-colors">
                  TypeScript
                </span>
                <span className="bg-gray-800 text-xs px-2 py-1 rounded border border-gray-700 hover:border-indigo-500/30 transition-colors">
                  Next.js
                </span>
                <span className="bg-gray-800 text-xs px-2 py-1 rounded border border-gray-700 hover:border-indigo-500/30 transition-colors">
                  Tailwind CSS
                </span>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Salary Range</h4>
                <p className="text-indigo-400 font-bold">
                  $120,000 - $150,000 / year
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Job Description</h4>
                <p className="text-sm text-gray-300 mb-2">
                  We are looking for a Senior Frontend Developer to join our
                  team and help build innovative web applications.
                </p>
                <p className="text-sm text-gray-300">
                  You will be responsible for developing user interface
                  components and implementing them following well-known React
                  workflows.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Requirements</h4>
                <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                  <li>5+ years of experience with React</li>
                  <li>Strong knowledge of TypeScript</li>
                  <li>Experience with Next.js and Tailwind CSS</li>
                  <li>Excellent problem-solving skills</li>
                </ul>
              </div>
            </div>

            {/* Apply button */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-900 border-t border-gray-800">
              <button className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white py-3 rounded-lg font-medium transition-colors shadow-lg shadow-indigo-500/20">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
