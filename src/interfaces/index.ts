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

export interface QuantityButtonProps {
  value: number;
  onChange: (val: number) => void;
}

export type CartItem = Book & { quantity: number };

export interface CartState {
  total: number;
  items: CartItem[];
}

export interface CartItemProps {
  imgUrl: string;
  title: string;
  author: string;
  price: string;
  quantity: number;
  onChangeQuantity: (val: number) => void;
  onRemoveItem: () => void;
}
