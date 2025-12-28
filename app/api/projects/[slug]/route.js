import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { slug } = await params;
    const client = await clientPromise;
    const db = client.db("personalSiteDB");

    const project = await db.collection("projects").findOne({slug: slug});
    //console.log(project);

    return NextResponse.json({
      success: true,
      project,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}