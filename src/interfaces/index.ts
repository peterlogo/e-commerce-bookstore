export interface Book {
  id: number
  imgUrl: string
  title: string
  author: string
  price: string
  description: string
}

export interface ThumbnailProps {
  imgUrl: string
}

export type Books = Book[]
