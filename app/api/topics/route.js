import Topic from "@/models/topic";
import { NextResponse } from "next/server";
import connectMongoDb from "@/libs/mongodb";

export async function POST(req) {
    const {title, description} = await req.json();

    await connectMongoDb();
    await Topic.create({title, description});
    return NextResponse.json({message: "Topic created"}, {status: 201})
}

export async function GET(){
    await connectMongoDb();
    const topics = await Topic.find()
    return NextResponse.json({topics})
}

export async function DELETE(req){
    

    const id = req.nextUrl.searchParams.get("id")
    await connectMongoDb();
    await Topic.findByIdAndDelete(id);

    return NextResponse.json({message: "Topic deleted"}, {status: 200})

}