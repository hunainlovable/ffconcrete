import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

const SEO = ({ 
  title, 
  description, 
  keywords = '', 
  canonical = '', 
  ogImage = '/thumbnail.png',
  ogType = 'website',
  structuredData
}: SEOProps) => {
  const siteUrl = 'https://ffconcrete.com';
  
  // Ensure FF Concrete is always in the title
  const fullTitle = title.startsWith('FF Concrete') ? title : `FF Concrete | ${title}`;
  
  // Ensure FF Concrete is in the description
  const fullDescription = description.includes('FF Concrete') ? description : `${description} - FF Concrete`;
  
  // Use canonical URL or construct from current path
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? `${siteUrl}${window.location.pathname}` : siteUrl);
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="FF Concrete" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="FF Concrete" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
