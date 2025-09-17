// Helper function to get optimized image path
export function getOptimizedImagePath(originalPath: string): string {
  // If it's already an optimized path, return as is
  if (originalPath.includes('/optimized/') || originalPath.endsWith('.webp')) {
    return originalPath;
  }

  // Convert to WebP and use optimized directory
  const filename = originalPath.split('/').pop()?.split('.')[0] || '';
  return `/optimized/${filename}.webp`;
}

// Function to get video path (no optimization needed for videos)
export function getVideoPath(originalPath: string): string {
  return originalPath;
}
