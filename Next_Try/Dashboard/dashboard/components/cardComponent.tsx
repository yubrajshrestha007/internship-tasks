'use client'
import React, { useEffect, useState } from 'react'
import { BarComponent } from './barComponent'
import { AreaComponent } from './areaComponent'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Test = () => {
  const [products, setProducts] = useState<unknown[]>([]); // Use any[] or define a proper type
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  const [totalStock, setTotalStock] = useState(0);
  const [totalStockPrice, setTotalStockPrice] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8000/api/books");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);

        // Calculate totals
        const uniqueCategories = new Set(data.map((books: any) => books.category.id)); // Access category.id
        setTotalProducts(data.length);
        setTotalCategories(uniqueCategories.size);
        setTotalStock(data.reduce((total: number, books: any) => total + books.book_quantity, 0)); // Access book_quantity
        setTotalStockPrice(data.reduce((total: number, books: any) => total + (books.price * books.book_quantity), 0)); // Access book_quantity
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  // Update chartData with calculated totals
  const chartData = [
    {
      title: 'Total Products',
      type: 'bar',
      data: totalProducts.toString(),
    },
    {
      title: 'Total Categories',
      type: 'area',
      data: totalCategories.toString(),
    },
    {
      title: 'Total Stock',
      data: totalStock.toString(),
    },
    {
      title: 'Total Stock Price',
      type: 'bar',
      data: `$${totalStockPrice.toFixed(2)}`,
    }
  ];

  return (
    <div>
      <h1 className='text-3xl font-mono font-extrabold my-3 mx-4'>
        Hi, Welcome back 👋
      </h1>
      <div className="flex flex-col gap-4 p-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {chartData.map((chart, index) => (
            <Card key={index} className="">
                <CardHeader className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="tracking-tight text-sm font-medium">{chart.title}</CardTitle>
                </CardHeader>
                <CardContent className='p-6 pt-0'>
                <div className='text-2xl font-bold'>
                    {chart.data}
                </div>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
      </div>

  )
}

export default Test
