import React from "react";
import { BookListProps } from "../interface/books";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BookList: React.FC<BookListProps> = ({ books, fieldsToDisplay }) => {
  // Filter for fields to display in the compact view
  const compactFields = fieldsToDisplay.filter((field) =>
    ["title", "author", "price","description"].includes(field.key)
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">List of Books</h1>
      {books && books.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {books.map((book) => (
            <Card key={book.id}>
              <CardHeader className="p-2">
                <CardTitle>{book.title}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-2 p-2 text-sm">
                {compactFields.map((field) => (
                  <div key={field.key} className="flex flex-col">
                    <span className="font-semibold">{field.label}:</span>
                    {field.key === "author" ? (
                      <span>{book.author.name}</span>
                    ) : (
                      <span>{String(book[field.key])}</span>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No books found.</p>
      )}
    </div>
  );
};

export default BookList;
