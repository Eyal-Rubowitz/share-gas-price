import { getData } from '../api/misha/route';
import Link from "next/link";

export default async function Eyal() {

    const data = await getData();
    const jsonData = await data.json();

    return (
        <>
            <h1>Hello Eyal</h1>
            <br/>
            <h2>{jsonData.fact}</h2>
            <br/>
            <Link href="/">Back to main Page</Link>
        </>
    )
}