'use client'
import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react';

const NavBar = () => {

  const {status, data: session} = useSession();

  // * three types of status are possible 
  // * 'loading','authenticated','unauthenticated'
  if(status === 'loading') return null

  return (
    <div className='flex bg-slate-200 p-5 space-x-3'>
        <Link href="/" className='mr-5'>Next.js</Link>
        <Link href="/users">Users</Link>
        {status === 'authenticated' && 
        <div>
          {session.user!.name}
          <Link href="/api/auth/signout"> SignOut </Link>
          </div>}
        {status === 'unauthenticated' && <Link href="/api/auth/signin">Login</Link>}
    </div>
  )
}

export default NavBar