import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.resolve(__dirname, '../public/favicon.png');
const outputDir = path.resolve(__dirname, '../public');

const sizes = [48, 96, 144, 192, 512];

async function generateFavicons() {
    try {
        if (!fs.existsSync(inputPath)) {
            console.error('favicon.png no encontrado en public/');
            return;
        }

        console.log('Generando favicons optimizados...');

        // Apple Touch Icon (180x180)
        await sharp(inputPath)
            .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .toFile(path.join(outputDir, 'apple-touch-icon.png'));
        console.log('✅ apple-touch-icon.png (180x180)');

        // Generate multiple sizes for standard icons
        for (const size of sizes) {
            await sharp(inputPath)
                .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
                .toFile(path.join(outputDir, `icon-${size}x${size}.png`));
            console.log(`✅ icon-${size}x${size}.png`);
        }

        // Generate standard favicon.ico (fallback 32x32)
        await sharp(inputPath)
            .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .toFile(path.join(outputDir, 'favicon-32x32.png'));

        await sharp(inputPath)
            .resize(16, 16, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .toFile(path.join(outputDir, 'favicon-16x16.png'));

        // Copy default favicon.ico if we want to handle it easily
        // Or simply rely on the generated PNGs. Google prefers multiples of 48px.

        console.log('Favicons generados exitosamente.');
    } catch (error) {
        console.error('Error generando favicons:', error);
    }
}

generateFavicons();
