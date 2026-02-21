interface Metadata {
  seo: {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    ogType: string;
  };
}

export function generateMetadata({ seo }: Metadata) {
  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.metaKeywords,
    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      images: seo.ogImage,
      type: seo.ogType,
    },
  };
}
