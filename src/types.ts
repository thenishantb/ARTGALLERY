export interface Artwork {
  _id: string; // MongoDB uses _id instead of id
  title: string;
  artist: string;
  price: number;
  image_url: string;
  description: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}