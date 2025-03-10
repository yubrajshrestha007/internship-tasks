// /app/dashboard/order-items/page.tsx
"use client";

import React from "react";
import { fetchOrderItems } from "@/components/api/bookApi";
import { OrderItem } from "@/app/dashboard/test/interface/books";
import { order_items_fields } from "@/app/dashboard/test/components/bookField";
import OrderItemList from "./order-list";
import { useQuery } from "@tanstack/react-query";

const OrderItemsPage: React.FC = () => {
  const {
    isPending,
    isError,
    data: orderItems,
    error,
  } = useQuery<OrderItem[], Error>({
    queryKey: ["orderItems"],
    queryFn: fetchOrderItems,
  });

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {(error as Error).message}</p>;
  }

  const modifiedFields = order_items_fields.map((field) => {
    if (field.key === "orderId") {
      return { ...field, key: "orderId" };
    }
    if (field.key === "bookTitle") {
      return { ...field, key: "bookTitle" };
    }
    return field;
  });
  return (
    <div>
      <OrderItemList
        orderItems={orderItems || []}
        fieldsToDisplay={modifiedFields}
      />
    </div>
  );
};

export default OrderItemsPage;
