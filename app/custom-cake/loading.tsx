export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="h-8 bg-muted rounded w-64 mx-auto mb-4 animate-pulse"></div>
          <div className="h-4 bg-muted rounded w-96 mx-auto animate-pulse"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="h-6 bg-muted rounded w-48 mb-4 animate-pulse"></div>
            <div className="h-2 bg-muted rounded w-full animate-pulse"></div>
          </div>

          <div className="h-96 bg-muted rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
