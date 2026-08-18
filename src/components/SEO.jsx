import { Helmet } from 'react-helmet-async';

const defaultTitle = 'Creoaks Designs & Prints | Branding, Printing & Web Design in Abuja, Nigeria';
const defaultDescription =
  'Creoaks delivers branding, graphic design, printing, packaging, and creative solutions for businesses and events in Nigeria.';
const defaultImage = 'https://creoaks.com/images/office.webp';
const defaultUrl = 'https://creoaks.com';

const SEO = ({
  title,
  description = defaultDescription,
  path = '/',
  image = defaultImage,
  type = 'website',
  keywords = 'branding agency nigeria, graphic design nigeria, printing services nigeria, logo design, packaging design',
  structuredData,
}) => {
  const pageTitle = title ? `${title} | Creoaks` : defaultTitle;
  const canonicalUrl = `${defaultUrl}${path === '/' ? '' : path}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="theme-color" content="#000000" />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Creoaks" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@Cre0aks" />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
