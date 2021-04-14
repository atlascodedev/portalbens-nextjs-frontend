import React from "react";

export interface MenuItem {
  label: string;
  ref: React.RefObject<HTMLDivElement> | null;
  hidden?: boolean;
}

export interface LandingGenerationItem extends MenuItem {
  component: React.FC<any> | JSX.Element;
}

export interface NavigableComponent {
  navigableElement: JSX.Element | null;
}

export interface BlogPost {
  blogTitle: string;
  blogDate: string;
  blogFeaturedImage: string;
  html: string;
  blogURL: string;
  readingTime: string;
}

export type BlogPostList = {
  blogPosts: Array<BlogPost>;
};

export type ProductType = "vehicle" | "housing";

export interface Product {
  type: ProductType;
  featured: boolean;
  valorCredito: string | number;
  entradaCredito: string | number;
  saldoCredito: string | number;
  admin: string;
}
