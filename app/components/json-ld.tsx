import { site } from "@/data/site";
import { canonicalUrl } from "@/lib/seo";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    sameAs: [site.github, site.linkedin],
    knowsAbout: site.metadata.keywords,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    description: site.metadata.description,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.metadata.title,
    url: site.url,
    description: site.metadata.description,
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: site.name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/projects/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: site.metadata.title,
    url: canonicalUrl("/"),
    mainEntity: {
      "@type": "Person",
      name: site.name,
      jobTitle: site.title,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  );
}
