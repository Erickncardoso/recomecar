import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

// Extensions to delete
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

function cleanOldImages() {
  console.log('Scanning for old images to delete in:', publicDir);
  const files = getAllFiles(publicDir);
  
  const filesToDelete = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    // Only delete if it's in the list AND a corresponding .webp exists
    // OR just delete all png/jpg if we are confident? 
    // The user asked to "swap" them.
    // Let's verify a webp exists before deleting just to be safe.
    if (!EXTENSIONS.includes(ext)) return false;
    
    const webpPath = file.replace(ext, '.webp');
    return fs.existsSync(webpPath);
  });

  console.log(`Found ${filesToDelete.length} files to delete (that have webp counterparts).`);

  for (const file of filesToDelete) {
    console.log(`Deleting: ${file}`);
    try {
      fs.unlinkSync(file);
      console.log('Deleted.');
    } catch (err) {
      console.error(`Error deleting ${file}:`, err);
    }
  }
  
  console.log('Cleanup complete!');
}

cleanOldImages();
