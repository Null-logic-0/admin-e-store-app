"use client";
import { UpdateProductType } from "@/actions/productTypeAction";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Label from "@/components/ui/Label";

function EditProductType({ data, productTypeId }) {
  return (
    <div>
      <h1 className="text-3xl font-semibold p-2"> Edit Product Type </h1>

      <form
        className="flex flex-col gap-8 mt-10  px-2"
        action={(formData) => UpdateProductType(formData, productTypeId)}
      >
        <div className="grid gap-2">
          <Label required={true}>Product Type</Label>
          <Input
            placeholder="Enter Product Type"
            name="name"
            defaultValue={data.name}
          />
        </div>

        <Button className="w-52 col-span-2 mt-2">Edit</Button>
      </form>
    </div>
  );
}

export default EditProductType;
