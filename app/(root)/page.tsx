import ProductList from "@/components/shared/product/product.list";
export default function Home() {
  return (
    <div className="space-y-8">
      <h1>Latest products</h1>
      <ProductList />
    </div>
  );
}
