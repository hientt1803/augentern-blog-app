import { getAuthSession } from "@/src/utils/auth";
import prisma from "@/src/utils/connect";
import { NextResponse } from "next/server";

// Get All Comment
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");

  // console.log(postSlug);
  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug: postSlug }),
      },
      include: { user: true },
    });

    // console.log("route-comments", comments);
    return new NextResponse(JSON.stringify(comments, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

// CREATE A COMMENT
export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  try {
    const body = await req.json();
    const comment = await prisma.comment.create({
      data: { ...body, userEmail: session.user.email },
    });

    console.log("[route-create-comment-body]", body);
    console.log("route-create-comment", comment);
    return new NextResponse(JSON.stringify(comment, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
