import fs from 'fs';
import path from 'path';
import process from 'node:process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('Error: dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

const routes = [
  {
    path: '/',
    distSubdir: '',
    title: 'Creoaks Designs & Prints | Branding, Printing & Web Design in Abuja, Nigeria',
    description: 'Creoaks delivers branding, graphic design, printing, packaging, and creative solutions for businesses and events in Nigeria.',
    canonical: 'https://www.creoaks.com/',
    image: 'https://www.creoaks.com/images/office.webp',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Creoaks Designs & Prints',
      url: 'https://www.creoaks.com',
      logo: 'https://www.creoaks.com/logos/creoaksLogo.webp',
      sameAs: [
        'https://www.instagram.com/creoaks/',
        'https://www.tiktok.com/@creoaks0',
        'https://x.com/Cre0aks'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+2349029967800',
        contactType: 'customer service',
        areaServed: 'NG',
        availableLanguage: ['English']
      }
    }
  },
  {
    path: '/gallery',
    distSubdir: 'gallery',
    title: 'Gallery | Creoaks',
    description: 'Browse Creoaks gallery projects featuring branding, graphic design, print campaigns, event visuals, packaging, and creative execution for Nigerian brands.',
    canonical: 'https://www.creoaks.com/gallery',
    image: 'https://www.creoaks.com/images/office.webp',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Creoaks Gallery',
      url: 'https://www.creoaks.com/gallery'
    }
  },
  {
    path: '/services',
    distSubdir: 'services',
    title: 'Services | Creoaks',
    description: 'Explore Creoaks services for graphic design, digital and offset printing, large format printing, packaging, labeling, and branding consultation in Nigeria.',
    canonical: 'https://www.creoaks.com/services',
    image: 'https://www.creoaks.com/images/office.webp',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Branding and Printing Services',
      provider: {
        '@type': 'Organization',
        name: 'Creoaks Designs & Prints',
        url: 'https://www.creoaks.com'
      },
      areaServed: 'NG',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: 'https://wa.me/2349029967800'
      }
    }
  },
  {
    path: '/team',
    distSubdir: 'team',
    title: 'Our Team | Creoaks',
    description: 'Meet the designers, strategists and production team behind Creoaks Designs & Prints, delivering branding, packaging and print for businesses across Nigeria.',
    canonical: 'https://www.creoaks.com/team',
    image: 'https://www.creoaks.com/images/office.webp',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Creoaks Designs & Prints',
      url: 'https://www.creoaks.com'
    }
  }
];

function generateHtml(route) {
  let html = template;

  // Replace title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);

  // Replace description meta
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
    `<meta name="description" content="${route.description}" />`
  );

  // SEO tags to inject into <head>
  const seoTags = `
    <!-- Canonical & Open Graph metadata injected for static crawling -->
    <link rel="canonical" href="${route.canonical}" />
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${route.canonical}" />
    <meta property="og:image" content="${route.image}" />
    <meta property="og:site_name" content="Creoaks" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${route.title}" />
    <meta name="twitter:description" content="${route.description}" />
    <meta name="twitter:image" content="${route.image}" />
    <script type="application/ld+json">
      ${JSON.stringify(route.structuredData)}
    </script>
  </head>`;

  html = html.replace(/<\/head>/i, seoTags);

  return html;
}

for (const route of routes) {
  const targetDir = route.distSubdir ? path.join(distDir, route.distSubdir) : distDir;
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const outPath = path.join(targetDir, 'index.html');
  const routeHtml = generateHtml(route);
  fs.writeFileSync(outPath, routeHtml, 'utf8');
  console.log(`Generated static entry: ${route.path} -> ${path.relative(distDir, outPath)} (canonical: ${route.canonical})`);
}

console.log('Route HTML generation complete.');
