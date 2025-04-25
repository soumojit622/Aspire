"use client";

import { useState, useEffect, useRef } from "react";
import {
  FileText,
  Users,
  CheckCircle,
  ArrowRight,
  Briefcase,
  Search,
  MessageSquare,
} from "lucide-react";

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const position = sectionRef.current.getBoundingClientRect();
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

    // Auto-advance steps
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (section) {
        section.removeEventListener("mousemove", handleMouseMove);
      }
      clearInterval(interval);
    };
  }, []);

  const steps = [
    {
      title: "Post Job",
      description:
        "Create job listings with custom fields, requirements, and benefits.",
      icon: FileText,
      color: "from-indigo-500 to-indigo-600",
      detailedSteps: [
        "Fill out job details form",
        "Add requirements & qualifications",
        "Set salary range & benefits",
        "Preview & publish your listing",
      ],
    },
    {
      title: "Get Applications",
      description: "Receive and review qualified applications in one place.",
      icon: Users,
      color: "from-indigo-600 to-purple-600",
      detailedSteps: [
        "Receive candidate applications",
        "Filter by skills & experience",
        "Review resumes & portfolios",
        "Rate & shortlist candidates",
      ],
    },
    {
      title: "Hire Talent",
      description:
        "Select the perfect candidate and streamline the onboarding process.",
      icon: CheckCircle,
      color: "from-purple-600 to-indigo-700",
      detailedSteps: [
        "Schedule interviews",
        "Collaborate with your team",
        "Make hiring decisions",
        "Onboard new employees",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      id="how-it-works"
    >
      {/* Interactive spotlight effect */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.15), transparent 40%)`,
          transition: "background 0.2s",
        }}
      ></div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-indigo-500/0 via-indigo-500/30 to-indigo-500/0 h-px"
              style={{
                top: `${20 + i * 15}%`,
                left: "0",
                right: "0",
                transform: "rotate(-1deg)",
                transformOrigin: "center",
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-400 to-indigo-600 pb-5 relative inline-block">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A simple three-step process to find and hire the best talent for
            your team.
          </p>
        </div>

        <div className="relative">
          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center transition-all duration-500 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${activeStep === index ? "scale-105" : "scale-100"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${
                    step.color
                  } rounded-full flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20 transition-all duration-300 ${
                    activeStep === index || hoverIndex === index
                      ? "shadow-indigo-500/40 scale-110"
                      : ""
                  }`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <div className="relative">
                  <span className="absolute -left-8 top-1 text-2xl font-bold text-indigo-500/30">
                    0{index + 1}
                  </span>
                  <h3
                    className={`text-xl font-bold mb-3 transition-colors ${
                      activeStep === index || hoverIndex === index
                        ? "text-indigo-400"
                        : "text-white"
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>

                <p className="text-gray-400 mb-4">{step.description}</p>

                {/* Detailed steps */}
                <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800 w-full mt-2 transition-all duration-300 hover:border-indigo-500/30">
                  <ul className="text-left space-y-2">
                    {step.detailedSteps.map((detailStep, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <div
                          className={`w-5 h-5 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mr-2 text-[10px] text-white`}
                        >
                          {i + 1}
                        </div>
                        {detailStep}
                      </li>
                    ))}
                  </ul>
                </div>

                {index < steps.length - 1 && (
                  <div className="w-8 h-8 rotate-90 text-indigo-500 mt-4 md:hidden">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Process visualization */}
          <div
            className={`mt-16 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:w-1/3 text-center md:text-left">
                <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-indigo-600">
                  Your Hiring Journey
                </h3>
                <p className="text-gray-400">
                  Follow our streamlined process to find the perfect candidates
                  for your team.
                </p>
                <button className="mt-4 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-lg shadow-indigo-500/20 flex items-center mx-auto md:mx-0">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>

              <div className="flex-1 grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center mb-2">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-white">
                      Create Job
                    </div>
                    <div className="text-xs text-gray-400">5 min</div>
                  </div>
                </div>

                <div className="flex flex-col items-center relative">
                  <div className="absolute top-6 -left-8 w-6 h-0.5 bg-indigo-500/50"></div>
                  <div className="absolute top-6 -right-8 w-6 h-0.5 bg-indigo-500/50"></div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mb-2">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-white">Review</div>
                    <div className="text-xs text-gray-400">Ongoing</div>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center mb-2">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-white">
                      Interview
                    </div>
                    <div className="text-xs text-gray-400">30 min</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 text-center hover:border-indigo-500/30 transition-colors group">
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-600 mb-2 group-hover:scale-110 transition-transform">
              75%
            </div>
            <div className="text-gray-400">Faster Hiring Process</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 text-center hover:border-indigo-500/30 transition-colors group">
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-600 mb-2 group-hover:scale-110 transition-transform">
              2x
            </div>
            <div className="text-gray-400">More Qualified Candidates</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 text-center hover:border-indigo-500/30 transition-colors group">
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-600 mb-2 group-hover:scale-110 transition-transform">
              90%
            </div>
            <div className="text-gray-400">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
