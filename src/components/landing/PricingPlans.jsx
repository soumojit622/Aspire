import { Check, X } from "lucide-react";

export default function PricingPlans() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description:
        "Perfect for individuals and small teams just getting started.",
      features: [
        { name: "Up to 3 active job postings", included: true },
        { name: "Basic candidate filtering", included: true },
        { name: "Email notifications", included: true },
        { name: "Standard job templates", included: true },
        { name: "Team collaboration", included: false },
        { name: "Advanced analytics", included: false },
        { name: "API access", included: false },
        { name: "Priority support", included: false },
      ],
      cta: "Get Started",
      highlight: false,
    },
    {
      name: "Pro",
      price: "$49",
      period: "per month",
      description: "Ideal for growing companies with active hiring needs.",
      features: [
        { name: "Unlimited job postings", included: true },
        { name: "Advanced candidate filtering", included: true },
        { name: "Real-time notifications", included: true },
        { name: "Custom job templates", included: true },
        { name: "Team collaboration", included: true },
        { name: "Advanced analytics", included: true },
        { name: "API access", included: false },
        { name: "Priority support", included: false },
      ],
      cta: "Start Free Trial",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex hiring workflows.",
      features: [
        { name: "Unlimited job postings", included: true },
        { name: "Advanced candidate filtering", included: true },
        { name: "Real-time notifications", included: true },
        { name: "Custom job templates", included: true },
        { name: "Team collaboration", included: true },
        { name: "Advanced analytics", included: true },
        { name: "API access", included: true },
        { name: "Priority support", included: true },
      ],
      cta: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-400 to-indigo-600 pb-5">
            Pricing Plans
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the perfect plan for your hiring needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gray-900 rounded-xl overflow-hidden border relative ${
                plan.highlight
                  ? "border-indigo-500 shadow-lg shadow-indigo-500/20"
                  : "border-gray-800"
              }`}
            >
              {plan.highlight && (
                <>
                  {/* Glow effect for highlighted plan */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-indigo-600 opacity-20 blur-sm rounded-xl"></div>
                  <div className="relative">
                    <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white text-center text-sm py-1 font-medium">
                      Most Popular
                    </div>
                  </div>
                </>
              )}

              <div className="p-6 relative">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-400 text-sm ml-1">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                <button
                  className={`w-full py-2 rounded-lg font-medium mb-6 ${
                    plan.highlight
                      ? "bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white shadow-lg shadow-indigo-500/20"
                      : "bg-gray-800 hover:bg-gray-700 text-gray-200"
                  } transition-colors`}
                >
                  {plan.cta}
                </button>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                      )}
                      <span
                        className={
                          feature.included ? "text-gray-300" : "text-gray-500"
                        }
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Need a custom solution? Contact our sales team for a tailored plan.
          </p>
          <button className="bg-gray-800 hover:bg-gray-700 text-gray-200 px-6 py-2 rounded-lg font-medium transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}
