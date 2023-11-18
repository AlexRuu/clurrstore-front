export interface Product {
  id: string;
  title: string;
  price: number;
  stock: number;
  description: string;
  category: Category;
  detail: Detail[];
  style: Style[];
  design: Design[];
  image: Image[];
  isFeatured: boolean;
}

export interface Category {
  id: string;
  title: string;
}

export interface Detail {
  id: string;
  text: string;
}

export interface Style {
  id: string;
  title: string;
}

export interface Design {
  id: string;
  title: string;
}

export interface Image {
  id: string;
  url: string;
}
