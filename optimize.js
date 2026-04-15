import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const images = [
  {
    url: 'https://www.dropbox.com/scl/fi/zabxwmzoimrw9v2ubbw8q/OfficeIMG.png?rlkey=qdtt1djtxfyvkrz5qm0qfwhzc&st=rs1j3gle&raw=1',
    filename: 'office.webp'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/i7goz15wtj2n9rs9yvdup/IdeasIMG.jpeg?rlkey=n6zqntt7syi6045xwosd5dtf0&st=z0fovfly&raw=1',
    filename: 'ideas.webp'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/ievss70eypadzqdz5pkjk/cdirIMG.jpeg?rlkey=bax2ch15e42ag8zix1v2air2z&st=0smlrkju&raw=1',
    filename: 'cdir.webp'
  }
];

const outDir = path.join(process.cwd(), 'public', 'images');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function downloadAndOptimize() {
  for (const img of images) {
    try {
      console.log(`Downloading ${img.url}...`);
      const response = await fetch(img.url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      
      const outPath = path.join(outDir, img.filename);
      await sharp(buffer)
        .webp({ quality: 80 })
        .toFile(outPath);
        
      console.log(`Saved optimized image to ${outPath}`);
    } catch (e) {
      console.error(`Failed to process ${img.filename}:`, e);
    }
  }
}

downloadAndOptimize();
