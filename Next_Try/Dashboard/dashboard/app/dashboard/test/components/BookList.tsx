import React from "react";
import { BookListProps } from "../interface/books";

const BookList: React.FC<BookListProps> = ({ books, fieldsToDisplay }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">List of Books</h1>
      <ul>
        {books?.map((book) => (
          <li key={book.id} className="mb-2">
            {fieldsToDisplay.map((field) => (
              <div key={field.key} className="mb-1">
                <span className="font-semibold">
                  {field.label}:{" "}
                </span>
                {typeof book[field.key] === 'object' ? (
                  <>
                    {field.key === 'author' && book.author.name}
                    {field.key === 'category' && book.category.name}
                  </>
                ) : (
                  String(book[field.key])
                )}
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
