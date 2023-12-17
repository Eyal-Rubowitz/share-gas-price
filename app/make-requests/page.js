"use client"
import { useState, useEffect} from 'react';
// import { headers } from 'next/headers'

export default function MakeRequestsPage() {
    
    const [header, setHeader] = useState('');
    useEffect(() => console.log(`I'm a side effect for rerender the page!`), [header]);
    
    const onSendRequestObject = async () => {
        const objectToSend =  {key1: 'val1', key2: 'val2'};
        const response = await fetch('../api/foobar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(objectToSend)
        })
    const tempResData = await response.json();
    setHeader(tempResData.message);
    } 

    const onSendRequestHeader = async () => {
        const res = await fetch('../api/headers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-custom-user-header': 'custom header value :)'
            }
        })

        const resData = await res.json();
        setHeader(resData.message);
    }

    return (
        <div className="inline-block">
            <h1>Hello make requests page!</h1>
            <button onClick={onSendRequestObject}>Send request with object</button>
            &nbsp;
            <button onClick={onSendRequestHeader}>Send request with headers</button>
            <h2>response header message is: {header}</h2>
        </div>
    )
}

