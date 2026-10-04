import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, '../public/images');

async function optimizeImages() {
  const files = fs.readdirSync(imagesDir);
  
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const inputPath = path.join(imagesDir, file);
      const fileNameWithoutExt = path.parse(file).name;
      const outputPath = path.join(imagesDir, `${fileNameWithoutExt}.webp`);
      
      try {
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);
        
        console.log(`Optimized: ${file} -> ${fileNameWithoutExt}.webp`);
        
        // Optional: remove original file to save space
        // fs.unlinkSync(inputPath);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
}

optimizeImages();

