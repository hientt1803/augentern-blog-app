import prisma from "@/src/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const caterories = await prisma.category.findMany();

    return new NextResponse(JSON.stringify(caterories, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify(
        {
          message: "Get Categories went wrong",
        },
        { status: 500 }
      )
    );
  }
};
