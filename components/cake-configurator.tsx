"use client"

export function CakeConfigurator() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 px-8 py-6">
          <h2 className="text-3xl font-bold text-white mb-2">Custom Cake Designer</h2>
          <p className="text-red-100 text-lg">
            Create your perfect cake with our easy step-by-step configurator
          </p>
        </div>

        <div className="p-8">
          <p className="text-gray-600 mb-8 text-center text-lg">
            This is a simplified version of our cake configurator. The full version will include:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-red-300 hover:shadow-md transition-all duration-200">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-center">Choose Your Size</h3>
              <p className="text-gray-600 text-sm text-center">
                Select from our range of cake sizes, from intimate 6-inch cakes to grand 3-tier masterpieces.
              </p>
            </div>

            <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-red-300 hover:shadow-md transition-all duration-200">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-red-600">2</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-center">Select Your Flavor</h3>
              <p className="text-gray-600 text-sm text-center">
                Choose from our delicious flavors including classic vanilla, decadent chocolate, and more.
              </p>
            </div>

            <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-red-300 hover:shadow-md transition-all duration-200">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-red-600">3</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-center">Pick Your Design</h3>
              <p className="text-gray-600 text-sm text-center">
                Customize with beautiful decorations, themes, and personal messages.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
              Start Designing Your Cake
            </button>
            <p className="text-gray-500 text-sm mt-4">
              Full configurator coming soon with real-time preview and pricing
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
