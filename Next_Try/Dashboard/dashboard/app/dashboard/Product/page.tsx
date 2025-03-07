"use client";

import { useEffect, useState } from "react";
import { books } from "../../../components/columns";
import BookManagement from "../../../components/bookManagement";

export default function DemoPage() {
  const [data, setData] = useState<books[]>([]);
  const [loading, setLoading] = useState(true);
  const [authors, setAuthors] = useState<{ id: string; name: string }[]>([]);
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);

  // Fetch Books, Authors, and Categories
  const fetchData = async () => {
    try {
      const [booksRes, authorsRes, categoriesRes] = await Promise.all([
        fetch("http://localhost:8000/api/books/"),
        fetch("http://localhost:8000/api/authors/"),
        fetch("http://localhost:8000/api/categories/"),
      ]);

      const books = await booksRes.json();
      const authors = await authorsRes.json();
      const categories = await categoriesRes.json();

      setData(books);
      setAuthors(authors);
      setCategories(categories);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

    // Delete Book
    const deleteBook = async (id: string) => {
      if (!confirm("Are you sure you want to delete this book?")) return;

      try {
        const response = await fetch(`http://localhost:8000/api/books/${id}/`, {
          method: "DELETE",
        });

        if (!response.ok) throw new Error("Failed to delete book");
        fetchData();
      } catch (error) {
        console.error("Error deleting book:", error);
      }
    };
  return (
    <div>
      <BookManagement
        data={data}
        loading={loading}
        authors={authors}
        categories={categories}
        fetchData={fetchData}
        deleteBook={deleteBook}
      />
    </div>
  );
}
