import { getUniqueProductType } from "@/lib/data-services";
import EditProductType from "@/screens/product-type/edit";

async function EditProductTypePage({ params }) {
  const { productTypeId } = await params;
  const productTypeData = await getUniqueProductType(productTypeId);
  return (
    <>
      <EditProductType data={productTypeData} productTypeId={productTypeId} />
    </>
  );
}

export default EditProductTypePage;
