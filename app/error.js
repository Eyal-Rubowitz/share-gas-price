'use client'

import { useEffect } from "react";

export default function Error({error, reset}) {

    useEffect(() => {
        console.log(error)
    }, [error]);

    return(
        <div>
            <h2>Something went wrong!</h2>
            <br/>
            <h3>Description {`${error}`}</h3>
            <button onClick={() => reset()}>Try again</button>
        </div>
    )
}