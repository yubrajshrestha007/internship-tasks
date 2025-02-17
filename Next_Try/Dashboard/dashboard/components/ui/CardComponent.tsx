import React from 'react'
import {  BarComponent } from './BarComponent'
import { AreaComponent } from './AreaComponent'
// import { Component } from '../chart-temp'
const chartData = [
  {
    title: 'Total Sales',
    type: 'bar',
    data: [10, 20, 30, 40, 50]
  },
  {
    title: 'Total Revenue',
    type: 'area',
    data: [100, 200, 300, 400, 500]
  },
  {
    title: 'New Chart',
    type: 'bar',
    data: [50, 60, 70, 80, 90]
  }
];

const Test = () => {
  return (
<div>
    <h1 className='text-3xl font-mono font-extrabold my-3 mx-4'>
        Hi, Welcome back 👋
    </h1>
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
           <div className="grid auto-rows-min gap-4 md:grid-cols-3">
      {chartData.map((chart, index) => (
        <div key={index} className="aspect-video rounded-xl bg-muted/50">
          <h3 className="text-lg mx-2 my-3 font-bold">{chart.title}</h3>
          <p>
            {chart.type}
          </p>
        </div>
      ))}
    </div>
          </div>
          <div className=" flex-1 rounded-xl bg-muted/50 my-5 h-auto  " >
          <AreaComponent/>
          </div>
          <div className=" flex-1 rounded-xl bg-muted/50 " >
          <BarComponent/>
          </div>
        </div>
  )
}

export default Test
