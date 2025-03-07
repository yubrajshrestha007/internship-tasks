export interface Book {
  id: number;
  title: string;
  author:Author;
  price: number;
  category:Category;
  description: string;
  book_quantity:number;
  publication_date:string;
}

export interface Author {
    id: number;
    name: string;
  }

  export interface Category {
    id: number;
    name: string;
  }

  export interface BookApiResponse {
    id: number;
    title: string;
    price: number;
    publication_date:string;
    description:string;
    book_quantity:number;
    author: Author;
    category: Category;
  }
 export interface BookListProps {
  books: Book[];
  fieldsToDisplay: { key: keyof Book; label: string }[];
}
export interface bookFields{
    key: keyof Book;
    label: string;
}
