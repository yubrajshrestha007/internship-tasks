// BookTable.tsx
import React from "react";
import { books, BookColumns } from "./columns";
import { DataTable } from "./dataTable";

interface BookTableProps {
  data: books[];
  loading: boolean;
  editBook: (book: books) => void;
  deleteBook: (id: string) => void;
}

const BookTable: React.FC<BookTableProps> = ({
  data,
  loading,
  editBook,
  deleteBook,
}) => {
  return (
    <div>
      {loading ? (
        <p className="text-center">Loading books...</p>
      ) : (
        <DataTable<books, unknown>
          columns={BookColumns}
          data={data}
          editBook={editBook}
          deleteBook={deleteBook}
        />
      )}
    </div>
  );
};

export default BookTable;
