/**
 * JSON-LD Schema.org structured data components
 * Helps search engines understand your content better
 */

interface PersonSchema {
  name: string;
  url?: string;
  image?: string;
  sameAs?: string[];
  jobTitle?: string;
  knowsAbout?: string[];
}

interface OrganizationSchema {
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
  contact?: string;
}

export function PersonJsonLd({
  name,
  url,
  image,
  sameAs,
  jobTitle,
  knowsAbout,
}: PersonSchema) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    ...(url && { url }),
    ...(image && { image }),
    ...(jobTitle && { jobTitle }),
    ...(sameAs && { sameAs }),
    ...(knowsAbout && { knowsAbout }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationJsonLd({
  name,
  url,
  logo,
  sameAs,
  contact,
}: OrganizationSchema) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    ...(logo && { logo }),
    ...(sameAs && { sameAs }),
    ...(contact && { contactPoint: { "@type": "ContactPoint", contactType: "Customer Service", url: contact } }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
