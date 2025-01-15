import { getProductTypes } from "@/lib/data-services";
import AddProducts from "@/screens/products/add";

async function PropductAddPage({ searchParams }) {
  const productTypes = await getProductTypes();

  return (
    <>
      <AddProducts searchParams={searchParams} productTypes={productTypes} />
    </>
  );
}

export default PropductAddPage;
