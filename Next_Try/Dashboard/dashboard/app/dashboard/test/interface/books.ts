// /home/mint/Desktop/ClocoIntern/internship-tasks/Next_Try/Dashboard/dashboard/app/dashboard/test/interface/books.ts

export interface Book {
  id: number;
  title: string;
  author: Author;
  price: number;
  category: Category;
  description: string;
  book_quantity: number;
  publication_date: string;
}

export interface Author {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface OrderItem {
  id: number;
  order: Order; // ForeignKey to Order (using the ID for simplicity)
  book: Book; // ForeignKey to Book (using the ID for simplicity)
  quantity: number;
  price: number;
}

export interface Order {
  id: number;
  user: user; // ForeignKey to User (using the ID for simplicity)
  order_date: string; // Or Date object, depending on how you want to handle it
  total: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled'; // Add more statuses as needed
}

export interface BookApiResponse {
  id: number;
  title: string;
  price: number;
  publication_date: string;
  description: string;
  book_quantity: number;
  author: Author;
  category: Category;
}
export interface BookListProps {
  books: Book[];
  fieldsToDisplay: { key: keyof Book; label: string }[];
}
export interface bookFields {
  key: keyof Book;
  label: string;
}
export interface OrderItemListProps {
  orderItems: OrderItem[];
  fieldsToDisplay: { key: string; label: string }[];
}
export interface orderFields
{ key: keyof OrderItem| string;
     label: string }

export interface user{
    id: number;
    username: string;
    email: string;
    address: string;
    role: string;

}
