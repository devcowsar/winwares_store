import { getProducts } from "@/lib/actions";
import ProductCard from "./ProductCard";

const ProductList = async () => {
  const products = await getProducts();
  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">Products</p>
      {!products || products.length === 0 ? (
        <p className="text-body-bold">products not found</p>
      ) : (
        <div className="flex flex-wrap mx-auto gap-16">
          {products.map((product: ProductType) => {
            return <ProductCard key={product._id} product={product} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ProductList;
