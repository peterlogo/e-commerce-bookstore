export interface Book {
  id: number;
  imgUrl: string;
  title: string;
  author: string;
  price: string;
  description: string;
}

export type Books = Book[];

export interface ThumbnailProps {
  imgUrl: string;
  width: number;
  height: number;
  onClick: () => void;
}

export interface ItemProps {
  book: Book;
}

export interface BookCardProps {
  title: string;
  author: string;
  description: string;
}
