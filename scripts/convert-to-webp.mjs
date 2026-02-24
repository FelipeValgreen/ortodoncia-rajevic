import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = path.join(__dirname, '..', 'src', 'assets');

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    files.forEach(function (file) {
        if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
            const inputPath = path.join(directoryPath, file);
            const outputPath = path.join(directoryPath, file.replace(/\.(png|jpe?g)$/i, '.webp'));

            sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outputPath)
                .then(() => {
                    console.log(`Converted ${file} to WebP`);
                    fs.unlinkSync(inputPath);
                })
                .catch(err => {
                    console.error(`Error converting ${file}:`, err);
                });
        }
    });
});
