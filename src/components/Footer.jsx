"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Enhanced footer with more beautiful design
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("footer-section");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.9) {
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
    <footer
      className="bg-black border-t border-gray-900 pt-16 pb-8 relative overflow-hidden"
      id="footer-section"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-indigo-900/10 to-transparent pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-600/5 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-6 group">
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-600 group-hover:from-indigo-300 group-hover:to-purple-600 transition-all duration-300">
                Aspire
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              Connecting talent with opportunity — seamlessly. The future of job
              searching and recruiting is here.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/soumojit622"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:bg-gray-800 transition-colors border border-gray-800 hover:border-indigo-500/30 group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/soumojit-banerjee-4914b3228/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:bg-gray-800 transition-colors border border-gray-800 hover:border-indigo-500/30 group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com/yourhandle" // Replace with your actual Twitter link
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:bg-gray-800 transition-colors border border-gray-800 hover:border-indigo-500/30 group"
              >
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-indigo-500">
              For Employers
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors text-sm flex items-center group"
                >
                  <span className="w-1 h-1 bg-indigo-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  Post a Job
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors text-sm flex items-center group"
                >
                  <span className="w-1 h-1 bg-indigo-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors text-sm flex items-center group"
                >
                  <span className="w-1 h-1 bg-indigo-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  Recruiting Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors text-sm flex items-center group"
                >
                  <span className="w-1 h-1 bg-indigo-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-indigo-500">
              For Job Seekers
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors text-sm flex items-center group"
                >
                  <span className="w-1 h-1 bg-indigo-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors text-sm flex items-center group"
                >
                  <span className="w-1 h-1 bg-indigo-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  Create Profile
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors text-sm flex items-center group"
                >
                  <span className="w-1 h-1 bg-indigo-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  Career Resources
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors text-sm flex items-center group"
                >
                  <span className="w-1 h-1 bg-indigo-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  Job Alerts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-indigo-500">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors text-sm flex items-center group"
                >
                  <span className="w-1 h-1 bg-indigo-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors text-sm flex items-center group"
                >
                  <span className="w-1 h-1 bg-indigo-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors text-sm flex items-center group"
                >
                  <span className="w-1 h-1 bg-indigo-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors text-sm flex items-center group"
                >
                  <span className="w-1 h-1 bg-indigo-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`mt-12 pt-8 border-t border-gray-900 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} Aspire. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Empowering careers worldwide
              </p>
              <p className="text-gray-400 text-md mt-1">
                Made with 🤍 by{" "}
                <span className="text-indigo-300">Soumojit Banerjee</span>
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition-colors relative group"
              >
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500/50 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition-colors relative group"
              >
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500/50 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition-colors relative group"
              >
                Cookie Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500/50 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition-colors relative group"
              >
                Accessibility
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500/50 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
