export type Product = {
  id: string; categoryId: string; name: string; description: string;
  price: number; image: string; active: boolean; featured?: boolean;
  tags?: string[];
};
export type Category = { id: string; name: string; description?: string; order: number; active: boolean };
export type Restaurant = {
  id: string; slug: string; name: string; tagline: string; logo: string;
  background: string; accent: string; description: string; active: boolean;
  categories: Category[]; products: Product[];
};
export type MenuData = { brand: string; restaurants: Restaurant[] };
