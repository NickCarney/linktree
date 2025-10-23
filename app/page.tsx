import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <main className="container mx-auto max-w-md px-6 py-12">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="mb-4">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-600 to-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              NC
            </div>
          </div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
            Nick Carney
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Full-Stack Software Engineer
          </p>
          <a
            href="mailto:nick12carney@gmail.com"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            nick12carney@gmail.com
          </a>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {/* Social Links */}
          <div className="space-y-3">
            <a
              href="https://www.linkedin.com/in/nickcarney1217/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600"
            >
              <div className="w-6 h-6 mr-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-blue-600"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <span className="text-slate-800 dark:text-slate-200 font-medium">
                LinkedIn
              </span>
            </a>

            <a
              href="https://github.com/NickCarney"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500"
            >
              <div className="w-6 h-6 mr-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-slate-800 dark:text-slate-200"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <span className="text-slate-800 dark:text-slate-200 font-medium">
                GitHub
              </span>
            </a>
          </div>

          <div>
            {/* Professional Projects Section */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4 text-center">
                Professional Projects
              </h2>
              <div className="space-y-3">
                <a
                  href="https://app.mesacontracts.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-slate-800 dark:text-slate-200">
                        Mesa Contract Builder
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Typescript Next.js app where users answer a few simple
                        questions and get a custom music contract in minutes. AI
                        editing capabilities and contract generation via jspdf.
                      </p>
                    </div>
                    <div className="w-4 h-4 text-slate-400">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>
                </a>

                <a
                  href="https://drive.google.com/file/d/1PzUfiYBK-AAzT_9zdZBxRhpFokP4-n2l/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-slate-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-600"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-slate-800 dark:text-slate-200">
                        AI Hardware Tracking
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Tradeloop's pilot project with the CIRPASS to
                        demonstrate the use of digital product passports to
                        track sensitive e-waste (being reused) throughout its
                        whole lifecycle.
                      </p>
                    </div>
                    <div className="w-4 h-4 text-slate-400">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
                <a
                  href="https://groover.mesacontracts.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-slate-800 dark:text-slate-200">
                        Mesa Contract Builder Whitelabel
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Custom branded whitelabel of the Contract Builder to
                        Groover, a music playlisting company with over 600,000
                        users.
                      </p>
                    </div>
                    <div className="w-4 h-4 text-slate-400">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>
                </a>

                <a
                  href="https://mesacontracts.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-slate-800 dark:text-slate-200">
                        Mesa Landing Page
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Landing page for music tech startup providing legally
                        binding, quick, and affordable contracts for musicians
                        and their teams
                      </p>
                    </div>
                    <div className="w-4 h-4 text-slate-400">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Personal Projects Section */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4 text-center">
                Personal Projects
              </h2>
              <div className="space-y-3">
                <a
                  href="https://fpl-beta.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-slate-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-600"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-slate-800 dark:text-slate-200">
                        FPL Genie
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Typescript Next.js website for all things fantasy
                        premier league. Put in your team name/id and get in
                        depth analysis of your team. Ranging from transfer
                        suggestions, to optimal lineup, to starting lineup
                        preditions.
                      </p>
                    </div>
                    <div className="w-4 h-4 text-slate-400">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
                <a
                  href="https://pl-stats.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-slate-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-600"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-slate-800 dark:text-slate-200">
                        PL Stats
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Flask app that scrapes premier league data from
                        fbref.com and displays the league table along with
                        previous/upcoming fixtures.
                      </p>
                    </div>
                    <div className="w-4 h-4 text-slate-400">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
                {/* <a
                  href="https://vacaition.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-slate-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-600"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-slate-800 dark:text-slate-200">
                        VacAItion
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Chat GPT wrapper to suggest vacations based on location,
                        travel preferences, and activities preferences
                      </p>
                    </div>
                    <div className="w-4 h-4 text-slate-400">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </main>
    </div>
  );
}
