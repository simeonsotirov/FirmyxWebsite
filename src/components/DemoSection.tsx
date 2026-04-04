'use client';

export default function DemoSection() {
  return (
    <section id="demo" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-blue-500 uppercase tracking-widest">Demo</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            See Firmyx in action
          </h2>
        </div>

        {/* Browser mockup */}
        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-gray-200 dark:border-gray-800">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <div className="flex-1 mx-4 px-3 py-1 rounded-md bg-white dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs border border-gray-200 dark:border-gray-600">
              app.firmyx.com/dashboard
            </div>
          </div>

          {/* Demo content */}
          <div className="bg-gray-900 p-8 min-h-[400px] flex flex-col items-center justify-center gap-6">
            {/* Animated placeholder */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 border-2 border-blue-500/40 flex items-center justify-center mx-auto mb-4 animate-pulse">
                <div className="w-8 h-8 rounded-lg bg-blue-500/60" />
              </div>
              <p className="text-lg font-bold text-white mb-2">APP DEMO SCREENSHOT / GIF HERE</p>
              <p className="text-sm text-gray-500">Replace with actual product screenshot or demo video</p>
            </div>

            {/* Fake UI elements */}
            <div className="w-full max-w-2xl grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-800 rounded-xl p-4 animate-pulse">
                  <div className="h-2 bg-gray-700 rounded mb-3 w-3/4" />
                  <div className="h-6 bg-gray-700 rounded mb-2 w-1/2" />
                  <div className="h-2 bg-gray-700 rounded w-full" />
                </div>
              ))}
            </div>

            <div className="w-full max-w-2xl bg-gray-800 rounded-xl p-4">
              <div className="h-2 bg-gray-700 rounded mb-4 w-1/4" />
              <div className="flex items-end gap-2 h-24">
                {[30, 50, 40, 65, 55, 75, 70, 80, 72, 88, 85, 92].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t"
                    style={{
                      height: `${h}%`,
                      backgroundColor: i >= 6 ? '#3b82f630' : '#3b82f6',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
