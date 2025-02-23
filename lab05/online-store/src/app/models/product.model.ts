export interface Product{
  id: number;
  images: string[];
  name: string;
  description: string;
  selectedImage?: string;
  rating: number;
  link: string;
  likes: number;
}