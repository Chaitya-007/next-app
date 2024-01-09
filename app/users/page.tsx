import React from 'react'
import UserTable from './UserTable';
import Link from 'next/link';
import { Suspense } from 'react';

interface Props{
  searchParams: {sortOrder: string;}
}

const UserPage = async ({searchParams: {sortOrder}} : Props) => {

  return (
   <div>
    <h1>Users</h1>
    <Link href="/users/new" className="btn">NewUserPage</Link>
    <Suspense fallback={<p>Loading about...</p>}>
    <UserTable sortOrder={sortOrder}/>
    </Suspense>
   </div>
  )
}

export default UserPage