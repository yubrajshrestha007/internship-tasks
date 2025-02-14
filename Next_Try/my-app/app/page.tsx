'use client'
import ProductCard from "./components/ProductCard";
import { Button } from "@/components/ui/button";
import NavLinks from "./Test/page";
import { error } from "console";
export default function Home() {
  return (
    <div>
        <NavLinks/>
      <h1 className="text-4xl">Hello, Next.js!</h1>
      <a href="/User">users</a>
      <Button onClick={()=>{alert("clicked")}}>
        Click
      </Button >
      <ProductCard />
    </div>
  );
}
