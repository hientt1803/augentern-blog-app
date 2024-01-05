import prisma from "@/src/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { slug } = params;

  console.log("route-slug", slug);
  try {
    const post = await prisma.post.findUnique({
      where: { slug: slug },
      include: { user: true },
    });

    // console.log("route-post", post);
    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
