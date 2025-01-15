"use server";

import { jwtTokenVerification } from "@/lib/data-services";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createProductType = async (formData) => {
  await jwtTokenVerification();

  const data = {
    name: formData.get("name"),
  };

  const exsistingProductType = await db.productType.findUnique({
    where: {
      name: data.name,
    },
  });

  if (exsistingProductType) {
    redirect("/product-type/add?errorMessage=Product type already exsist.");
  }

  await db.productType.create({
    data: {
      name: data.name,
    },
  });

  revalidatePath("/product-type", "page");
  redirect("/product-type");
};

export const UpdateProductType = async (formData, productTypeId) => {
  await jwtTokenVerification();

  const data = {
    name: formData.get("name"),
  };

  await db.productType.update({
    where: {
      id: parseInt(productTypeId),
    },

    data: {
      name: data.name,
    },
  });

  revalidatePath("/product-type", "page");
  redirect("/product-type");
};

export const DeleteProductType = async (productTypeId) => {
  await jwtTokenVerification();

  await db.productType.delete({
    where: {
      id: productTypeId,
    },
  });

  revalidatePath("/product-type", "page");
};
