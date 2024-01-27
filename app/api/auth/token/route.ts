import {getToken} from 'next-auth/jwt' //json webtoken
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest)
{
    const token = await getToken({req : request})
    return NextResponse.json(token)
}


// * this is like a passport or id-card by which client shares it's information with server
// * this is a json web token
// * when the user logs in the next auth creates an authentication session using a json web token
// {"name":"Chaitanya Asole",
// "email":"chaitanyaasole@gmail.com",
// "picture":"https://lh3.googleusercontent.com/a/ACg8ocLhzEcCzBEROX4vH9nSu3bZpNqgkq__qX6FREqA9fCsORQ=s96-c",
// "sub":"111665642510737057109",
// "iat":1706337286, //* iat for issued at
// "exp":1708929286, //* exp => by default token expires after 30 days
// "jti":"436952d8-1c39-476e-901a-363851a23a05"}