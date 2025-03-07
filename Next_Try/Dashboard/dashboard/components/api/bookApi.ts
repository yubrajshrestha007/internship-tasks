// dashboard/components/api/bookApi.ts
import { Book } from "@/app/dashboard/test/interface/books";
import { BookApiResponse } from "../../app/dashboard/test/interface/books";

export const fetchBooks = async (): Promise<Book[]> => {
  const response = await fetch("http://localhost:8000/api/books");
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const bookApiData: BookApiResponse[] = await response.json();
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
