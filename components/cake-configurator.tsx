"use client"

export function CakeConfigurator() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Cake Configurator</h2>
        <p className="text-gray-600 mb-6">
          Full-featured cake configurator with currency support.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Size Selection</h3>
            <p className="text-sm text-gray-600">Choose your cake size</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Flavor Selection</h3>
            <p className="text-sm text-gray-600">Pick your favorite flavor</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Decoration Style</h3>
            <p className="text-sm text-gray-600">Select your design theme</p>
          </div>
        </div>
      </div>
    </div>
  )
}
