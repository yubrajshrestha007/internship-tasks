// dashboard/app/dashboard/test/components/BookManagementPage.tsx
"use client";

import { useQuery } from "@tanstack/react-query";
import { Book } from "@/app/dashboard/test/interface/books";
import { fetchBooks } from "@/components/api/bookApi";
import BookList from "./BookList";
import { BookFields } from "./bookField";
const BookManagementPage: React.FC = () => {
  const {
    isPending,
    isError,
    data: books,
    error,
  } = useQuery<Book[], Error>({ queryKey: ["books"], queryFn: fetchBooks });
  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {(error as Error).message}</p>;
  }

  return (
    <div>
      <BookList books={books || []} fieldsToDisplay={BookFields} />
    </div>
  );
};

export default BookManagementPage;
