// import { NextRequest, NextResponse } from "next/server";
// import middleware from 'next-auth/middleware'

// export default middleware;

// export function middleware(request: NextRequest)
// {
//     return NextResponse.redirect(new URL("/newpage", request.url))
// }

export {default} from 'next-auth/middleware'


// This is the function for which the next js looks for
// This is how we protect our routes
export const config = 
{
    // * zer or more
    // + one or more
    // ? zero or one
    // matcher: ['/users/:id+'] // always remember that it start with '/' forward slash
    matcher: ['/dashboard/:path*']
}


