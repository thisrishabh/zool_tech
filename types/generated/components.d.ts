import type { Schema, Attribute } from '@strapi/strapi';

export interface PageAMiddle extends Schema.Component {
  collectionName: 'components_page_a_middles';
  info: {
    displayName: 'A_Middle';
  };
  attributes: {
    title: Attribute.Text;
    left_desc: Attribute.RichText;
    right_desc: Attribute.RichText;
  };
}

export interface PageFooter extends Schema.Component {
  collectionName: 'components_page_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.JSON;
  };
}

export interface PageGallery extends Schema.Component {
  collectionName: 'components_page_galleries';
  info: {
    displayName: 'gallery';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    sub_title: Attribute.Text;
    img_url: Attribute.JSON;
  };
}

export interface PageHeader extends Schema.Component {
  collectionName: 'components_page_headers';
  info: {
    displayName: 'header';
    icon: 'file';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    sub_title: Attribute.String;
    img_url: Attribute.String;
  };
}

export interface PageMain extends Schema.Component {
  collectionName: 'components_page_mains';
  info: {
    displayName: 'main';
    icon: 'crown';
  };
  attributes: {
    title: Attribute.Text;
    desc: Attribute.RichText;
    sub_title: Attribute.Text;
  };
}

export interface PageMiddle extends Schema.Component {
  collectionName: 'components_page_middles';
  info: {
    displayName: 'middle';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    image: Attribute.Media;
    desc: Attribute.RichText;
    img_url: Attribute.String;
  };
}

export interface PageRecent extends Schema.Component {
  collectionName: 'components_page_recents';
  info: {
    displayName: 'Recent';
  };
  attributes: {
    blog_name: Attribute.JSON;
  };
}

export interface PageTeam extends Schema.Component {
  collectionName: 'components_page_teams';
  info: {
    displayName: 'team';
  };
  attributes: {
    name: Attribute.String;
    profile_photo: Attribute.Media;
    designation: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page.a-middle': PageAMiddle;
      'page.footer': PageFooter;
      'page.gallery': PageGallery;
      'page.header': PageHeader;
      'page.main': PageMain;
      'page.middle': PageMiddle;
      'page.recent': PageRecent;
      'page.team': PageTeam;
    }
  }
}
