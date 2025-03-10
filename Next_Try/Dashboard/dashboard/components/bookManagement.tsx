// BookManagement.tsx
"use client";
import React, { useState } from "react";
import { books } from "./columns";
import BookTable from "./bookTable";
import AddBookButton from "./ui/addBookButton";
import { BookFormManagement } from "./bookFormManagement";

interface BookManagementProps {
  data: books[];
  loading: boolean;
  authors: { id: string; name: string }[];
  categories: { id: string; name: string }[];
  fetchData: () => Promise<void>;
  deleteBook: (id: string) => Promise<void>;
}

const BookManagement: React.FC<BookManagementProps> = ({
  data,
  loading,
  authors,
  categories,
  fetchData,
  deleteBook,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [editingBookId, setEditingBookId] = useState<number | null>(null);
  const [newBook, setNewBook] = useState<{
    title: string;
    price: number;
    categoryId: number;
    publication_date: string;
    authorId: number;
    description: string;
    book_quantity: number;
  }>({
    title: "",
    price: 0,
    categoryId: 0,
    publication_date: "",
    authorId: 0,
    description: "",
    book_quantity:0,
  });

    // Reset Form
    const resetForm = () => {
      setNewBook({
        title: "",
        price: 0,
        categoryId: 0,
        authorId: 0,
        publication_date: "",
        description: "",
        book_quantity: 0,
      });
      setEditingBookId(null);
    };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "price") {
      setNewBook({ ...newBook, [name]: parseFloat(value) || 0 });
    } else if (name === "authorId" || name === "categoryId") {
      setNewBook({ ...newBook, [name]: parseInt(value) || 0 });
    } else if (name === "book_quantity") {
      setNewBook({ ...newBook, [name]: parseInt(value) || 0 });
    } else {
      setNewBook({ ...newBook, [name]: value });
    }
  };

  // Handle Add New Book click
  const handleAddNewBookClick = () => {
    setShowForm(true);
    resetForm();
  };


    // Edit Book
    const editBook = (book: books) => {
      setNewBook({
        title: book.title,
        price: book.price,
        categoryId: book.categoryId,
        publication_date: book.publication_date,
        authorId: book.authorId,
        description: book.description,
        book_quantity: book.book_quantity,
      });
      setEditingBookId(book.id);
      setShowForm(true);
    };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Books List</h1>
      <AddBookButton onClick={handleAddNewBookClick} />
      {showForm && (
       <BookFormManagement
       newBook={newBook}
       setNewBook={setNewBook}
       editingBookId={editingBookId}
       handleInputChange={handleInputChange}
       setShowForm={setShowForm}
       fetchData={fetchData}
       resetForm={resetForm}
       authors={authors}
       categories={categories}
     />
      )}

      <BookTable
        data={data}
        loading={loading}
        editBook={editBook}
        deleteBook={deleteBook}
      />
    </div>
  );
};

export default BookManagement;
