interface JsonLdProps {
  type: string;
  name: string;
  description: string;
  url: string;
  image?: string;
}

export default function JsonLd({
  type,
  name,
  description,
  url,
  image,
}: JsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url,
    ...(image && { image }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
