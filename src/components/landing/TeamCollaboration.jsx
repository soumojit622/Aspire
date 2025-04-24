import { MessageSquare, ThumbsUp, AlertCircle } from "lucide-react";

export default function TeamCollaboration() {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-400 to-indigo-600 pb-5">
            Team Collaboration
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Work together with your team to review candidates and make hiring
            decisions.
          </p>
        </div>

        <div className="bg-gray-900 rounded-xl shadow-xl border border-gray-800 overflow-hidden relative">
          {/* Glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-indigo-600 opacity-10 blur-sm rounded-xl"></div>
          <div className="relative">
            <div className="border-b border-gray-800 p-4 flex justify-between items-center">
              <div className="flex items-center">
                <h3 className="font-bold">Senior Frontend Developer</h3>
                <span className="ml-3 bg-amber-500/20 text-amber-400 text-xs px-2 py-0.5 rounded-full border border-amber-500/30">
                  Under Review
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 border-2 border-black flex items-center justify-center text-xs font-medium">
                    JD
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-black flex items-center justify-center text-xs font-medium">
                    KL
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-black flex items-center justify-center text-xs font-medium">
                    MR
                  </div>
                </div>
                <button className="bg-gray-800 hover:bg-gray-700 text-xs px-2 py-1 rounded transition-colors">
                  Share
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-800">
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-4">
                    Candidate Profile
                  </h4>
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 mr-4 flex-shrink-0 border border-gray-800 flex items-center justify-center text-white font-semibold text-sm">
                      RD
                    </div>

                    <div>
                      <h5 className="font-medium">Rahul Das</h5>
                      <p className="text-gray-400 text-sm">
                        Frontend Developer with 5 years of experience
                      </p>
                      <div className="flex items-center mt-1 text-sm text-gray-500">
                        <span>Kolkata, West Bengal</span>
                        <span className="mx-2">•</span>
                        <span>Applied 2 days ago</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h6 className="text-sm font-medium text-gray-400 mb-1">
                        Skills
                      </h6>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-800 text-xs px-2 py-1 rounded border border-gray-700 hover:border-indigo-500/30 transition-colors">
                          React
                        </span>
                        <span className="bg-gray-800 text-xs px-2 py-1 rounded border border-gray-700 hover:border-indigo-500/30 transition-colors">
                          TypeScript
                        </span>
                        <span className="bg-gray-800 text-xs px-2 py-1 rounded border border-gray-700 hover:border-indigo-500/30 transition-colors">
                          Next.js
                        </span>
                        <span className="bg-gray-800 text-xs px-2 py-1 rounded border border-gray-700 hover:border-indigo-500/30 transition-colors">
                          Tailwind CSS
                        </span>
                        <span className="bg-gray-800 text-xs px-2 py-1 rounded border border-gray-700 hover:border-indigo-500/30 transition-colors">
                          GraphQL
                        </span>
                      </div>
                    </div>

                    <div>
                      <h6 className="text-sm font-medium text-gray-400 mb-1">
                        Experience
                      </h6>
                      <div className="bg-black p-3 rounded-lg border border-gray-800">
                        <div className="flex justify-between">
                          <div>
                            <div className="font-medium">
                              Senior Frontend Developer
                            </div>
                            <div className="text-sm text-gray-400">
                              TechCorp Inc.
                            </div>
                          </div>
                          <div className="text-sm text-gray-500">
                            2020 - Present
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2 rounded-lg transition-colors flex items-center justify-center shadow-lg shadow-green-500/20">
                    <ThumbsUp className="w-4 h-4 mr-2" /> Approve
                  </button>
                  <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg transition-colors flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 mr-2" /> Message
                  </button>
                  <button className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-2 rounded-lg transition-colors flex items-center justify-center shadow-lg shadow-red-500/20">
                    <AlertCircle className="w-4 h-4 mr-2" /> Reject
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-lg font-medium mb-4">Team Comments</h4>

                <div className="space-y-4">
                  <div className="bg-black p-4 rounded-lg border border-gray-800">
                    <div className="flex items-start mb-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 mr-3 flex-shrink-0 flex items-center justify-center text-xs font-medium">
                        RS
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h5 className="font-medium">Riya Sharma</h5>
                          <span className="ml-2 text-xs text-gray-500">
                            HR Manager
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">
                          2 hours ago
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Strong candidate with relevant experience. I'm impressed
                      with his portfolio and previous work at Infosys.
                    </p>
                  </div>

                  <div className="bg-black p-4 rounded-lg border border-gray-800">
                    <div className="flex items-start mb-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 mr-3 flex-shrink-0 flex items-center justify-center text-xs font-medium">
                        AM
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h5 className="font-medium">Amit Mehra</h5>
                          <span className="ml-2 text-xs text-gray-500">
                            Tech Lead
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">
                          1 hour ago
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">
                      I agree. His technical skills align well with what we're
                      looking for. Let's schedule a technical interview.
                    </p>
                  </div>

                  <div className="relative">
                    <textarea
                      placeholder="Add your comment..."
                      className="w-full bg-black border border-gray-800 rounded-lg py-3 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                      rows={3}
                    ></textarea>
                    <button className="absolute bottom-3 right-3 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white text-sm px-3 py-1 rounded transition-colors shadow-lg shadow-indigo-500/20">
                      Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
