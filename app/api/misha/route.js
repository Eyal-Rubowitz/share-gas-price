import { NextResponse } from 'next/server';

export async function GET() {
    return getData();
}


export const getData = async () => {
    const res = await fetch('https://catfact.ninja/fact');
    return NextResponse.json((await res.json()));
}