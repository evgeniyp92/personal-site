const fs = require('fs');

export function getFileNames(directoryPath) {
  try {
    const fileNames = fs.readdirSync(directoryPath);
    return fileNames;
  } catch (error) {
    console.error('Error reading directory:', error);
    return [];
  }
}
