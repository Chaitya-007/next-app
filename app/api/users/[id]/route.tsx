import { NextRequest, NextResponse } from 'next/server'
import schema from '../schema'

export function GET(request: NextRequest, 
    {params}: {params: {id: number}}) 
{
    // Fetch data from a db
    // If not found, return 404 error
    // Else return data


    if(params.id > 10)
    {
        return NextResponse.json({error: 'User not found'}, {status: 404});
    }

    return NextResponse.json({id: 1, name: 'Chaitya'});
}

export async function PUT(request: NextRequest,
    {params}: {params: {id: number}})
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

        if(params.id > 10)
        {
            return NextResponse.json({error: 'User not found'}, {status: 404});
        }

        return NextResponse.json({id: 1, name: body.name});
    }

    export function DELETE(request: NextRequest,
        {params}: {params: {id: number}})
        {
            // Fetch the user with given id
            // If not found, return 404 error
            // Delete the user
            // Return success message

            if(params.id > 10)
            {
                return NextResponse.json({error: 'User not found'}, {status: 404});
            }

            return NextResponse.json({message: 'User deleted successfully'});
        }