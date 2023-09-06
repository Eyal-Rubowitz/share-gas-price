"use client"

import { useEffect } from "react";
// import getWrongData from '../api/wrong-request/rout.js';

export default function Error({error, reset}) {
    
    // const data = await getWrongData();
    // const jsonData = await data.json();
    
    useEffect(() => {
        console.log(error)
    }, [error])

    return (
        <div>
            <h2>Somting went wrong!</h2>
            <br/>
            <h3>Error info: {error.console.error()}</h3>
            {/* <br/> */}
            {/* <h3>Error object description: {jsonData}</h3> */}
        </div>
    )
}