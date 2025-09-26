"use client"

export function CakeConfigurator() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Cake Configurator</h2>
        <p className="text-muted-foreground mb-6">
          This is a simplified version of the cake configurator for testing.
        </p>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Step 1: Choose Size</h3>
            <p className="text-sm text-muted-foreground">
              Select your cake size from our available options.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Step 2: Choose Flavor</h3>
            <p className="text-sm text-muted-foreground">
              Pick your favorite cake flavor.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
