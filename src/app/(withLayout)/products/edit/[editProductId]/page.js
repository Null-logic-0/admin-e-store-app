import { getProductTypes, getUniqueProduct } from "@/lib/data-services";
import EditProduct from "@/screens/products/edit";

async function EditProductPage({ params, searchParams }) {
  const { editProductId } = await params;
  const productData = await getUniqueProduct(editProductId);
  const productTypes = await getProductTypes();
  return (
    <>
      <EditProduct
        product={productData}
        productTypes={productTypes}
        searchParams={searchParams}
      />
    </>
  );
}

export default EditProductPage;
