'use client'

import { useState } from 'react';
const ErrorThrower = () => {
    const [clicked, setClicked] = useState(false);
    return clicked ? <div>{JSON.parse('{this throws an error')}</div> : <button onClick={() => setClicked(true)}>Throw error</button>;
};

export default ErrorThrower;