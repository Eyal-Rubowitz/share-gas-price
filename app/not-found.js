import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="text-center">
        <h2 className="text-3xl">
            404 Page Not Found!
        </h2>
        <p>There was a problem the page you looking for is not found.</p>
        <Link href='/'>Go Back to the main page</Link>
    </main> 
  )
}