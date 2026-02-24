import type { Schema, Struct } from '@strapi/strapi';

export interface BaseComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_base_components_buttons';
  info: {
    displayName: 'Button';
    icon: 'code';
  };
  attributes: {
    as: Schema.Attribute.Enumeration<['link', 'cta', 'button']>;
    text: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['cta', 'form']>;
  };
}

export interface BaseComponentsContainer extends Struct.ComponentSchema {
  collectionName: 'components_base_components_containers';
  info: {
    displayName: 'Container';
    icon: 'code';
  };
  attributes: {};
}

export interface BaseComponentsHeadLine extends Struct.ComponentSchema {
  collectionName: 'components_base_components_head_lines';
  info: {
    displayName: 'HeadLine';
  };
  attributes: {
    as: Schema.Attribute.Enumeration<
      [
        'heading_one',
        'heading_two',
        'heading_three',
        'heading_four',
        'heading_five',
        'heading_six',
        'paragraph',
        'span',
        'label',
        'legend',
      ]
    >;
    text: Schema.Attribute.Text;
    variant: Schema.Attribute.Enumeration<['primary', 'secondary', 'tertiary']>;
  };
}

export interface BaseComponentsKeyPoint extends Struct.ComponentSchema {
  collectionName: 'components_base_components_key_points';
  info: {
    displayName: 'KeyPoint';
  };
  attributes: {
    icon: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface BaseComponentsLabel extends Struct.ComponentSchema {
  collectionName: 'components_base_components_labels';
  info: {
    displayName: 'Label';
  };
  attributes: {
    as: Schema.Attribute.Enumeration<
      [
        'heading_one',
        'heading_two',
        'heading_three',
        'heading_four',
        'heading_five',
        'heading_six',
        'paragraph',
        'span',
        'label',
        'legend',
      ]
    >;
    text: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['primary', 'secondary', 'tertiary']>;
  };
}

export interface BaseComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_base_components_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface BaseComponentsSeo extends Struct.ComponentSchema {
  collectionName: 'components_base_components_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    metaDescription: Schema.Attribute.String;
    metaKeywords: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    ogDescription: Schema.Attribute.String;
    ogImage: Schema.Attribute.Media<'images' | 'files'>;
    ogTitle: Schema.Attribute.String;
    ogType: Schema.Attribute.Enumeration<['website', 'article', 'product']>;
  };
}

export interface BaseComponentsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_base_components_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    AuthorName: Schema.Attribute.String;
    authorPhoto: Schema.Attribute.Media<'images' | 'files', true>;
    authorRol: Schema.Attribute.String;
    company: Schema.Attribute.String;
    message: Schema.Attribute.String;
  };
}

export interface BaseComponentsText extends Struct.ComponentSchema {
  collectionName: 'components_base_components_texts';
  info: {
    displayName: 'Text';
    icon: 'code';
  };
  attributes: {
    as: Schema.Attribute.Enumeration<
      [
        'heading_one',
        'heading_two',
        'heading_three',
        'heading_four',
        'heading_five',
        'heading_six',
        'paragraph',
        'span',
        'label',
        'legend',
      ]
    >;
    text: Schema.Attribute.Text;
    variant: Schema.Attribute.Enumeration<['primary', 'secondary', 'tertiary']>;
  };
}

export interface BaseComponentsTheme extends Struct.ComponentSchema {
  collectionName: 'components_base_components_themes';
  info: {
    displayName: 'Theme';
    icon: 'brush';
  };
  attributes: {
    blurColor: Schema.Attribute.Enumeration<
      ['type_one', 'type_two', 'type_three']
    >;
    themeBG: Schema.Attribute.Enumeration<['dark', 'light']>;
  };
}

export interface BaseComponentsUseCase extends Struct.ComponentSchema {
  collectionName: 'components_base_components_use_cases';
  info: {
    displayName: 'UseCase';
  };
  attributes: {
    headLine: Schema.Attribute.String;
    imageCase: Schema.Attribute.Media<'files' | 'images'>;
    subLine: Schema.Attribute.String;
  };
}

export interface SectionsFeature extends Struct.ComponentSchema {
  collectionName: 'components_sections_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    demoImages: Schema.Attribute.Media<'images' | 'files', true>;
    description: Schema.Attribute.Component<'base-components.text', false>;
    headLine: Schema.Attribute.Component<'base-components.head-line', false>;
    keyPoints: Schema.Attribute.Component<'base-components.key-point', true>;
    sectionLabel: Schema.Attribute.Component<'base-components.label', false>;
    testimonials: Schema.Attribute.Component<
      'base-components.testimonial',
      true
    >;
    theme: Schema.Attribute.Component<'base-components.theme', false>;
    useCases: Schema.Attribute.Component<'base-components.use-case', true>;
  };
}

export interface SectionsFooter extends Struct.ComponentSchema {
  collectionName: 'components_sections_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    links: Schema.Attribute.Component<'base-components.link', true>;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    cta: Schema.Attribute.Component<'base-components.button', true>;
    demoImages: Schema.Attribute.Media<'images' | 'files', true>;
    description: Schema.Attribute.Component<'base-components.text', false>;
    sponsors: Schema.Attribute.Component<'base-components.label', true>;
    title: Schema.Attribute.Component<'base-components.head-line', false>;
  };
}

export interface SectionsNavbar extends Struct.ComponentSchema {
  collectionName: 'components_sections_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {
    ctas: Schema.Attribute.Component<'base-components.button', true>;
    links: Schema.Attribute.Component<'base-components.link', true>;
    logo: Schema.Attribute.Media<'files' | 'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'base-components.button': BaseComponentsButton;
      'base-components.container': BaseComponentsContainer;
      'base-components.head-line': BaseComponentsHeadLine;
      'base-components.key-point': BaseComponentsKeyPoint;
      'base-components.label': BaseComponentsLabel;
      'base-components.link': BaseComponentsLink;
      'base-components.seo': BaseComponentsSeo;
      'base-components.testimonial': BaseComponentsTestimonial;
      'base-components.text': BaseComponentsText;
      'base-components.theme': BaseComponentsTheme;
      'base-components.use-case': BaseComponentsUseCase;
      'sections.feature': SectionsFeature;
      'sections.footer': SectionsFooter;
      'sections.hero': SectionsHero;
      'sections.navbar': SectionsNavbar;
    }
  }
}
