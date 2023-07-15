import Link from "next/link";
import '@styles/globals.css'

export default function Home() {
    return (
        <>
            <div className="bg-red-400 flex justify-between item-center mb-4">
                <h1 className="text-2xl">Home Page</h1>
                <Link href="/about">About</Link>
            </div>
        </>
    )
}