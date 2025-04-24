import { Search, Filter, Tag, Settings } from "lucide-react";

export default function CustomizationSection() {
  const tags = [
    { name: "Remote", color: "bg-indigo-500" },
    { name: "Full-time", color: "bg-green-500" },
    { name: "Contract", color: "bg-amber-500" },
    { name: "Senior", color: "bg-blue-500" },
    { name: "Junior", color: "bg-purple-500" },
    { name: "Engineering", color: "bg-red-500" },
    { name: "Design", color: "bg-teal-500" },
    { name: "Marketing", color: "bg-pink-500" },
  ];

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-400 to-indigo-600">
              Powerful Customization
            </h2>
            <p className="text-xl text-gray-400 mb-6">
              Tailor your job listings and search experience with advanced
              filtering, tags, and custom fields.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-indigo-500/20 p-3 rounded-lg mr-4 border border-indigo-500/30">
                  <Filter className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Advanced Filtering
                  </h3>
                  <p className="text-gray-400">
                    Filter candidates by skills, experience, location, and more
                    to find the perfect match.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-500/20 p-3 rounded-lg mr-4 border border-indigo-500/30">
                  <Tag className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Custom Tags</h3>
                  <p className="text-gray-400">
                    Create custom tags to categorize jobs and candidates for
                    better organization.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-500/20 p-3 rounded-lg mr-4 border border-indigo-500/30">
                  <Search className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Smart Search</h3>
                  <p className="text-gray-400">
                    Find exactly what you're looking for with our powerful
                    search capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="bg-gray-900 rounded-xl shadow-xl border border-gray-800 p-6 relative">
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-indigo-600 opacity-10 blur-sm rounded-xl"></div>
              <div className="relative">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold">Search & Filter</h3>
                  <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                    <Settings className="w-5 h-5" />
                  </button>
                </div>

                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="Search for jobs, skills, or companies..."
                    className="w-full bg-black border border-gray-800 rounded-lg py-3 px-4 pl-10 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-3.5 w-4 h-4 text-gray-500" />
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-3">Popular Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`${tag.color}/20 text-sm px-3 py-1 rounded-full border border-${tag.color}/30 cursor-pointer hover:bg-${tag.color}/30 transition-colors`}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="text-sm text-gray-400 block mb-1">
                      Experience Level
                    </label>
                    <select className="w-full bg-black border border-gray-800 rounded-lg py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                      <option>Any Level</option>
                      <option>Entry Level</option>
                      <option>Mid Level</option>
                      <option>Senior Level</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 block mb-1">
                      Job Type
                    </label>
                    <select className="w-full bg-black border border-gray-800 rounded-lg py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                      <option>Any Type</option>
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Contract</option>
                      <option>Internship</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg transition-colors">
                    Reset Filters
                  </button>
                  <button className="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-4 py-2 rounded-lg transition-colors shadow-lg shadow-indigo-500/20">
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
