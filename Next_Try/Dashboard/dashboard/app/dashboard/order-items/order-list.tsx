
import React from "react";
import { OrderItemListProps } from "../test/interface/books";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OrderItemList: React.FC<OrderItemListProps> = ({ orderItems, fieldsToDisplay }) => {
  // Filter for fields to display in the compact view
  const compactFields = fieldsToDisplay.filter((field) =>
    [ "bookTitle","quantity", "status" ,"price", 'total','test_total' ].includes(field.key)
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">List of Order Items</h1>
      {orderItems && orderItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {orderItems.map((item) => (
            <Card key={item.id}>
              <CardHeader className="p-2">
                <CardTitle>Order by {item.order.user?.username || "Unknown User"}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-2 p-2 text-sm">
                {compactFields.map((field) => (
                  <div key={field.key} className="flex flex-col">
                    <span className="font-semibold">{field.label}:</span>
                    {field.key === "orderId" ? (
                      <span>{item.order.id}</span>
                    ) : field.key === "bookTitle" ? (
                      <span>{item.book.title}</span>
                    ) : field.key === "status" ? (
                      <span>{item.order.status}</span>
                    ) : (
                      <span>{String(item[field.key as keyof typeof item])}</span>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No order items found.</p>
      )}
    </div>
  );
};

export default OrderItemList;
