"use client";

import { useEffect, useState, useRef } from "react";

export default function NewsletterCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("newsletter-section");
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

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      id="newsletter-section"
      className="py-20"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`bg-gradient-to-r from-indigo-900/50 to-indigo-600/50 rounded-2xl p-8 md:p-12 shadow-xl border border-indigo-500/30 relative overflow-hidden transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Interactive spotlight effect */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              background: `radial-gradient(circle 200px at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.3), transparent 80%)`,
              transition: "background 0.2s",
            }}
          ></div>

          {/* Background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full filter blur-3xl"></div>
          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl opacity-30 transition-all duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          ></div>

          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-indigo-500/5"
                style={{
                  width: `${Math.random() * 100 + 20}px`,
                  height: `${Math.random() * 100 + 20}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${
                    Math.random() * 10 + 5
                  }s infinite ease-in-out`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              ></div>
            ))}
          </div>

          {/* Animated lines */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent animate-pulse"></div>
            <div
              className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="relative">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-400 to-indigo-500 relative inline-block">
                Stay Updated
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500/50 to-indigo-500/0"></span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest job opportunities,
                hiring tips, and platform updates.
              </p>
            </div>

            <form
              className="max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-black/80 border border-indigo-500/30 rounded-lg py-3 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all backdrop-blur-sm"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div
                    className="absolute inset-0 rounded-lg pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(99, 102, 241, 0) 0%, rgba(99, 102, 241, 0.05) 50%, rgba(99, 102, 241, 0) 100%)",
                      backgroundSize: "200% 100%",
                      animation: "shimmer 2s infinite",
                    }}
                  ></div>
                </div>
                <button
                  type="submit"
                  className={`bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 ${
                    isHovered ? "scale-105" : "scale-100"
                  } relative overflow-hidden group`}
                >
                  <span
                    className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-20"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.3), transparent 70%)",
                    }}
                  ></span>
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-3 text-center">
                By subscribing, you agree to our Privacy Policy and consent to
                receive job-related emails.
              </p>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
            opacity: 0.3;
          }
        }
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </section>
  );
}
