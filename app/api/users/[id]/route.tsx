import { NextRequest, NextResponse } from 'next/server'

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

        if(!body.name)
        {
            return NextResponse.json({error: 'Name is required'}, {status: 400});
        }

        if(params.id > 10)
        {
            return NextResponse.json({error: 'User not found'}, {status: 404});
        }

        return NextResponse.json({id: 1, name: body.name});
    }