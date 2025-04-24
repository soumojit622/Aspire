"use client";

import { useEffect, useState, useRef } from "react";
import {
  ArrowRight,
  Sparkles,
  Zap,
  CheckCircle,
  BarChart3,
  Users,
  Briefcase,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const [activeTab, setActiveTab] = useState("recruiter");
  const [hoverStats, setHoverStats] = useState(false);
  const [animatedText, setAnimatedText] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
    }

    // Text animation
    const textInterval = setInterval(() => {
      setAnimatedText((prev) => (prev + 1) % 3);
    }, 3000);

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
      }
      clearInterval(textInterval);
    };
  }, []);

  const animatedWords = ["Seamlessly", "Effortlessly", "Intelligently"];

  return (
    <section ref={heroRef} className="relative py-24 md:py-36 overflow-hidden">
      {/* Enhanced background spots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient spots */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-900/10 rounded-full filter blur-[120px] opacity-40 animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full filter blur-[100px] opacity-30 animate-float-slow-reverse"></div>
        <div
          className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-blue-900/10 rounded-full filter blur-[80px] opacity-20 animate-float-slow"
          style={{ animationDelay: "-5s" }}
        ></div>

        {/* Medium spots */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-indigo-500/5"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: `blur(${Math.random() * 50 + 30}px)`,
              opacity: Math.random() * 0.2 + 0.1,
              animation: `float ${
                Math.random() * 20 + 15
              }s infinite ease-in-out`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          ></div>
        ))}

        {/* Small spots */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i + 100}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, rgba(99, 102, 241, 0.05) 50%, rgba(99, 102, 241, 0) 100%)`,
              filter: `blur(${Math.random() * 20 + 10}px)`,
              opacity: Math.random() * 0.3 + 0.1,
              animation: `pulse ${
                Math.random() * 15 + 10
              }s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          ></div>
        ))}
      </div>

      {/* Interactive spotlight effect */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle 500px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`,
          transition: "background 0.1s",
        }}
      ></div>

      {/* Diagonal lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-indigo-500/0 via-indigo-500/30 to-indigo-500/0 h-px"
              style={{
                top: `${10 + i * 10}%`,
                left: "0",
                right: "0",
                transform: "rotate(-2deg)",
                transformOrigin: "center",
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i + 200}
            className="absolute rounded-full bg-indigo-500/30"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `float-particle ${
                Math.random() * 20 + 10
              }s infinite ease-in-out`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <div
              className={`inline-block mb-6 transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 -translate-y-10 scale-95"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="relative group">
                {/* Animated glowing pulse ring */}
                <div className="absolute inset-0 rounded-full bg-indigo-500 opacity-20 blur-2xl animate-pulse-slow scale-110 z-[-2]"></div>

                {/* Glowing border ring on hover */}
                <div className="absolute inset-0 rounded-full border border-indigo-400/50 group-hover:border-indigo-500/80 transition-all duration-500 animate-border-glow z-[-1]"></div>

                <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-500/10 via-indigo-600/10 to-indigo-500/10 text-indigo-300 border border-indigo-400/30 backdrop-blur-sm shadow-xl shadow-indigo-800/10 relative overflow-hidden transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-[-1deg]">
                  {/* Shimmer animation line */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent animate-shimmer pointer-events-none blur-sm opacity-40 z-[-1]"></span>

                  {/* Icon */}
                  <Sparkles className="w-4 h-4 mr-2 text-indigo-300 drop-shadow-md animate-float" />

                  {/* Text with shimmer underline */}
                  <span className="relative z-10">
                    Launching Soon
                    <span className="absolute -bottom-px left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-underline"></span>
                  </span>
                </span>
              </div>
            </div>

            <h1
              className={`text-4xl md:text-6xl font-bold mb-6 leading-tight transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-10"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <span className="relative inline-block">
                <span className="absolute -inset-1 blur-xl bg-indigo-500/20 rounded-lg transform -skew-x-6"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-400 to-indigo-500">
                  Empower Your Career
                </span>
              </span>
              <br />
              <span className="relative inline-block mt-2">
                <span className="absolute -inset-1 blur-xl bg-indigo-600/20 rounded-lg transform skew-x-6"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-600">
                  with Aspire.
                </span>
              </span>
            </h1>

            <p
              className={`text-xl text-gray-300 mb-8 max-w-xl leading-relaxed transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-10"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              Connecting talent with opportunity —{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 w-full h-full bg-indigo-500/10 rounded blur-sm"></span>
                <span className="relative text-indigo-300 font-semibold">
                  {animatedWords.map((word, index) => (
                    <span
                      key={index}
                      className={`absolute transition-all duration-500 ${
                        animatedText === index
                          ? "opacity-100 transform-none"
                          : "opacity-0 translate-y-3"
                      }`}
                    >
                      {word}
                    </span>
                  ))}
                  <span className="opacity-0">Placeholder</span>
                </span>
              </span>
              . The future of job searching and recruiting is here.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 mb-8 transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-10"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <Link
                to={"/job"}
                className="group bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all shadow-lg hover:shadow-indigo-500/30 relative overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span
                  className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-20"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.3), transparent 70%)",
                  }}
                ></span>
                <span className="relative flex items-center justify-center">
                  Find Jobs
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>

                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="block whitespace-nowrap">
                    10,000+ open positions
                  </span>
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></span>
                </div>
              </Link>
              <Link
                to={"/post-job"}
                className="group bg-gray-900 hover:bg-gray-800 text-gray-100 px-8 py-4 rounded-lg font-medium text-lg transition-all border border-gray-800 hover:border-indigo-500/30 shadow-lg relative overflow-hidden"
              >
                <span
                  className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-20"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.2), transparent 70%)",
                  }}
                ></span>
                <span className="relative flex items-center justify-center">
                  Post Jobs
                  <ArrowRight className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </span>

                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="block whitespace-nowrap">
                    Reach 5M+ candidates
                  </span>
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></span>
                </div>
              </Link>
            </div>

            <div
              className={`flex flex-wrap gap-6 transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-10"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              <div className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center mr-3 border border-indigo-500/20 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-5 h-5 text-indigo-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  10,000+ Jobs
                </span>
              </div>
              <div className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center mr-3 border border-indigo-500/20 group-hover:scale-110 transition-transform">
                  <Users className="w-5 h-5 text-indigo-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  5,000+ Companies
                </span>
              </div>
              <div className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center mr-3 border border-indigo-500/20 group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5 text-indigo-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  24/7 Support
                </span>
              </div>
            </div>
          </div>

          {/* Right content - Interactive Dashboard Mockup (smaller size) */}
          <div
            className={`lg:w-2/5 transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <div className="relative max-w-sm mx-auto lg:mx-0 lg:ml-auto">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-16 h-16 border-t-2 border-l-2 border-indigo-500/30 rounded-tl-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 border-b-2 border-r-2 border-indigo-500/30 rounded-br-xl"></div>

              {/* Dashboard mockup */}
              <div className="bg-gradient-to-b from-gray-900 to-black rounded-xl shadow-2xl overflow-hidden border border-gray-800 relative hover:scale-[1.02] transition-all duration-500 group">
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-20 blur-sm rounded-xl group-hover:opacity-30 transition-opacity"></div>

                {/* Dashboard header */}
                <div className="bg-black/50 backdrop-blur-sm p-3 border-b border-gray-800 flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-indigo-500 font-bold text-base mr-3">
                      Aspire
                    </span>
                    <div className="hidden md:flex space-x-3">
                      <button className="text-gray-300 hover:text-white text-xs">
                        Dashboard
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-medium">
                      SB
                    </div>
                  </div>
                </div>

                {/* Tab navigation */}
                <div className="bg-black/30 p-2 border-b border-gray-800 flex">
                  <button
                    className={`px-3 py-1 text-xs rounded-lg transition-colors ${
                      activeTab === "recruiter"
                        ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                        : "text-gray-400 hover:text-gray-300"
                    }`}
                    onClick={() => setActiveTab("recruiter")}
                  >
                    <span className="flex items-center">
                      <Briefcase className="w-3 h-3 mr-1" />
                      Recruiter
                    </span>
                  </button>
                  <button
                    className={`px-3 py-1 text-xs rounded-lg ml-2 transition-colors ${
                      activeTab === "candidate"
                        ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                        : "text-gray-400 hover:text-gray-300"
                    }`}
                    onClick={() => setActiveTab("candidate")}
                  >
                    <span className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      Candidate
                    </span>
                  </button>
                </div>

                {/* Dashboard content */}
                <div className="p-4">
                  {activeTab === "recruiter" ? (
                    <>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                          Hiring Overview
                        </h3>
                        <div className="flex space-x-2">
                          <button className="bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 text-xs px-2 py-0.5 rounded-lg transition-colors border border-indigo-500/30 flex items-center">
                            <Zap className="w-3 h-3 mr-1" />
                            Post Job
                          </button>
                        </div>
                      </div>

                      {/* Stats cards */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="bg-gray-900/50 backdrop-blur-sm p-2 rounded-lg border border-gray-800 hover:border-indigo-500/30 transition-colors group">
                          <div className="flex items-center justify-between mb-1">
                            <div className="text-gray-400 text-xs">Jobs</div>
                            <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center">
                              <Briefcase className="w-3 h-3 text-indigo-400" />
                            </div>
                          </div>
                          <div className="text-base font-bold text-white">
                            12
                          </div>
                          <div className="text-[10px] text-green-400 flex items-center">
                            <ArrowRight className="w-2 h-2 mr-0.5 rotate-[-45deg]" />
                            +3 this week
                          </div>
                        </div>

                        <div className="bg-gray-900/50 backdrop-blur-sm p-2 rounded-lg border border-gray-800 hover:border-indigo-500/30 transition-colors group">
                          <div className="flex items-center justify-between mb-1">
                            <div className="text-gray-400 text-xs">Apps</div>
                            <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                              <Users className="w-3 h-3 text-purple-400" />
                            </div>
                          </div>
                          <div className="text-base font-bold text-white">
                            48
                          </div>
                          <div className="text-[10px] text-green-400 flex items-center">
                            <ArrowRight className="w-2 h-2 mr-0.5 rotate-[-45deg]" />
                            +12 this week
                          </div>
                        </div>

                        <div className="bg-gray-900/50 backdrop-blur-sm p-2 rounded-lg border border-gray-800 hover:border-indigo-500/30 transition-colors group">
                          <div className="flex items-center justify-between mb-1">
                            <div className="text-gray-400 text-xs">
                              Interviews
                            </div>
                            <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                              <Users className="w-3 h-3 text-blue-400" />
                            </div>
                          </div>
                          <div className="text-base font-bold text-white">
                            8
                          </div>
                          <div className="text-[10px] text-green-400 flex items-center">
                            <ArrowRight className="w-2 h-2 mr-0.5 rotate-[-45deg]" />
                            +2 this week
                          </div>
                        </div>
                      </div>

                      {/* Recent applications */}
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium text-xs text-gray-300">
                            Recent Applications
                          </h4>
                          <button className="text-indigo-400 text-[10px] hover:text-indigo-300 transition-colors">
                            View all
                          </button>
                        </div>

                        <div className="space-y-2">
                          {[
                            {
                              name: "Soumojit Banerjee",
                              role: "UI/UX Designer",
                              time: "2h ago",
                              status: "new",
                            },
                            {
                              name: "Michael Chen",
                              role: "Frontend Dev",
                              time: "5h ago",
                              status: "reviewed",
                            },
                          ].map((applicant, index) => (
                            <div
                              key={index}
                              className="bg-gray-900/50 backdrop-blur-sm p-2 rounded-lg border border-gray-800 hover:border-indigo-500/30 transition-colors flex justify-between items-center group"
                            >
                              <div className="flex items-center">
                                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 mr-2 flex-shrink-0 group-hover:scale-105 transition-transform"></div>
                                <div>
                                  <div className="font-medium text-xs group-hover:text-indigo-300 transition-colors">
                                    {applicant.name}
                                  </div>
                                  <div className="text-gray-400 text-[10px]">
                                    {applicant.role}
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className="text-gray-500 text-[10px] mr-2">
                                  {applicant.time}
                                </div>
                                <div
                                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                                    applicant.status === "new"
                                      ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                                      : applicant.status === "reviewed"
                                      ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                                      : "bg-green-500/20 text-green-400 border border-green-500/30"
                                  }`}
                                >
                                  {applicant.status === "new"
                                    ? "New"
                                    : applicant.status === "reviewed"
                                    ? "Reviewed"
                                    : "Interview"}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Activity chart */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium text-xs text-gray-300">
                            Application Activity
                          </h4>
                          <div className="flex space-x-1">
                            <button className="text-[10px] text-gray-400 bg-gray-800 px-1.5 py-0.5 rounded hover:bg-gray-700 transition-colors">
                              Week
                            </button>
                            <button className="text-[10px] text-indigo-300 bg-indigo-500/20 px-1.5 py-0.5 rounded border border-indigo-500/30">
                              Month
                            </button>
                          </div>
                        </div>

                        <div className="bg-gray-900/50 backdrop-blur-sm p-2 rounded-lg border border-gray-800 h-20 relative group">
                          {/* Chart bars */}
                          <div className="absolute inset-x-2 bottom-2 top-2 flex items-end justify-between">
                            {[35, 50, 25, 60, 75, 40, 30].map(
                              (height, index) => (
                                <div
                                  key={index}
                                  className="w-3 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-sm group-hover:from-indigo-500 group-hover:to-indigo-300 transition-colors"
                                  style={{
                                    height: `${height}%`,
                                    transform: "scaleY(0.95)",
                                    transition:
                                      "transform 0.3s ease, height 0.5s ease",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.transform =
                                      "scaleY(1.05)";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.transform =
                                      "scaleY(0.95)";
                                  }}
                                ></div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                          Job Search
                        </h3>
                        <div className="flex space-x-2">
                          <button className="bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 text-xs px-2 py-0.5 rounded-lg transition-colors border border-indigo-500/30 flex items-center">
                            <Zap className="w-3 h-3 mr-1" />
                            Update
                          </button>
                        </div>
                      </div>

                      {/* Search bar */}
                      <div className="relative mb-4">
                        <input
                          type="text"
                          placeholder="Search jobs..."
                          className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg py-1.5 px-3 pl-7 text-gray-300 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-transparent"
                        />
                        <svg
                          className="absolute left-2 top-2 w-3 h-3 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>

                      {/* Job matches */}
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium text-xs text-gray-300">
                            Top Job Matches
                          </h4>
                          <button className="text-indigo-400 text-[10px] hover:text-indigo-300 transition-colors">
                            View all
                          </button>
                        </div>

                        <div className="space-y-2">
                          {[
                            {
                              title: "Senior Frontend Developer",
                              company: "TechCorp",
                              location: "San Francisco",
                              match: 98,
                            },
                            {
                              title: "UX Designer",
                              company: "DesignHub",
                              location: "Remote",
                              match: 92,
                            },
                          ].map((job, index) => (
                            <div
                              key={index}
                              className="bg-gray-900/50 backdrop-blur-sm p-2 rounded-lg border border-gray-800 hover:border-indigo-500/30 transition-colors group"
                            >
                              <div className="flex justify-between items-start mb-1">
                                <div>
                                  <div className="font-medium text-xs group-hover:text-indigo-300 transition-colors">
                                    {job.title}
                                  </div>
                                  <div className="text-gray-400 text-[10px]">
                                    {job.company}
                                  </div>
                                </div>
                                <div
                                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                                    job.match > 90
                                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                      : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                                  }`}
                                >
                                  {job.match}% match
                                </div>
                              </div>
                              <div className="flex justify-between items-center text-[10px] text-gray-500">
                                <span>{job.location}</span>
                                <button className="text-indigo-400 hover:text-indigo-300 transition-colors">
                                  Apply
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Skills section */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium text-xs text-gray-300">
                            Your Skills
                          </h4>
                          <button className="text-indigo-400 text-[10px] hover:text-indigo-300 transition-colors">
                            Edit
                          </button>
                        </div>

                        <div className="bg-gray-900/50 backdrop-blur-sm p-2 rounded-lg border border-gray-800">
                          <div className="flex flex-wrap gap-1 mb-2">
                            {[
                              "React",
                              "TypeScript",
                              "UI/UX",
                              "Figma",
                              "Node",
                            ].map((skill, index) => (
                              <span
                                key={index}
                                className="bg-indigo-500/10 text-indigo-300 text-[10px] px-2 py-0.5 rounded-full border border-indigo-500/20"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="text-[10px] text-gray-400">
                              Profile strength
                            </div>
                            <div className="text-[10px] text-indigo-400">
                              85%
                            </div>
                          </div>
                          <div className="h-1 bg-gray-800 rounded-full mt-1 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full"
                              style={{ width: "85%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Bottom stats bar */}
                <div
                  className="bg-black/50 backdrop-blur-sm border-t border-gray-800 p-2 grid grid-cols-3 divide-x divide-gray-800"
                  onMouseEnter={() => setHoverStats(true)}
                  onMouseLeave={() => setHoverStats(false)}
                >
                  <div className="flex flex-col items-center justify-center px-1 hover:bg-gray-900/30 transition-colors group">
                    <div className="text-[10px] text-gray-400 group-hover:text-gray-300 transition-colors">
                      Active Users
                    </div>
                    <div className="font-bold text-xs text-indigo-400 group-hover:text-indigo-300 transition-colors flex items-center">
                      <span
                        className={`transition-transform duration-500 ${
                          hoverStats ? "scale-110" : "scale-100"
                        }`}
                      >
                        12.5k+
                      </span>
                      <BarChart3
                        className={`w-2 h-2 ml-1 text-green-400 transition-opacity duration-500 ${
                          hoverStats ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center px-1 hover:bg-gray-900/30 transition-colors group">
                    <div className="text-[10px] text-gray-400 group-hover:text-gray-300 transition-colors">
                      Job Postings
                    </div>
                    <div className="font-bold text-xs text-indigo-400 group-hover:text-indigo-300 transition-colors flex items-center">
                      <span
                        className={`transition-transform duration-500 ${
                          hoverStats ? "scale-110" : "scale-100"
                        }`}
                      >
                        8.3k+
                      </span>
                      <BarChart3
                        className={`w-2 h-2 ml-1 text-green-400 transition-opacity duration-500 ${
                          hoverStats ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center px-1 hover:bg-gray-900/30 transition-colors group">
                    <div className="text-[10px] text-gray-400 group-hover:text-gray-300 transition-colors">
                      Hires
                    </div>
                    <div className="font-bold text-xs text-indigo-400 group-hover:text-indigo-300 transition-colors flex items-center">
                      <span
                        className={`transition-transform duration-500 ${
                          hoverStats ? "scale-110" : "scale-100"
                        }`}
                      >
                        5.2k+
                      </span>
                      <BarChart3
                        className={`w-2 h-2 ml-1 text-green-400 transition-opacity duration-500 ${
                          hoverStats ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }

        @keyframes float-slow-reverse {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(20px) scale(1.05);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.2) rotate(10deg);
            opacity: 0.3;
          }
        }

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

        @keyframes float-particle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
