import { getproducts } from "@/lib/data-services";
import Products from "@/screens/products";

async function productsPage() {
  const products = await getproducts();

  return (
    <>
      <Products products={products} />
    </>
  );
}

export default productsPage;
