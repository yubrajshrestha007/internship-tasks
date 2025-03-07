// BookForm.tsx
// import React, { useState } from "react";

interface BookFormProps {
  newBook: {
    title: string;
    price: number;
    categoryId: number;
    publication_date: string;
    authorId: number;
    description: string;
    book_quantity: number;
  };
  authors: { id: string; name: string }[];
  categories: { id: string; name: string }[];
  editingBookId: number | null;
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  onCancel: () => void;
  onSubmit: () => void;
}

const BookForm: React.FC<BookFormProps> = ({
  newBook,
  authors,
  categories,
  editingBookId,
  handleInputChange,
  onCancel,
  onSubmit,
}) => {
  return (
    <div className="mb-4 p-4 border rounded">
      <h2 className="text-lg font-semibold mb-2">
        {editingBookId ? "Edit Book" : "Add New Book"}
      </h2>
      <form onSubmit={(e) => {e.preventDefault();onSubmit();}} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Title */}
        <div className="flex flex-col">
          <label htmlFor="title" className="mb-1">
            Book Title:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Book Title"
            value={newBook.title}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>

        {/* Price */}
        <div className="flex flex-col">
          <label htmlFor="price" className="mb-1">
            Price:
          </label>
          <input
            type="text"
            name="price"
            id="price"
            placeholder="Price"
            value={newBook.price}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>

        {/* Quantity */}
        <div className="flex flex-col">
          <label htmlFor="book_quantity" className="mb-1">
            Quantity:
          </label>
          <input
            type="text"
            name="book_quantity"
            id="book_quantity"
            placeholder="Quantity"
            value={newBook.book_quantity}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label htmlFor="description" className="mb-1">
            Description:
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="Description"
            value={newBook.description}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>
        {/* Publication Date */}
        <div className="flex flex-col">
          <label htmlFor="publication_date" className="mb-1">
            Publication Date:
          </label>
          <input
            type="date"
            name="publication_date"
            id="publication_date"
            value={newBook.publication_date}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>

        {/* Author Dropdown */}
        <div className="flex flex-col">
          <label htmlFor="authorId" className="mb-1">
            Author:
          </label>
          <select
            name="authorId"
            id="authorId"
            value={newBook.authorId}
            onChange={handleInputChange}
            className="border p-2"
          >
            <option value="">Select Author</option>
            {authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>
        </div>

        {/* Category Dropdown */}
        <div className="flex flex-col">
          <label htmlFor="categoryId" className="mb-1">
            Category:
          </label>
          <select
            name="categoryId"
            id="categoryId"
            value={newBook.categoryId}
            onChange={handleInputChange}
            className="border p-2"
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div className="flex gap-4">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
            {editingBookId ? "Update Book" : "Add Book"}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
