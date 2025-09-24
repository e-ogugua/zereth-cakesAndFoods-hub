// Helper function to get optimized image path
export function getOptimizedImagePath(originalPath: string): string {
  // If it's already an optimized path, return as is
  if (originalPath.includes('/optimized/') || originalPath.endsWith('.webp')) {
    return originalPath;
  }

  const imageMap: Record<string, string> = {
    // Hero images
    'beautiful-custom-wedding-cake-elegant-design.jpg': '/optimized/beautiful-custom-wedding-cake-elegant-design.webp',
    'subtle-cake-pattern.jpg': '/optimized/subtle-cake-pattern.webp',

    // Baker portraits
    'baker-Joshua-potrait.png': '/optimized/baker-Joshua-potrait.webp',
    'baker-sarah-portrait.jpg': '/optimized/baker-sarah-portrait.webp',
    'baker-emma-portrait.png': '/optimized/baker-emma-portrait.webp',
    'baker-mike-portrait.png': '/optimized/baker-mike-portrait.webp',
    'josh.jpg': '/optimized/josh.webp',

    // Cake showcase
    'wedding-cake-elegant-multi-tier.jpg': '/optimized/wedding-cake-elegant-multi-tier.webp',
    'birthday-cake-colorful-celebration.jpg': '/optimized/birthday-cake-colorful-celebration.webp',

    // Workspace images
    'baker-sarah-workspace.jpg': '/optimized/baker-sarah-workspace.webp',
    'baker-emma-workspace.jpg': '/optimized/baker-emma-workspace.webp',
    'baker-mike-workspace.jpg': '/optimized/baker-mike-workspace.webp',

    // Cake sizes
    'cake-size-6-inch.jpg': '/optimized/cake-size-6-inch.webp',
    'cake-size-8-inch.jpg': '/optimized/cake-size-8-inch.webp',
    'cake-size-10-inch.jpg': '/optimized/cake-size-10-inch.webp',
    'cake-size-12-inch.jpg': '/optimized/cake-size-12-inch.webp',
    'cake-size-two-tier.jpg': '/optimized/cake-size-two-tier.webp',
    'cake-size-three-tier.jpg': '/optimized/cake-size-three-tier.webp',

    // Categories
    'birthday.jpeg': '/optimized/birthday.webp',
    'birthday2.jpeg': '/optimized/birthday2.webp',
    'wedding.jpeg': '/optimized/wedding.webp',
    'weddingcake.jpeg': '/optimized/weddingcake.webp',
    'corporate-logo-cake-professional.jpg': '/optimized/corporate-logo-cake-professional.webp',

    // Decorations
    'decoration-elegant.jpg': '/optimized/decoration-elegant.webp',
    'decoration-floral.jpg': '/optimized/decoration-floral.webp',
    'decoration-modern.jpg': '/optimized/decoration-modern.webp',
    'decoration-themed.jpg': '/optimized/decoration-themed.webp',
    'decoration-vintage.jpg': '/optimized/decoration-vintage.webp',
    'decoration-whimsical.jpg': '/optimized/decoration-whimsical.webp',

    // Logos
    'Zereth-logo1.jpeg': '/optimized/Zereth-logo1.webp',
    'Zereth-logo2.jpeg': '/optimized/Zereth-logo2.webp',

    // Other
    'artisanal-croissants-selection.jpg': '/optimized/artisanal-croissants-selection.webp',
    'artisanal-pastries-fresh-baked.jpg': '/optimized/artisanal-pastries-fresh-baked.webp',
    'chocolate-ganache-celebration-cake.jpg': '/optimized/chocolate-ganache-celebration-cake.webp',
    'elegant-wedding-cake-three-tier.jpg': '/optimized/elegant-wedding-cake-three-tier.webp',
    'gourmet-cupcakes-assorted-flavors.jpg': '/optimized/gourmet-cupcakes-assorted-flavors.webp',
    'gourmet-cupcakes-dozen-assorted.jpg': '/optimized/gourmet-cupcakes-dozen-assorted.webp',
    'mothers-cake.jpeg': '/optimized/mothers-cake.webp',
    'other-designs.jpeg': '/optimized/other-designs.webp',
    'other2.jpeg': '/optimized/other2.webp',
    'rainbow-unicorn-birthday-cake.jpg': '/optimized/rainbow-unicorn-birthday-cake.webp',
    'savory-baked-goods-selection.jpg': '/optimized/savory-baked-goods-selection.webp',
  };

  // Check if we have a mapping
  if (imageMap[originalPath]) {
    return imageMap[originalPath];
  }

  // Convert to WebP and use optimized directory
  const filename = originalPath.split('/').pop()?.split('.')[0] || '';
  return `/optimized/${filename}.webp`;
}

// Function to get video path (no optimization needed for videos)
export function getVideoPath(originalPath: string): string {
  return originalPath;
}
