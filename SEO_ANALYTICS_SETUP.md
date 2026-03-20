# SEO & Analytics Setup Guide

This portfolio is fully configured with analytics tracking, search engine optimization (SEO), and Google Search Console integration.

## 🎯 Quick Setup

### 1. **Google Analytics 4 (GA4) Setup**

1. Go to [Google Analytics](https://analytics.google.com)
2. Create a new property for your portfolio
3. Add your website URL
4. Get your **Measurement ID** (starts with `G-`)
5. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### 2. **Google Tag Manager (GTM) Setup** *(Alternative to GA4 or complementary)*

1. Go to [Google Tag Manager](https://tagmanager.google.com)
2. Create a new account and container
3. Select "Website" as the container type
4. Get your **Container ID** (starts with `GTM-`)
5. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXXX
   ```

**Note:** Many recommend using GTM as it's more flexible and easier to manage multiple tools. You can use both GA4 and GTM together.

### 3. **Google Search Console (GSC) Setup**

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Choose "URL prefix" and enter your domain
3. Verify using HTML tag method (recommended):
   - Copy the verification meta tag content (the code after `content="`)
   - Add to `.env.local`:
     ```
     NEXT_PUBLIC_GSC_VERIFICATION=verification_code_here
     ```
4. Alternative: Add verification tag to `<head>` in layout.tsx

### 4. **Environment Variables**

Copy `.env.example` to `.env.local` and fill in your credentials:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your actual values:
- `NEXT_PUBLIC_SITE_URL` - Your portfolio URL
- `NEXT_PUBLIC_GA_ID` - Google Analytics 4 ID
- `NEXT_PUBLIC_GTM_ID` - Google Tag Manager ID
- `NEXT_PUBLIC_GSC_VERIFICATION` - GSC verification code
- `RESEND_API_KEY` - For contact form emails
- `CONTACT_EMAIL_TO` - Where to send contact form submissions

## 📊 Features Included

### Analytics & Tracking
- ✅ Google Analytics 4 (GA4) integration
- ✅ Google Tag Manager (GTM) support
- ✅ Google Search Console verification
- ✅ Enhanced e-commerce tracking ready
- ✅ User behavior tracking
- ✅ Conversion tracking setup

### SEO Optimization
- ✅ Complete metadata in layout
- ✅ Open Graph (OG) tags for social sharing
- ✅ Twitter Card integration
- ✅ Structured data (JSON-LD) markup
- ✅ Schema.org Person and Organization structures
- ✅ Canonical URLs
- ✅ Robots.txt for crawlers
- ✅ Dynamic XML sitemap
- ✅ Mobile optimization metadata
- ✅ Web App Manifest (PWA support)

### Performance & Security
- ✅ Static Site Generation (SSG) with `output: "export"`
- ✅ Security headers (X-Content-Type-Options, CSP-ready)
- ✅ Preconnect to external resources
- ✅ DNS prefetch for Google services
- ✅ Optimized font loading

## 🚀 deployment

### Building for Production

```bash
npm run build
# or
pnpm build
```

This generates a static site in the `out/` directory that can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

### Deployment Checklist

- [ ] Set environment variables in hosting platform
- [ ] Verify GSC setup after deployment
- [ ] Check that sitemap.xml is accessible at `/sitemap.xml`
- [ ] Verify robots.txt is accessible at `/robots.txt`
- [ ] Test GA4 tracking (check Real-Time in GA)
- [ ] Test GTM tracking if using GTM
- [ ] Verify JSON-LD markup with [Schema.org validator](https://validator.schema.org)
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals in GSC

## 🔍 Verification & Testing

### 1. Test Analytics

**Google Analytics:**
- Go to GA4 dashboard → Real-time
- Visit your website to see real-time tracking
- Wait 24-48 hours for reports to populate

**Google Tag Manager:**
- Use "Preview Mode" to test GTM container before publishing
- Check console for GTM errors

### 2. Verify SEO Metadata

```bash
# Check Open Graph and Twitter metadata
curl -I https://your-domain.com

# Use validators
# Open Graph: https://www.opengraphcheck.com/
# Twitter: https://cards-dev.twitter.com/validator
# Schema: https://validator.schema.org/
```

### 3. Google Search Console

1. Request indexing of your homepage
2. Check "Coverage" report after 24 hours
3. Monitor "Performance" to see search queries
4. Check "Enhancement" reports for any issues
5. Review "Core Web Vitals" for performance

### 4. Lighthouse Audit

Use Chrome DevTools or [PageSpeed Insights](https://pagespeed.web.dev) to check:
- Performance
- Accessibility
- Best Practices
- SEO score
- PWA support

## 📁 File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata & analytics
│   ├── page.tsx            # Homepage with SSG
│   └── sitemap.ts          # Dynamic sitemap generation
├── components/
│   └── analytics/
│       ├── gtag.tsx        # GA4/GTM wrapper component
│       └── json-ld.tsx     # Structured data components
└── lib/
    └── seo.ts             # SEO utilities and helpers

public/
├── robots.txt             # Crawler instructions
├── manifest.json          # PWA manifest
├── favicon.ico           # Favicon
├── apple-touch-icon.png  # iOS home screen icon
└── og-image.jpg          # Open Graph image

Configuration
├── next.config.ts         # Next.js config (SSG + security)
└── .env.example          # Environment variables template
```

## 🎨 Customization

### Add Custom Domain Events

In your components, you can track events with Google Tag Manager:

```typescript
// Example: Track button clicks
const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventData);
  }
};
```

### Update Structured Data

Edit `/src/components/analytics/json-ld.tsx` to add:
- Blog post schema
- Product schema
- Event schema
- Local business schema
- etc.

### Customize Robots.txt

Edit `/public/robots.txt` to:
- Block specific paths
- Adjust crawl delays
- Add multiple sitemaps

### Update Sitemap

Edit `/src/app/sitemap.ts` to:
- Add dynamic routes
- Update changeFrequency
- Adjust priority values
- Add project pages with pagination

## 🆘 Troubleshooting

### GA4 Not showing data
- Check that `NEXT_PUBLIC_GA_ID` is correct
- Verify no content blockers are running
- Wait 24-48 hours for data to appear
- Check "Real-time" view first

### GTM Not firing tags
- Use GTM's "Preview" mode to debug
- Check browser console for errors
- Verify GTM container is published
- Check that triggers are correctly configured

### GSC shows errors
- Verify the site is actually crawlable
- Check robots.txt isn't blocking important pages
- Validate metadata with Schema validator
- Check Core Web Vitals in GSC

### Sitemap not indexing
- Verify `/sitemap.xml` is accessible
- Submit directly in Google Search Console
- Check that URLs are absolute (not relative)
- Wait 24-48 hours for indexation

## 📚 Resources

- [Google Analytics 4 Setup](https://support.google.com/analytics/answer/10089681)
- [Google Tag Manager Setup](https://support.google.com/tagmanager/answer/6103696)
- [Google Search Console Guide](https://support.google.com/webmasters/answer/9128668)
- [Next.js SEO Best Practices](https://nextjs.org/learn/seo/introduction-to-seo)
- [Schema.org Documentation](https://schema.org)
- [Web Vitals Guide](https://web.dev/vitals/)

## 💡 Best Practices

1. **Always test before deploying**
   - Use GTM preview mode
   - Check GA4 real-time
   - Verify GSC crawl stats

2. **Monitor regularly**
   - Check GA4 reports weekly
   - Monitor GSC coverage
   - Track Core Web Vitals

3. **Update metadata**
   - Keep descriptions fresh
   - Update OG images periodically
   - Refresh structured data

4. **Optimize for Core Web Vitals**
   - Largest Contentful Paint (LCP)
   - First Input Delay (FID)
   - Cumulative Layout Shift (CLS)

5. **Keep backups**
   - Export GA4 data periodically
   - Archive GSC reports
   - Version control your configuration

---

**Happy optimizing! 🚀**
