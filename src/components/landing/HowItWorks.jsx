import { FileText, Users, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Post Job",
      description:
        "Create detailed job listings with custom fields, requirements, and benefits.",
      icon: FileText,
      color: "bg-indigo-500",
    },
    {
      title: "Get Applications",
      description:
        "Receive applications from qualified candidates and review them in one place.",
      icon: Users,
      color: "bg-indigo-600",
    },
    {
      title: "Hire Talent",
      description:
        "Select the perfect candidate and streamline the onboarding process.",
      icon: CheckCircle,
      color: "bg-indigo-700",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-400 to-indigo-600 pb-5">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A simple three-step process to find and hire the best talent for
            your team.
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div
                  className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400">{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="w-8 h-8 rotate-90 text-gray-600 mt-4 md:hidden">
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
