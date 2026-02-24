export interface SingleImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: null;
  width: number;
  height: number;
  formats: null;
  hash: string;
  ext: string;
  mime: string;
  size: string;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: null;
  width: number;
  height: number;
  formats: {
    thumbnail: {
      name: string;
      hash: string;
      ext: string;
      mime: string;
      path: null;
      width: number;
      height: number;
      size: number;
      sizeInBytes: number;
      url: string;
    };
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Link {
  id: number;
  href: string;
  text: string;
}

export interface Sponsor {
  id: number;
  as: string;
  variant: string;
  text: string;
}

export interface KeyPoint {
  id: number;
  icon: string;
  text: string;
}

export interface UseCase {
  id: number;
  headLine: string;
  subLine: string;
  ImageCase: SingleImage;
}
export interface Testimonial {
  id: number;
  company: string;
  message: string;
  authorPhoto: string;
  authorName: string;
  authorRol: string;
}
export interface Theme {
  id: number;
  themeBG: string;
  blurColor: string;
}

export type AS =
  | "heading_one"
  | "heading_two"
  | "heading_three"
  | "heading_four"
  | "heading_five"
  | "heading_six"
  | "paragraph"
  | "span"
  | "label"
  | "legend";

export type Variant = "primary" | "secondary" | "tertiary";
export type AsCta = "button" | "link" | "cta";

export interface CTA {
  id: number;
  as: AsCta;
  variant: Variant;
  text: string;
}

export interface Text {
  id: number;
  as: AS;
  variant: Variant;
  text: string;
}

export interface FeatureSection {
  __component: string;
  id: number;
  sectionLabel: Text;
  headLine: Text;
  description: Text;
  demoImages: Image[];
  keyPoints: KeyPoint[];
  useCases: UseCase[];
  testimonials: Testimonial[];
  theme: Theme;
}
export interface HeroSection {
  __component: string;
  id: number;
  title: Text;
  description: Text;
  cta: CTA[];
  demoImages: Image[];
  sponsors: Text[];
}
export interface NavbarSection {
  __component: string;
  id: number;
  logo: SingleImage;
  links: Link[];
  ctas: CTA[];
}

export type Sections =
  /*   | NavbarSection */
  HeroSection | FeatureSection;
