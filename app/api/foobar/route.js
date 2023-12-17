import { NextResponse } from "next/server";

// export async function POST() {
//     return passingObjectToServer();
// }

export async function GET(req, res) {
    console.log('Hello GET request :)')
        // res.status(200).json();
        return NextResponse.json({'message': 'Hello foobar GET request'});
}

export async function POST (req, res) {
    console.log('Hello server POST request!');
    try {
        const { key1, key2 } = await req.json();
        console.log('Yay here is the request body: key1 =', key1, ' &  key2 =', key2);
        return NextResponse.json({'message': 'Well done, server recived request object!'}, {
         status: 200,   
        })
    } catch (error) {
        return NextResponse.json(
            {error: 'Failed to get body request'},
            {status: 500}
        );
    }
}