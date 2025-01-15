"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { jwtTokenVerification } from "@/lib/data-services";

export const createUser = async (formData) => {
  await jwtTokenVerification();

  const salt = bcrypt.genSaltSync(5);
  const hashedPassword = await bcrypt.hash(formData.get("password"), salt);
  const data = {
    userName: formData.get("userName"),
    userType: formData.get("userType"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  const existingUser = await db.adminUser.findUnique({
    where: {
      userName: data.userName,
    },
  });

  if (existingUser) {
    return redirect("/users/add?errorMessage=username already exsists.");
  }

  await db.adminUser.create({
    data: {
      userName: data.userName,
      userType: data.userType,
      password: hashedPassword,
    },
  });

  revalidatePath("/users", "page");
  redirect("/users");
};

export const UpdateUser = async (formData, userId) => {
  await jwtTokenVerification();

  const data = {
    userName: formData.get("userName"),
    userType: formData.get("userType"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };
  const salt = bcrypt.genSaltSync(5);
  const hashedPassword = await bcrypt.hash(formData.get("password"), salt);

  await db.adminUser.update({
    where: {
      id: parseInt(userId),
    },

    data: {
      userName: data.userName,
      userType: data.userType,
      ...(data.password && { hashedPassword }),
    },
  });

  revalidatePath("/users", "page");
  redirect("/users");
};

export const deleteUser = async (userId) => {
  await jwtTokenVerification();

  await db.adminUser.delete({
    where: {
      id: userId,
    },
  });

  revalidatePath("/users", "page");
};
