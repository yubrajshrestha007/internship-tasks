
import { bookFields,orderFields, } from "../interface/books";
export const BookFields: bookFields[] = [
    { key: "title", label: "Title" },
    { key: "author", label: "Author" },
    { key: "price", label: "Price" },
    { key: "category", label: "Category" },
    {key: "publication_date",label:"Publication Date"},
    {key: "book_quantity",label:"Books Quantity"},
    { key: "description", label: "Description" },
  ];

export const order_items_fields: orderFields[] = [
  { key: "id", label: "Order Item ID" },
  { key: "orderId", label: "Order ID" }, // Corrected key and label
  { key: "bookTitle", label: "Book Title" }, // Changed to book title
  { key: "quantity", label: "Quantity" },
  { key: "price", label: "Price" },
  { key: "total", label: "Total" },
  { key: "status", label: "Status" },
  { key: "test_total", label: "test_total" },
];
