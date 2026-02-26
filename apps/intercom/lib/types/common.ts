import type { BlocksContent } from "@strapi/blocks-react-renderer";

export interface SingleImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText?: string;
  caption: string | null;
  width: number;
  height: number;
  formats?: null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail: {
      name: string;
      hash: string;
      ext: string;
      mime: string;
      path: null | string;
      width: number;
      height: number;
      size: number;
      sizeInBytes: number;
      url: string;
    };
  } | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
}

export interface Link {
  id: number;
  href: string;
  text: string;
}

export interface Sponsor {
  id: number;
  logo: Image;
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
  imageCase: Image;
}
export interface Testimonial {
  id: number;
  companyLogo: Image;
  authorMessage: BlocksContent;
  authorPhoto: Image;
  authorName: string;
  authorRol: string;
}
export interface Theme {
  id: number;
  themeBG: "dark" | "light";
  blurColor: TypeGradient;
  gridDistribution: GridConfigType;
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
  sponsors: Sponsor[];
}
export interface NavbarSection {
  __component: string;
  id: number;
  logo: Image;
  links: Link[];
  ctas: CTA[];
}

export type Sections =
  /*   | NavbarSection */
  HeroSection | FeatureSection;

export type GridConfigType =
  | "five|two|tree"
  | "six|two|tree"
  | "tree|two|six"
  | "six|two|four";

export type TypeGradient = "type_one" | "type_two" | "type_three" | "type_four";

type RichTextNode = {
  type:
    | "paragraph"
    | "heading"
    | "list"
    | "list-item"
    | "link"
    | "quote"
    | "code";
  children: RichTextChild[];
  level?: number; // para headings
  format?: "ordered" | "unordered"; // para lists
};

type RichTextChild = {
  type: "text" | "link";
  text?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
  url?: string; // para links
  children?: RichTextChild[];
};

export type RichTextField = RichTextNode[];
