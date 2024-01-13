import { NextRequest, NextResponse } from 'next/server'
import schema from '../schema'
import { prisma } from '@/prisma/client'

export async function GET(request: NextRequest, 
    {params}: {params: {id: string}}) 
{
    // Fetch data from a db
    // If not found, return 404 error
    // Else return data

    const user = await prisma.user.findUnique(
        {
            where: {id: parseInt(params.id)},
        }
    );


    // if(params.id > 10)
    if(!user)
    {
        return NextResponse.json({error: 'User not found'}, {status: 404});
    }

    // return NextResponse.json({id: 1, name: 'Chaitya'});
    return NextResponse.json(user);
}

export async function PUT(request: NextRequest,
    {params}: {params: {id: string}})
    {
        const body = await request.json()
        // Validate the request body
        // If invalid, return 400 error
        // Fetch the user with given id
        // If not found, return 404 error
        // Update the user
        // Return the updated user

        const validation = schema.safeParse(body);

        // if(!body.name)
        if(!validation.success)
        {
            // return NextResponse.json({error: 'Name is required'}, {status: 400});
            return NextResponse.json(validation.error.errors, {status: 400});
        }

        
        const user = await prisma.user.findUnique(
            {
                where: {id: parseInt(params.id)},
            }
        );

        if(!user)
        {
            return NextResponse.json({error: 'User not found'}, {status: 404});
        }

        const updatedUser = await prisma.user.update(
            {
                where: {id: parseInt(params.id)},
                data: {
                    name: body.name,
                    email: body.email,
                }
            }
        );

        // return NextResponse.json({id: 1, name: body.name});
        return NextResponse.json(updatedUser);
    }

    export async function DELETE(request: NextRequest,
        {params}: {params: {id: string}})
        {
            // Fetch the user with given id
            // If not found, return 404 error
            // Delete the user
            // Return success message

            const user = await prisma.user.findUnique(
                {
                    where: {id: parseInt(params.id)},
                }
            );

            // if(params.id > 10)
            if(!user)
            {
                return NextResponse.json({error: 'User not found'}, {status: 404});
            }

            await prisma.user.delete(
                {
                    where: {id: parseInt(params.id)},
                }
            );

            // return NextResponse.json({message: 'User deleted successfully'});
            return NextResponse.json({});
        }