export async function GET({ site }) {
  // Use the site URL from Astro config or fallback to BASE_URL
  const baseUrl = site || import.meta.env.BASE_URL;
  const basePath = import.meta.env.BASE_URL || '/';

  // Get all pages (you may need to adjust this based on your actual content)
  // This is a simplified example
  const pages = [
    { path: '/', languages: ['en', 'de'] },
    { path: '/welcome', languages: ['en', 'de'] },
    // Add more pages as needed
  ];

  // XML generation
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}${page.path === '/' ? '' : page.path}</loc>
    ${page.languages.map(lang => 
      `<xhtml:link 
         rel="alternate" 
         hreflang="${lang}" 
         href="${baseUrl}${basePath}${lang}${page.path === '/' ? '' : page.path}" 
       />`
    ).join('\n    ')}
    <xhtml:link 
      rel="alternate" 
      hreflang="x-default" 
      href="${baseUrl}${basePath}en${page.path === '/' ? '' : page.path}" 
    />
    <changefreq>weekly</changefreq>
    <priority>${page.path === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml'
    }
  });
} 