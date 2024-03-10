export interface Product {
  id: string;
  title: string;
  price: number;
  stock: number;
  description: string;
  category: Category;
  detail: Detail[];
  styleId: string;
  style: Style[];
  designId: string;
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

export interface HomeImage {
  id: string;
  title: string;
  description: string;
  url: string;
}

export interface Order {
  id: string;
  name: string;
  email: string;
  orderNumber: string;
  orderItem: OrderItem[];
  isPaid: boolean;
  address: string;
  phone: string;
  tax: number;
  shipping: number;
  total: number;
  createdAt: string;
}

export interface OrderItem {
  id: string;
  product: Product;
  design: Design;
  style: Style;
  quantity: number;
}

export interface Profile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  postalCode: string;
  address1: string;
  address2: string;
  city: string;
  province: string;
  country: string;
  order: Order[];
}
