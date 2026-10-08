// Served at /robots.txt. The blog at /blog is a separate app with its own sitemap.
const SITE = "https://www.nextappinc.com";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/blog/api/media/"],
      disallow: ["/blog/admin", "/blog/api/"],
    },
    sitemap: [`${SITE}/sitemap.xml`, `${SITE}/blog/sitemap.xml`],
  };
}
