/**
 * Pre-rendering script for SEO
 * Generates static HTML files for each route with correct meta tags
 * Platform-agnostic: works on Vercel, Netlify, Cloudflare Pages, AWS S3, etc.
 * 
 * Uses src/data/seo-content.json as the Single Source of Truth (SSOT)
 * 
 * Run after vite build: node scripts/prerender-seo.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load SEO content from SSOT
const seoContentPath = path.join(__dirname, '..', 'src', 'data', 'seo-content.json');
const SEO_CONTENT = JSON.parse(fs.readFileSync(seoContentPath, 'utf-8'));

// Configuration from SSOT
const DIST_DIR = path.join(__dirname, '..', 'dist');
const BASE_URL = SEO_CONTENT.baseUrl;
const LANGUAGES = SEO_CONTENT.languages;
const LOCALE_MAP = SEO_CONTENT.locales;
const PAGE_URL_MAPPINGS = SEO_CONTENT.pageUrls;
const SEO_DATA = SEO_CONTENT.pages;

/**
 * Replace meta tags in HTML content
 */
function replaceMetaTags(html, seoData, lang, page, url) {
  const locale = LOCALE_MAP[lang];
  const ogImage = `${BASE_URL}${seoData.ogImage || '/og/home.jpg'}`;
  
  // Generate hreflang links
  const hreflangLinks = LANGUAGES.map(l => {
    const pageSlug = PAGE_URL_MAPPINGS[page]?.[l] || page;
    const pageUrl = page === 'home' 
      ? `${BASE_URL}/${l}/`
      : `${BASE_URL}/${l}/${pageSlug}`;
    return `<link rel="alternate" hreflang="${l}" href="${pageUrl}" />`;
  }).join('\n    ');
  
  // Add x-default hreflang
  const xDefaultUrl = page === 'home' 
    ? `${BASE_URL}/en/`
    : `${BASE_URL}/en/${PAGE_URL_MAPPINGS[page]?.en || page}`;
  const xDefaultLink = `<link rel="alternate" hreflang="x-default" href="${xDefaultUrl}" />`;

  let result = html;
  
  // Replace title
  result = result.replace(
    /<title>[^<]*<\/title>/,
    `<title>${seoData.title}</title>`
  );
  
  // Replace meta description
  result = result.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${seoData.description}" />`
  );
  
  // Replace keywords
  if (seoData.keywords) {
    result = result.replace(
      /<meta\s+name="keywords"\s+content="[^"]*"\s*\/?>/,
      `<meta name="keywords" content="${seoData.keywords}" />`
    );
  }
  
  // Replace og:title
  result = result.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${seoData.ogTitle}" />`
  );
  
  // Replace og:description
  result = result.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${seoData.ogDescription}" />`
  );
  
  // Replace og:url
  result = result.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${url}" />`
  );
  
  // Replace og:image
  result = result.replace(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${ogImage}" />`
  );
  
  // Replace og:locale
  result = result.replace(
    /<meta\s+property="og:locale"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:locale" content="${locale}" />`
  );
  
  // Replace twitter:title
  result = result.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${seoData.ogTitle}" />`
  );
  
  // Replace twitter:description
  result = result.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${seoData.ogDescription}" />`
  );
  
  // Replace twitter:image
  result = result.replace(
    /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image" content="${ogImage}" />`
  );
  
  // Replace canonical URL
  result = result.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${url}" />`
  );
  
  // Replace html lang attribute
  result = result.replace(
    /<html\s+lang="[^"]*">/,
    `<html lang="${lang}">`
  );
  
  // Add hreflang links after canonical
  result = result.replace(
    /(<link\s+rel="canonical"[^>]*>)/,
    `$1\n    ${hreflangLinks}\n    ${xDefaultLink}`
  );
  
  return result;
}

/**
 * Main pre-rendering function
 */
async function prerender() {
  console.log('🚀 Starting SEO pre-rendering...');
  console.log(`📂 Using SSOT: src/data/seo-content.json\n`);
  
  // Check if dist directory exists
  if (!fs.existsSync(DIST_DIR)) {
    console.error('❌ Error: dist directory not found. Run "npm run build" first.');
    process.exit(1);
  }
  
  // Read the base index.html
  const indexPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('❌ Error: dist/index.html not found. Run "npm run build" first.');
    process.exit(1);
  }
  
  const baseHtml = fs.readFileSync(indexPath, 'utf-8');
  let generatedCount = 0;
  
  // Generate HTML for each language and page combination
  for (const lang of LANGUAGES) {
    for (const [page, langData] of Object.entries(SEO_DATA)) {
      const seoData = langData[lang];
      if (!seoData) {
        console.warn(`⚠️  No SEO data for ${lang}/${page}, skipping...`);
        continue;
      }
      
      // Get the localized page slug
      const pageSlug = PAGE_URL_MAPPINGS[page]?.[lang] || page;
      
      // Determine the output path
      let outputDir;
      let url;
      
      if (page === 'home') {
        outputDir = path.join(DIST_DIR, lang);
        url = `${BASE_URL}/${lang}/`;
      } else {
        outputDir = path.join(DIST_DIR, lang, pageSlug);
        url = `${BASE_URL}/${lang}/${pageSlug}`;
      }
      
      // Create directory if it doesn't exist
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      
      // Generate modified HTML
      const modifiedHtml = replaceMetaTags(baseHtml, seoData, lang, page, url);
      
      // Write the file
      const outputPath = path.join(outputDir, 'index.html');
      fs.writeFileSync(outputPath, modifiedHtml, 'utf-8');
      
      generatedCount++;
      console.log(`✅ Generated: ${lang}/${page === 'home' ? '' : pageSlug}`);

      // If the page slug is different from the canonical name, generate the canonical version too
      // for better fallback support (e.g., both /pt/proposito AND /pt/purpose will have static files)
      if (page !== 'home' && pageSlug !== page) {
        const canonicalOutputDir = path.join(DIST_DIR, lang, page);
        if (!fs.existsSync(canonicalOutputDir)) {
          fs.mkdirSync(canonicalOutputDir, { recursive: true });
        }
        
        const canonicalUrl = `${BASE_URL}/${lang}/${page}`;
        const canonicalHtml = replaceMetaTags(baseHtml, seoData, lang, page, canonicalUrl);
        const canonicalOutputPath = path.join(canonicalOutputDir, 'index.html');
        fs.writeFileSync(canonicalOutputPath, canonicalHtml, 'utf-8');
        
        generatedCount++;
        console.log(`✅ Generated (Canonical Fallback): ${lang}/${page}`);
      }
    }
  }
  
  console.log(`\n🎉 Pre-rendering complete! Generated ${generatedCount} HTML files.`);
  console.log('📦 Ready for deployment to any static hosting platform.\n');
}

// Run the script
prerender().catch(error => {
  console.error('❌ Pre-rendering failed:', error);
  process.exit(1);
});
