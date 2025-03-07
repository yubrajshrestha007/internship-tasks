//BookFormManagement.tsx
import BookForm from "./bookForm";

interface BookFormManagementProps {
  newBook: {
    title: string;
    price: number;
    categoryId: number;
    publication_date: string;
    authorId: number;
    description: string;
    book_quantity: number;
  };
  setNewBook: React.Dispatch<React.SetStateAction<{
    title: string;
    price: number;
    categoryId: number;
    publication_date: string;
    authorId: number;
    description: string;
    book_quantity: number;
  }>>;
  editingBookId: number | null;
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  fetchData: () => Promise<void>;
  resetForm: () => void;
  authors: { id: string; name: string }[];
  categories: { id: string; name: string }[];
}

export const BookFormManagement: React.FC<BookFormManagementProps> = ({
  newBook,
  editingBookId,
  handleInputChange,
  setShowForm,
  fetchData,
  resetForm,
  authors,
  categories
}) => {
  // Add Book
  const addBook = async () => {
    if (
      !newBook.title ||
      newBook.price <= 0 ||
      !newBook.categoryId ||
      !newBook.authorId ||
      !newBook.publication_date ||
      !newBook.book_quantity ||
      !newBook.description
    ) {
      alert("Please fill all fields correctly!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/books/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newBook.title,
          price: newBook.price,
          category_id: newBook.categoryId,
          author_id: newBook.authorId,
          publication_date: newBook.publication_date,
          book_quantity: newBook.book_quantity,
          description: newBook.description,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add book");
      }
      fetchData();
      resetForm();
      setShowForm(false);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  // Update Book
  const updateBook = async () => {
    if (
      !newBook.title ||
      newBook.price <= 0 ||
      !newBook.categoryId ||
      !newBook.authorId ||
      !newBook.publication_date ||
      !newBook.book_quantity ||
      !newBook.description
    ) {
      alert("Please fill all fields correctly!");
      return;
    }

    try {
      if (editingBookId === null) {
        throw new Error("No book ID provided for update.");
      }

      const response = await fetch(
        `http://localhost:8000/api/books/${editingBookId}/`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: newBook.title,
            price: newBook.price,
            category_id: newBook.categoryId,
            author_id: newBook.authorId,
            publication_date: newBook.publication_date,
            book_quantity: newBook.book_quantity,
            description: newBook.description,
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to update book");

      fetchData();
      resetForm();
      setShowForm(false);
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return(
  <BookForm
          newBook={newBook}
          authors={authors}
          categories={categories}
          editingBookId={editingBookId}
          handleInputChange={handleInputChange}
          onCancel={()=>{setShowForm(false);resetForm()}}
          onSubmit={editingBookId ? updateBook : addBook}
        />
  )
};
