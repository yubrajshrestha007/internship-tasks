// In columns.js
import { ColumnDef } from "@tanstack/react-table";

export type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
};


export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Product Name",
  },
  {
    accessorKey: "price",
    header: "Price ($)",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
// In columns.js
{
  id: "actions",
  header: "Actions",
  cell: ({ row, table }) => {
    const product = row.original;
    return (
      <div className="flex gap-2">
        <button
          onClick={() => table.options.meta.editProduct(product)}
          className="px-2 py-1 bg-blue-500 text-white rounded"
        >
          Edit
        </button>
        <button
          onClick={() => table.options.meta.deleteProduct(product.id)}
          className="px-2 py-1 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
    );
  },
},
];
