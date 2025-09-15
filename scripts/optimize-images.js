const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Create optimized directory if it doesn't exist
const optimizedDir = path.join(__dirname, '../public/optimized');
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Get all image files from the public directory
const getImageFiles = (dir) => {
  const files = fs.readdirSync(dir);
  return files
    .filter(file => /.(jpg|jpeg|png|webp)$/i.test(file))
    .map(file => ({
      name: file,
      path: path.join(dir, file),
      outputPath: path.join(optimizedDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'))
    }));
};

// Optimize images
const optimizeImages = async () => {
  const images = [
    ...getImageFiles(path.join(__dirname, '../public')),
  ];

  console.log(`Optimizing ${images.length} images...`);
  
  for (const image of images) {
    try {
      console.log(`Optimizing ${image.name}...`);
      
      await sharp(image.path)
        .resize({
          width: 2000,
          height: 2000,
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({
          quality: 80,
          effort: 6
        })
        .toFile(image.outputPath);
      
      console.log(`✅ Optimized ${image.name}`);
    } catch (error) {
      console.error(`❌ Error optimizing ${image.name}:`, error.message);
    }
  }
  
  console.log('\n🎉 Image optimization complete!');
};

optimizeImages();
