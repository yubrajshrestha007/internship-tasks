"use client"

import { useEffect, useState } from "react";
import { Product, columns } from "./components/columns";
import { DataTable } from "./components/dataTable";

export default function DemoPage() {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    quantity: 0,
    category: "",
  });
  const [editingProductId, setEditingProductId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5000/products");
        const products = await response.json();
        setData(products);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Parse the number fields
    if (name === "price" || name === "quantity") {
      setNewProduct({ ...newProduct, [name]: parseFloat(value) });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  const addProduct = async () => {
    if (!newProduct.name || newProduct.price <= 0 || !newProduct.category) {
      alert("Please fill all fields correctly!");
      return;
    }

    try {
      const highestId = data.length > 0 ? Math.max(...data.map(p => Number(p.id))) : 0;
      const newId = (highestId + 1).toString();
      const productWithId = { ...newProduct, id: newId };

      const response = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productWithId),
      });

      if (!response.ok) throw new Error("Failed to add product");

      setData([...data, productWithId]); // Update table with new product
      resetForm(); // Reset form after adding
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const editProduct = (product: Product) => {
    setNewProduct(product);
    setEditingProductId(product.id); // Set the ID of the product being edited
  };

  const updateProduct = async () => {
    if (!newProduct.name || newProduct.price <= 0 || !newProduct.category) {
      alert("Please fill all fields correctly!");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/products/${editingProductId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) throw new Error("Failed to update product");

      setData(data.map(product => (product.id === editingProductId ? newProduct : product)));
      resetForm();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const deleteProduct = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      const response = await fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete product");
      setData(data.filter(product => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const resetForm = () => {
    setNewProduct({ name: "", price: 0, quantity: 0, category: "" });
    setEditingProductId(null); // Reset editing ID
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="mb-4 p-4 border rounded">
        <h2 className="text-lg font-semibold mb-2">{editingProductId ? "Edit Product" : "Add New Product"}</h2>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={newProduct.quantity}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={newProduct.category}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <button
          onClick={editingProductId ? updateProduct : addProduct}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {editingProductId ? "Update Product" : "Add Product"}
        </button>
      </div>
      {loading ? (
        <p className="text-center">Loading products...</p>
      ) : (
        <DataTable columns={columns} data={data} editProduct={editProduct} deleteProduct={deleteProduct} />
      )}
    </div>
  );
}
