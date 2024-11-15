export interface Product {
  id: number;
  rating: string;
  name: string;
  slug: string;
  images: string[];
  attachment: string | null;
  brand: Brand;
  category: Category;
  tags: Tag[];
  variations: Variation[];
  descriptions: Descriptions;
  measurements: Measurements;
  related_products: RelatedProducts;
  meta: Meta;
}

export interface MinimalProduct {
  id: number;
  name: string;
  slug: string;
  images: string[];
  variations: Variation[];
}

interface Brand {
  id: number;
  name: string;
  slug: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface Tag {
  name: string;
  slug: string;
}

export interface Variation {
  name: string;
  sku: string;
  sell_at: number;
  mrp: number;
  stock: number;
  active_discount: number | null;
}

export interface Descriptions {
  full: string;
  small: string;
}

export interface Measurements {
  length: number | null;
  width: number | null;
  height: number | null;
  weight: number | null;
}

export interface RelatedProducts {
  bundle: any[];
  upsell: any[];
  cross_sell: any[];
}

export interface Meta {
  meta_title: string;
  meta_keywords: string | null;
  meta_description: string;
  metafields: {
    field: string;
    value: string;
  }[];
}
