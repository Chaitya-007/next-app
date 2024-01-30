// Deleted content from product.tsx of api/products

// import { NextRequest, NextResponse } from "next/server";
// import schema from "./schema";
// import prisma from "@/prisma/client";

// export async function GET(request: NextRequest) {
//   const products = await prisma.products.findMany();
//   // On LHS this is just the name you can choose anyname you want On RHS this is the same name as of the table that you will be able to see in MySQL
//   return NextResponse.json(products);

//   // return NextResponse.json([
//   //   { id: 1, name: "milk", price: 2.5 },
//   //   { id: 2, name: "bread", price: 3.5 },
//   // ]);
// }

// export async function POST(request: NextRequest) {
//   const body = await request.json();

//   const validation = schema.safeParse(body);

//   if (!validation.success) {
//     return NextResponse.json(validation.error.errors, { status: 400 });
//   }

//   const newProducts = await prisma.products.create({
//     data:{
//       name: body.name,
//       price: body.price
//     }
//   })

//   // return NextResponse.json(
//   //   { id: 10, name: body.name, price: body.price },
//   //   { status: 201 }
//   // );
//   return NextResponse.json(
//     newProducts,
//     { status: 201 }
//   );
// }

// export async function PUT(request: NextRequest) {
//   const body = await request.json();

//   const validation = schema.safeParse(body);

//   if (!validation.success) {
//     return NextResponse.json(validation.error.errors, { status: 400 });
//   }

//   return NextResponse.json(
//     { id: 10, name: body.name, price: body.price },
//     { status: 201 }
//   );
// }

// export function DELETE(request: NextRequest) {
//   return NextResponse.json({ message: "Product deleted" }, { status: 200 });
// }
