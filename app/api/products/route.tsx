import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export async function GET(
  request: NextRequest,
) {
  return NextResponse.json([
    { id: 1, name: "milk", price: 2.5 },
    { id: 2, name: "bread", price: 3.5 },
  ]);
}

export async function POST(request: NextRequest)
{
    const body = await request.json();

    const validation = schema.safeParse(body);

    if(!validation.success)
    {
        return NextResponse.json(validation.error.errors, {status: 400});
    }

    return NextResponse.json({id:10, name: body.name, price: body.price}, {status: 201});
}

export async function PUT(request: NextRequest)
{
    const body = await request.json();

    const validation = schema.safeParse(body);

    if(!validation.success)
    {
        return NextResponse.json(validation.error.errors, {status: 400});
    }

    return NextResponse.json({id:10, name: body.name, price: body.price}, {status: 201});

}

export function DELETE(request: NextRequest)
{
    return NextResponse.json({message: 'Product deleted'}, {status: 200});
}
