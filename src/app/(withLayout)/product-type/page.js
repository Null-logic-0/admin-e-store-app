import { getProductTypes } from "@/lib/data-services";
import ProductsType from "@/screens/product-type";

async function ProductsTypePage() {
  const products = await getProductTypes();
  return (
    <>
      <ProductsType products={products} />
    </>
  );
}

export default ProductsTypePage;
