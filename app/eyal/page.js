import { getData } from '../api/misha/route';

export default async function Eyal() {

    const data = await getData();
    const jsonData = await data.json();

    return (
        <>
            <h1>Hello Eyal</h1>
            <br/>
            <h2>{jsonData.fact}</h2>
        </>
    )
}