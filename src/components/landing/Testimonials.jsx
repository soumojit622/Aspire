"use client";

import { useState, useEffect, useRef } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  MessageSquare,
  ThumbsUp,
} from "lucide-react";

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const autoplayRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("testimonials-section");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (section) {
        section.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  // Auto-advance testimonials
  useEffect(() => {
    if (isHovered) {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
      return;
    }

    autoplayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isHovered]);

  const testimonials = [
    {
      name: "Aarushi Sharma",
      role: "HR Manager at TCS",
      image: "https://avatar.iran.liara.run/public/girl",
      stars: 5,
      text: "Aspire has revolutionized our hiring workflow. We've cut down our hiring time by 40% and discovered outstanding candidates who truly fit our company values.",
    },
    {
      name: "Rajeev Mehra",
      role: "CTO at Startify India",
      image: "https://avatar.iran.liara.run/public/boy",
      stars: 5,
      text: "Being a growing startup, we needed a platform that scaled with us. Aspire delivered exactly what we needed—powerful tools with a super clean interface.",
    },
    {
      name: "Priya Nair",
      role: "Talent Acquisition at Infosys",
      image: "https://avatar.iran.liara.run/public/girl",
      stars: 4,
      text: "Aspire's collaborative tools have made it incredibly easy for our pan-India team to align on hiring decisions. The real-time updates are simply brilliant.",
    },
    {
      name: "Arjun Deshmukh",
      role: "Frontend Developer",
      image: "https://avatar.iran.liara.run/public/boy",
      stars: 5,
      text: "I landed my ideal job through Aspire! The application process was seamless, and I loved how transparent everything was from start to finish.",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      className="py-20 relative overflow-hidden"
      id="testimonials-section"
      ref={sectionRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-indigo-900/5 via-black to-black"></div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-indigo-500/5"
              style={{
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: `blur(${Math.random() * 50 + 20}px)`,
                opacity: Math.random() * 0.2 + 0.1,
                animation: `float ${
                  Math.random() * 10 + 10
                }s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Interactive spotlight effect */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.15), transparent 40%)`,
          transition: "background 0.2s",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold pb-5 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-400 to-indigo-600 relative inline-block">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hear from recruiters and job seekers who have found success with
            Aspire.
          </p>
        </div>

        <div
          className={`relative max-w-5xl mx-auto transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Large quote icon */}
          <div className="absolute -top-10 -left-10 text-indigo-500/10 pointer-events-none">
            <Quote className="w-20 h-20" />
          </div>

          {/* Testimonial cards */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gradient-to-b from-gray-900 to-black rounded-xl p-8 border border-gray-800 shadow-lg relative h-full">
                      {/* Glow effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-10 blur-sm rounded-xl"></div>

                      {/* Animated corner highlights */}
                      <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-br-full"></div>
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-bl-full"></div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-indigo-500/20 to-transparent rounded-tr-full"></div>
                      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-tl-full"></div>

                      <div className="relative">
                        <div className="flex flex-col md:flex-row md:items-center mb-8">
                          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden border-2 border-indigo-500/30 p-0.5 shadow-lg shadow-indigo-500/20">
                              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
                                <img
                                  src={testimonial.image || "/placeholder.svg"}
                                  alt={testimonial.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                              {testimonial.name}
                            </h3>
                            <p className="text-gray-400 text-sm">
                              {testimonial.role}
                            </p>
                            <div className="flex mt-2">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < testimonial.stars
                                      ? "text-amber-400 fill-amber-400"
                                      : "text-gray-600"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-300 italic text-lg leading-relaxed">
                          "{testimonial.text}"
                        </p>

                        {/* Social proof indicators */}
                        <div className="flex items-center justify-end mt-6 space-x-4">
                          <div className="flex items-center text-gray-400 text-sm">
                            <ThumbsUp className="w-4 h-4 mr-1" />
                            <span>{Math.floor(Math.random() * 100) + 50}</span>
                          </div>
                          <div className="flex items-center text-gray-400 text-sm">
                            <MessageSquare className="w-4 h-4 mr-1" />
                            <span>{Math.floor(Math.random() * 20) + 5}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation controls */}
            <div className="flex justify-between items-center mt-8">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeIndex === index
                        ? "bg-indigo-500 w-6"
                        : "bg-gray-700 hover:bg-gray-600"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500/30 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500/30 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial stats */}
          <div className="grid grid-cols-3 gap-6 mt-16">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 text-center hover:border-indigo-500/30 transition-colors group">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-600 mb-2 group-hover:scale-110 transition-transform">
                98%
              </div>
              <div className="text-gray-400">Customer Satisfaction</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 text-center hover:border-indigo-500/30 transition-colors group">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-600 mb-2 group-hover:scale-110 transition-transform">
                10k+
              </div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 text-center hover:border-indigo-500/30 transition-colors group">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-600 mb-2 group-hover:scale-110 transition-transform">
                5k+
              </div>
              <div className="text-gray-400">Successful Hires</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  );
}
