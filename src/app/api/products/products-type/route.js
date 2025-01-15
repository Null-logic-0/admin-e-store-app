import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const productsType = await db.productType.findMany();
    return NextResponse.json({
      status: 200,
      message: "Product types fetched successfully!",
      data: productsType,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
