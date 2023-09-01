import Link from 'next/link';
import React from 'react';
// import {notFound} from "next/navigation"

export default function NotFound() {
  return (
    <React.StrictMode>

    <main className="text-center">
        <h2 className="text-3xl">
            404 Page Not Found!
        </h2>
        <p>There was a problem the page you looking for is not found.</p>
        <Link href='/'>Go Back to the main page</Link>
    </main> 
    </React.StrictMode>
  )
}