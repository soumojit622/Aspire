"use client";

import { CheckCircle, Clock, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function DashboardMockupSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("dashboard-mockup-section");
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

  const jobColumns = [
    {
      title: "Open Jobs",
      count: 12,
      color: "bg-indigo-500",
      items: [
        {
          title: "Senior Frontend Developer",
          company: "Infosys",
          status: "active",
          days: 3,
        },
        {
          title: "UX Designer",
          company: "Zeta Design Studio",
          status: "active",
          days: 5,
        },
        {
          title: "Product Manager",
          company: "Reliance Tech",
          status: "active",
          days: 1,
        },
      ],
    },
    {
      title: "Applications",
      count: 47,
      color: "bg-amber-500",
      items: [
        {
          title: "Rohit Verma",
          role: "Frontend Developer",
          status: "review",
          days: 2,
        },
        {
          title: "Megha Kapoor",
          role: "UX Designer",
          status: "interview",
          days: 1,
        },
        {
          title: "Aditya Iyer",
          role: "Product Manager",
          status: "review",
          days: 3,
        },
      ],
    },
    {
      title: "Hires",
      count: 8,
      color: "bg-green-500",
      items: [
        {
          title: "Neha Sharma",
          role: "Frontend Developer",
          status: "hired",
          days: 14,
        },
        {
          title: "Siddharth Rao",
          role: "UX Designer",
          status: "hired",
          days: 21,
        },
        {
          title: "Ishita Mehta",
          role: "Product Manager",
          status: "hired",
          days: 7,
        },
      ],
    },
  ];

  return (
    <section className="py-20 " id="dashboard-mockup-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-400 to-indigo-600">
            Powerful Dashboard
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Track your hiring pipeline with our intuitive dashboard and
            real-time updates.
          </p>
        </div>

        <div
          className={`bg-gray-900 rounded-xl shadow-2xl border border-gray-800 overflow-hidden relative transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-10 blur-sm rounded-xl"></div>

          {/* Dashboard header */}
          <div className="bg-black p-4 border-b border-gray-800 flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-indigo-500 font-bold text-lg mr-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-600">
                Aspire
              </span>
              <div className="hidden md:flex space-x-4">
                <button className="text-gray-300 hover:text-white text-sm relative group">
                  Dashboard
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
                </button>
                <button className="text-gray-300 hover:text-white text-sm relative group">
                  Jobs
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
                </button>
                <button className="text-gray-300 hover:text-white text-sm relative group">
                  Candidates
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
                </button>
                <button className="text-gray-300 hover:text-white text-sm relative group">
                  Analytics
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-medium">
                AD
              </div>
              <span className="hidden md:inline text-sm">Admin</span>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Hiring Pipeline
              </h3>
              <div className="flex space-x-2">
                <button className="bg-gray-800 hover:bg-gray-700 text-sm px-3 py-1 rounded transition-colors flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                  Filter
                </button>
                <button className="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-sm px-3 py-1 rounded transition-colors shadow-lg shadow-indigo-500/20 flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  New Job
                </button>
              </div>
            </div>

            {/* Kanban board */}
            <div className="grid md:grid-cols-3 gap-4">
              {jobColumns.map((column, columnIndex) => (
                <div
                  key={columnIndex}
                  className="bg-black rounded-lg p-4 border border-gray-800 hover:border-gray-700 transition-colors"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <div
                        className={`w-3 h-3 ${column.color} rounded-full mr-2`}
                      ></div>
                      <h4 className="font-medium">{column.title}</h4>
                    </div>
                    <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded-full">
                      {column.count}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {column.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="bg-gray-900 p-3 rounded border border-gray-800 shadow-sm hover:border-indigo-500/30 hover:shadow-md hover:shadow-indigo-500/5 transition-all duration-300 group"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-medium text-sm group-hover:text-white transition-colors">
                            {item.title}
                          </h5>
                          {item.status === "active" && (
                            <span className="bg-green-500/20 text-green-400 text-xs px-1.5 py-0.5 rounded-full border border-green-500/30 group-hover:bg-green-500/30 transition-colors">
                              Active
                            </span>
                          )}
                          {item.status === "review" && (
                            <span className="bg-amber-500/20 text-amber-400 text-xs px-1.5 py-0.5 rounded-full border border-amber-500/30 group-hover:bg-amber-500/30 transition-colors">
                              Review
                            </span>
                          )}
                          {item.status === "interview" && (
                            <span className="bg-blue-500/20 text-blue-400 text-xs px-1.5 py-0.5 rounded-full border border-blue-500/30 group-hover:bg-blue-500/30 transition-colors">
                              Interview
                            </span>
                          )}
                          {item.status === "hired" && (
                            <span className="bg-green-500/20 text-green-400 text-xs px-1.5 py-0.5 rounded-full border border-green-500/30 group-hover:bg-green-500/30 transition-colors">
                              Hired
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-gray-400">
                          {columnIndex === 0 ? item.company : item.role}
                        </div>
                        <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {item.days} {item.days === 1 ? "day" : "days"} ago
                          </div>
                          {columnIndex === 1 && (
                            <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button className="p-1 hover:bg-gray-800 rounded">
                                <CheckCircle className="w-3 h-3 text-green-500" />
                              </button>
                              <button className="p-1 hover:bg-gray-800 rounded">
                                <X className="w-3 h-3 text-red-500" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
