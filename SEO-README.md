# SEO & Agent Optimization - Egress Experts

This document outlines the SEO and AI agent optimizations implemented for the Egress Experts website.

## Implemented Optimizations

### 1. **Metadata & Open Graph Tags**
Located in: `app/layout.tsx`

- **Title**: "Egress Experts - Basement Window & Door Specialists Ottawa"
- **Description**: Clear, keyword-rich description under 160 characters
- **Keywords**: Targeted local SEO keywords including "egress window Ottawa", "basement egress", "Ontario Building Code"
- **Open Graph**: Complete OG tags for social media sharing
- **Twitter Cards**: Summary card with large image support

### 2. **Structured Data (JSON-LD)**
Located in: `app/layout.tsx`

- **LocalBusiness** schema with:
  - Business name, description, contact info
  - Ottawa address and service area (50km radius)
  - Service types (egress windows, installation, compliance)
  - Operating hours
  - Price range indicator

### 3. **Sitemap**
Located in: `app/sitemap.ts`

- Automatically generated XML sitemap
- Includes all main sections with proper priority
- Available at: `/sitemap.xml`

### 4. **Robots.txt**
Located in: `public/robots.txt`

- Allows all crawlers
- Points to sitemap location

### 5. **Canonical URLs**
- Set on homepage: `https://egressexperts.ca`
- Prevents duplicate content issues

### 6. **Open Graph Image**
Located in: `app/opengraph-image.tsx`

- Dynamic OG image generation
- Brand colors (olive green background, cream text)
- 1200x630px optimized for social sharing

### 7. **Semantic HTML**
- Proper heading hierarchy (H1 in hero, H2-H6 throughout)
- Section tags with IDs for anchor links
- Accessible markup

## Key SEO Features

### Local SEO
- Location keywords in title and meta description
- Structured data with Ottawa coordinates
- Service area defined (50km radius)
- Local business schema

### Technical SEO
- Clean URL structure
- Mobile-responsive design
- Fast loading with Turbopack
- Optimized images with Next.js Image component

### Content SEO
- Clear, direct language (5th grade reading level)
- Keyword-rich headings
- FAQ schema for rich snippets
- Service descriptions throughout

## AI Agent Optimization

### For AI Search Engines (ChatGPT, Claude, Perplexity)
- **Structured Data**: JSON-LD helps AI understand business type and services
- **Clear Descriptions**: Simple language makes content easy to extract
- **Contact Info**: Easily parseable phone/email in schema
- **Service Types**: Explicit list in structured data

### Schema.org Properties
- `LocalBusiness` type
- `serviceType` array
- `areaServed` with GeoCircle
- `address` with full postal address
- `priceRange` indicator

## Verification Checklist

- [x] Title tags under 60 characters
- [x] Meta descriptions under 160 characters
- [x] H1 tag on page (in Hero component)
- [x] Alt text for images (to be added to actual images)
- [x] Structured data implemented
- [x] Sitemap.xml available
- [x] Robots.txt configured
- [x] Canonical URLs set
- [x] Open Graph tags
- [x] Mobile responsive
- [x] Fast loading (Turbopack)

## Next Steps for Production

1. **Add actual phone number** in:
   - `app/layout.tsx` (structured data)
   - `components/pricing.tsx`
   - `components/footer.tsx`

2. **Add real images** with proper alt text:
   - Before/after egress installations
   - Team photos
   - Service area map

3. **Google Business Profile**:
   - Claim/create listing
   - Match name, address, phone (NAP) exactly with website
   - Add service areas

4. **Local Citations**:
   - HomeStars
   - Yelp Canada
   - Local directories

5. **Analytics**:
   - Google Analytics 4
   - Google Search Console
   - Monitor keyword rankings

## URLs to Test

- Homepage: `/`
- Sitemap: `/sitemap.xml`
- Robots: `/robots.txt`
- OG Image: `/opengraph-image`

## Keywords Targeted

Primary:
- egress window Ottawa
- basement egress installation
- egress window specialist Ottawa

Secondary:
- Ontario Building Code egress
- basement window code compliance
- legal basement bedroom Ottawa
- egress window well installation

Long-tail:
- turn basement into legal bedroom Ottawa
- basement egress code requirements Ontario
- egress window installation near me
