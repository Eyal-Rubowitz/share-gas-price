import { NextResponse } from 'next/server';

export async function GET() {
    return getgData();
}

export const getData = async () => { 
    return NextResponse.json((Error("403 Forbidden Error - refuses to fulfill a request due to authorization issues")));
}