import { getProductDetailis } from "@/lib/actions";

const ProductDetails = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const productDetails = await getProductDetailis(params.productId);
  console.log(productDetails);
  return (
    <div className="flex justify-center items-start gap-16 py-10 px-5 max-md:flex-col max-md:items-center">
      ProductDetails
    </div>
  );
};

export default ProductDetails;
