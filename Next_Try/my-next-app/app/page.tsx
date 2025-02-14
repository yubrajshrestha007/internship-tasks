import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl">Hello, Next.js!</h1>
      <a href="/User">users</a>
      <ProductCard />
    </div>
  );
}
