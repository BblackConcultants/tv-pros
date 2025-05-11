export const siteConfig = {
  name: "TV Pro's Electronics",
  description: "Expert TV repair services in Johannesburg. Specializing in motherboard replacement, power supply repairs, backlight fixing, screen repairs, and software reloads.",
  url: "https://tv-pros.co.za",
  keywords: [
    "TV repair",
    "TV repair Johannesburg",
    "TV repair service",
    "TV screen repair",
    "TV motherboard repair",
    "TV power supply repair",
    "TV backlight repair",
    "TV software update",
    "TV repair near me",
    "Sandton TV repair",
    "Fourways TV repair",
    "Midrand TV repair",
    "Centurion TV repair",
    "Professional TV repair",
    "TV repair shop",
    "TV repair company",
    "TV repair technician",
    "TV repair cost",
    "TV repair quote",
    "TV repair service areas"
  ]
};

export type MetadataProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  path?: string;
}

export function generateMetadata({ 
  title, 
  description = siteConfig.description,
  keywords = siteConfig.keywords,
  path = ""
}: MetadataProps = {}) {
  const finalTitle = title 
    ? `${title} | ${siteConfig.name}`
    : siteConfig.name;

  return {
    title: finalTitle,
    description,
    keywords: keywords.join(", "),
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      title: finalTitle,
      description,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      locale: "en_ZA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description,
    },
    alternates: {
      canonical: `${siteConfig.url}${path}`,
    },
  };
}
