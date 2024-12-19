export interface Quote {
  text: string;
  author: string;
}

export interface Blog {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export interface Review {
  id: string;
  name: string;
  content: string;
  rating: number;
  createdAt: string;
}