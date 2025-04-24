import { RefreshCw, MessageSquare, Bell, CheckCircle } from "lucide-react";

export default function RealTimeSync() {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-400 to-indigo-600">
              Real-Time Collaboration
            </h2>
            <p className="text-xl text-gray-400 mb-6">
              Stay in sync with your team and candidates with real-time updates
              and notifications.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-indigo-500/20 p-3 rounded-lg mr-4 border border-indigo-500/30">
                  <RefreshCw className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Live Updates</h3>
                  <p className="text-gray-400">
                    See changes in real-time as candidates apply and team
                    members review applications.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-500/20 p-3 rounded-lg mr-4 border border-indigo-500/30">
                  <MessageSquare className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Instant Messaging
                  </h3>
                  <p className="text-gray-400">
                    Communicate with your team and candidates directly within
                    the platform.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-500/20 p-3 rounded-lg mr-4 border border-indigo-500/30">
                  <Bell className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Smart Notifications
                  </h3>
                  <p className="text-gray-400">
                    Get notified about important updates and actions that
                    require your attention.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="bg-gray-900 rounded-xl shadow-xl border border-gray-800 overflow-hidden relative">
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-indigo-600 opacity-10 blur-sm rounded-xl"></div>
              <div className="relative">
                <div className="border-b border-gray-800 p-4">
                  <h3 className="font-bold">Activity Feed</h3>
                </div>

                <div className="p-4 max-h-96 overflow-y-auto">
                  <div className="space-y-4">
                    {/* Live typing indicator */}
                    <div className="bg-black p-4 rounded-lg border border-indigo-500/50 shadow-lg shadow-indigo-500/10">
                      <div className="flex items-start mb-2">
                        <div className="w-8 h-8 rounded-full bg-green-500 mr-3 flex-shrink-0 flex items-center justify-center text-xs font-medium">
                          RS
                        </div>
                        <div>
                          <div className="flex items-center">
                            <h5 className="font-medium">Rohit Sharma</h5>
                            <div className="ml-2 flex items-center text-indigo-400 text-xs">
                              <span className="relative flex h-2 w-2 mr-1">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                              </span>
                              typing...
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm">
                        I think we should schedule an interview with Priya next
                        week. Her work in Angular and UI/UX is impressive and
                        she’ll complement our dev team well.
                      </p>
                    </div>

                    {/* Regular activity items */}
                    <div className="bg-black p-4 rounded-lg border border-gray-800 hover:border-indigo-500/30 transition-colors">
                      <div className="flex">
                        <div className="w-8 h-8 rounded-full bg-indigo-500 mr-3 flex-shrink-0 flex items-center justify-center text-xs font-medium">
                          AK
                        </div>
                        <div>
                          <p className="text-sm">
                            <span className="font-medium">Anjali Kumar</span>
                            <span className="text-gray-400">
                              {" "}
                              added a comment to{" "}
                            </span>
                            <span className="text-indigo-400">
                              Amit Das's application
                            </span>
                          </p>
                          <span className="text-xs text-gray-500">
                            Just now
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-black p-4 rounded-lg border border-gray-800 hover:border-indigo-500/30 transition-colors">
                      <div className="flex">
                        <div className="w-8 h-8 rounded-full bg-purple-500 mr-3 flex-shrink-0 flex items-center justify-center text-xs font-medium">
                          NV
                        </div>
                        <div>
                          <p className="text-sm">
                            <span className="font-medium">Neha Verma</span>
                            <span className="text-gray-400">
                              {" "}
                              changed the status of{" "}
                            </span>
                            <span className="text-indigo-400">
                              Mobile App Developer
                            </span>
                            <span className="text-gray-400"> to </span>
                            <span className="text-green-400">Shortlisted</span>
                          </p>
                          <span className="text-xs text-gray-500">
                            5 minutes ago
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-black p-4 rounded-lg border border-gray-800 hover:border-indigo-500/30 transition-colors">
                      <div className="flex">
                        <div className="w-8 h-8 rounded-full bg-amber-500 mr-3 flex-shrink-0 flex items-center justify-center text-xs font-medium">
                          <CheckCircle className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm">
                            <span className="text-gray-400">
                              New application received for{" "}
                            </span>
                            <span className="text-indigo-400">
                              Frontend Engineer
                            </span>
                            <span className="text-gray-400"> from </span>
                            <span className="font-medium">Kiran Mehta</span>
                          </p>
                          <span className="text-xs text-gray-500">
                            15 minutes ago
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-black p-4 rounded-lg border border-gray-800 hover:border-indigo-500/30 transition-colors">
                      <div className="flex">
                        <div className="w-8 h-8 rounded-full bg-indigo-500 mr-3 flex-shrink-0 flex items-center justify-center text-xs font-medium">
                          AK
                        </div>
                        <div>
                          <p className="text-sm">
                            <span className="font-medium">Anjali Kumar</span>
                            <span className="text-gray-400">
                              {" "}
                              scheduled an interview with{" "}
                            </span>
                            <span className="text-indigo-400">
                              Vikram Singh
                            </span>
                            <span className="text-gray-400"> for </span>
                            <span className="font-medium">
                              Tomorrow at 11:00 AM
                            </span>
                          </p>
                          <span className="text-xs text-gray-500">
                            30 minutes ago
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-800 p-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="w-full bg-black border border-gray-800 rounded-lg py-2 px-4 pr-10 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <button className="absolute right-3 top-2.5 text-indigo-500 hover:text-indigo-400 transition-colors">
                      <RefreshCw className="w-4 h-4" />
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
