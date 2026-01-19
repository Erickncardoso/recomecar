import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

// Supported extensions to convert
const EXTENSIONS = ['.jpg', '.jpeg', '.png'];

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, '/', file));
    }
  });

  return arrayOfFiles;
}

async function convertImages() {
  console.log('Scanning for images in:', publicDir);
  const files = getAllFiles(publicDir);
  
  const imagesToConvert = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return EXTENSIONS.includes(ext);
  });

  console.log(`Found ${imagesToConvert.length} images to convert.`);

  for (const file of imagesToConvert) {
    const ext = path.extname(file);
    const newFile = file.replace(ext, '.webp');
    
    console.log(`Converting: ${file} -> ${newFile}`);
    
    try {
      await sharp(file)
        .webp({ quality: 80 })
        .toFile(newFile);
      console.log('Success!');
    } catch (err) {
      console.error(`Error converting ${file}:`, err);
    }
  }
  
  console.log('Conversion complete!');
}

convertImages();
