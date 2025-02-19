'use client'
import React, { useEffect, useState } from 'react'
import { BarComponent } from './barComponent'
import { AreaComponent } from './areaComponent'

const Test = () => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  const [totalStock, setTotalStock] = useState(0);
  const [totalStockPrice, setTotalStockPrice] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5000/products");
        const data = await response.json();
        setProducts(data);

        // Calculate totals
        const uniqueCategories = new Set(data.map(product => product.category));
        setTotalProducts(data.length);
        setTotalCategories(uniqueCategories.size);
        setTotalStock(data.reduce((total, product) => total + product.quantity, 0));
        setTotalStockPrice(data.reduce((total, product) => total + (product.price * product.quantity), 0));
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
      data: totalStock,
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
            <div key={index} className="border bg-card text-card-foreground shadow rounded-xl">
              <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium">{chart.title}</h3>
              </div>
              <div className='p-6 pt-0'>
                <div className='text-2xl font-bold'>
                  {chart.data}
                </div>
                <p className='text-xs text-muted-foreground'>
                  {chart.info}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6'>
        <div className="p-6 pt-0">
          <AreaComponent />
        </div>
        <div className="p-6 pt-0">
          <AreaComponent />
        </div>
        <div className="p-6 pt-0">
          <BarComponent />
        </div>
        <div className="p-6 pt-0">
          <BarComponent />
        </div>
      </div> */}
    </div>
  )
}

export default Test
