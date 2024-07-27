import { getProducts } from "@/lib/actions";

const ProductList = async () => {
  const products = await getProducts();
  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">Products</p>
      {!products || products.length === 0 ? (
        <p className="text-body-bold">products not found</p>
      ) : (
        <div>
          {products.map((product: ProductType) => {
            return <p key={product._id}>{product.title}</p>;
          })}
        </div>
      )}
      djfkldsfjlkdsfjlsd
    </div>
  );
};

export default ProductList;
