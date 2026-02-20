import type { Schema, Struct } from '@strapi/strapi';

export interface BaseComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_base_components_buttons';
  info: {
    displayName: 'Button';
    icon: 'code';
  };
  attributes: {};
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
      ]
    >;
    variant: Schema.Attribute.Enumeration<['headline', 'subline']>;
  };
}

export interface BaseComponentsKeyPoint extends Struct.ComponentSchema {
  collectionName: 'components_base_components_key_points';
  info: {
    displayName: 'KeyPoint';
  };
  attributes: {};
}

export interface BaseComponentsLabel extends Struct.ComponentSchema {
  collectionName: 'components_base_components_labels';
  info: {
    displayName: 'Label';
  };
  attributes: {
    as: Schema.Attribute.Enumeration<['span', 'label', 'legend']>;
    variant: Schema.Attribute.Enumeration<['nav-link', 'sub-link']>;
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
  attributes: {};
}

export interface BaseComponentsText extends Struct.ComponentSchema {
  collectionName: 'components_base_components_texts';
  info: {
    displayName: 'Text';
    icon: 'code';
  };
  attributes: {
    as: Schema.Attribute.Enumeration<['paragraph']>;
    message: Schema.Attribute.Text;
    variant: Schema.Attribute.Enumeration<['paragraph']>;
  };
}

export interface BaseComponentsUseCase extends Struct.ComponentSchema {
  collectionName: 'components_base_components_use_cases';
  info: {
    displayName: 'UseCase';
  };
  attributes: {};
}

export interface SectionsFeature extends Struct.ComponentSchema {
  collectionName: 'components_sections_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    demoImages: Schema.Attribute.Media<'images' | 'files' | 'videos', true>;
    description: Schema.Attribute.Component<'base-components.text', false>;
    headLine: Schema.Attribute.Component<'base-components.head-line', false>;
    keyPoints: Schema.Attribute.Component<'base-components.key-point', true>;
    sectionLabel: Schema.Attribute.Component<'base-components.label', false>;
    testimonials: Schema.Attribute.Component<
      'base-components.testimonial',
      true
    >;
    useCases: Schema.Attribute.Component<'base-components.use-case', true>;
  };
}

export interface SectionsFooter extends Struct.ComponentSchema {
  collectionName: 'components_sections_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {};
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {};
}

export interface SectionsNavbar extends Struct.ComponentSchema {
  collectionName: 'components_sections_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'base-components.button': BaseComponentsButton;
      'base-components.container': BaseComponentsContainer;
      'base-components.head-line': BaseComponentsHeadLine;
      'base-components.key-point': BaseComponentsKeyPoint;
      'base-components.label': BaseComponentsLabel;
      'base-components.seo': BaseComponentsSeo;
      'base-components.testimonial': BaseComponentsTestimonial;
      'base-components.text': BaseComponentsText;
      'base-components.use-case': BaseComponentsUseCase;
      'sections.feature': SectionsFeature;
      'sections.footer': SectionsFooter;
      'sections.hero': SectionsHero;
      'sections.navbar': SectionsNavbar;
    }
  }
}
