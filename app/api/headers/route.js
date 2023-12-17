import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export async function GET(req) {
    console.log('Hello GET request!@#$')
    const headerList = headers(); 
    const headerKey = await headerList.get("x-custom-header");
    console.log(`Your token is ${headerKey}`)
    console.log(`Headers: ${headerList[0]}`)
    return new NextResponse(`Your token is ${headerKey}`, {
        status: 200,
        Headers: {'Set-Cookies': `token=${headerKey}-modified!`}
    });
}

export async function POST(req) {
    console.log('HELLO POST REQUeST!')
    const headerList = headers();
    const customHeader = headerList.get('x-custom-user-header');
    console.log('customHeader: ',customHeader);

    return NextResponse.json({
        message: `Callback from server with client header: "${customHeader}" has been recived!`
      }, {
        status: 200,
      })
}