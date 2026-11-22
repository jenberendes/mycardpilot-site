// Tells search engines they may read the whole site, and where the sitemap is.
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: 'https://mycardpilot.com/sitemap.xml',
  }
}
