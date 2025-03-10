// import { order_items } from './../columns';
// dashboard/components/api/bookApi.ts
import { Book,OrderItem, } from "@/app/dashboard/test/interface/books";
// import { BookApiResponse } from "../../app/dashboard/test/interface/books";
// import { books } from "../columns";

export const fetchBooks = async (): Promise<Book[]> => {
  const response = await fetch("http://localhost:8000/api/books");
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const bookApiData: Book[] = await response.json();
  return bookApiData.map((book) => ({
    id: book.id,
    title: book.title,
    price: book.price,
    author: book.author,
    category: book.category,
    book_quantity: book.book_quantity,
    publication_date:book.publication_date,
    description:book.description
  }));
};


export const fetchOrderItems = async (): Promise<OrderItem[]> => {
  const response = await fetch("http://localhost:8000/api/order-items/");
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const orderItems: OrderItem[]  = await response.json();
  return orderItems.map((item: OrderItem) => ({
    id: item.id,
    order: item.order,
    status: item.order.status,
    book: item.book,
    quantity: item.quantity,
    price:  item.book.price,
    total: item.quantity *item.book.price,
    test_total:item.price,
  }));
};
