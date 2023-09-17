"use client"

import { useEffect } from "react";

export default function Error({error, reset}) {
    
    useEffect(() => {
        console.log(error)
    }, [error])

    return (
        <div>
            <h2>Somting went wrong!</h2>
            <br/>
            <h3>Error info: {error.message}</h3>
        </div>
    )
}