// In columns.js
import { ColumnDef } from "@tanstack/react-table";

export type books = {
  authorId: number;
  author: { id: number; name: string };
  id: number; // Change to number
  title: string;
  price: number;
  publication_date:string;
  categoryId: number;
  category: { id: number; name: string };
  description:string; //add this line
  book_quantity:number;// add this line
};

// export type order_items={
//     id: number;
//     book_id: number;
//     order_id: number;
//     quantity: number;
//     price: number;
//     order:{
//         id: number;
//         user:{
//             username:string;
//             email:string;
//             address:string;
//         }
//     }
//     book:{
//         title:string;
//     }
//     category:{
//         name:string;
//     }
// };



declare module '@tanstack/react-table' {
  interface TableMeta<TData> {
    editBook: (product: TData) => void;
    deleteBook: (id: string) => void;
  }
}

export const BookColumns: ColumnDef<books>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Book Title ",
  },
  {
    accessorKey: "author.name",
    header: "Author ",
  },
  {
    accessorKey: "price",
    header: "Price ($)",
  },
  {
    accessorKey: "book_quantity", //add this line
    header: "Quantity",
  },
  {
    accessorKey: "publication_date",
    header: "Publication Date",
  },
  {
    accessorKey: "category.name",
    header: "Category",
  },
  {
    accessorKey:"description",// add this line
    header:"Description"
  },
// In columns.js
{
  id: "actions",
  header: "Actions",
  cell: ({ row, table }) => {
    const Book = row.original;
    return (
      <div className="flex gap-2">
        <button
          onClick={() => table.options.meta?.editBook?.(Book)}
          className="px-2 py-1 bg-blue-500 text-white rounded"
        >
          Edit
        </button>
        <button
          onClick={() => table.options.meta?.deleteBook(Book.id.toString())}
          className="px-2 py-1 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
    );
  },
},
];
//   export const OrderColumns: ColumnDef<order_items>[] = [
//   {
//     accessorKey: "id",
//     header: "ID",
//   },
//   {
//     accessorKey: "Order.user.Username",
//     header: "Order By ",
//   },
//   {
//     accessorKey: "author.name",
//     header: "Author ",
//   },
//   {
//     accessorKey: "price",
//     header: "Price ($)",
//   },
//   {
//     accessorKey: "book_quantity", //add this line
//     header: "Quantity",
//   },
//   {
//     accessorKey: "publication_date",
//     header: "Publication Date",
//   },
//   {
//     accessorKey: "category.name",
//     header: "Category",
//   },
//   {
//     accessorKey:"description",// add this line
//     header:"Description"
//   },
//   ];
