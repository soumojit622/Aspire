"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(null); // Removed type annotation

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("faq-section");
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

  const faqs = [
    {
      question: "How does Aspire help with the hiring process?",
      answer:
        "Aspire streamlines your hiring process by providing tools for job posting, candidate filtering, team collaboration, and real-time updates. Our platform helps you find the right candidates faster and more efficiently.",
    },
    {
      question: "What pricing plans are available?",
      answer:
        "We offer three pricing tiers: Free (for individuals and small teams), Pro ($49/month for growing companies), and Enterprise (custom pricing for large organizations). Each plan includes different features to suit your hiring needs.",
    },
    {
      question: "Can I try Aspire before committing to a paid plan?",
      answer:
        "Yes! You can start with our Free plan to explore the platform's basic features. We also offer a 14-day free trial of our Pro plan, allowing you to experience all the premium features before making a decision.",
    },
    {
      question: "How does the team collaboration feature work?",
      answer:
        "Our team collaboration feature allows multiple team members to review candidates, leave comments, and make hiring decisions together. You can assign different roles and permissions to team members and track all activities in real-time.",
    },
    {
      question: "Is Aspire suitable for both recruiters and job seekers?",
      answer:
        "Aspire is designed for both sides of the hiring process. Recruiters can post jobs and manage candidates, while job seekers can create profiles, search for opportunities, and track their applications.",
    },
    {
      question: "How secure is my data on Aspire?",
      answer:
        "We take data security very seriously. Aspire uses industry-standard encryption and security practices to protect your information. We are GDPR compliant and never share your data with third parties without your consent.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 " id="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-400 to-indigo-600">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">
            Find answers to common questions about Aspire.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-gray-900 rounded-lg border transition-all duration-500 transform ${
                openIndex === index
                  ? "border-indigo-500 shadow-lg shadow-indigo-500/10 scale-[1.01]"
                  : "border-gray-800"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <h3
                  className={`font-medium text-lg transition-colors ${
                    openIndex === index ? "text-indigo-400" : "text-white"
                  }`}
                >
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    openIndex === index
                      ? "transform rotate-180 text-indigo-400"
                      : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-4 pt-0 text-gray-400">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <p className="text-gray-400 mb-4">
            Still have questions? We're here to help.
          </p>
          <button className="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-2 rounded-lg font-medium transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-105">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
