import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
    return NextResponse.json([
        {id: 1, name: 'Chaitya'},
        {id: 2, name: 'Rahul'},
    ]);
}

export async function POST(request: NextRequest)
{
    // Since the request.json return a promise, we need to await it
    // and therfore we need to make the function async
    const body = await request.json();

    //Validate
    // If invalid, return 400
    //Else return

    const validation = schema.safeParse(body);
    // if(!body.name)
    if(!validation.success)
    {
        // return NextResponse.json({error: 'Name is required'}, {status: 400});
        return NextResponse.json(validation.error.errors, {status: 400});
    }

    // Whatever we will send we will get that in response
    return NextResponse.json({id: 1, name: body.name}, {status: 201});

}