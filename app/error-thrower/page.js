'use client'

import { useState } from 'react';
const ErrorThrower = () => {
    const [clicked, setClicked] = useState(false);
    if (clicked)
        throw new Error('cool error');
    else
        return <button onClick={() => setClicked(true)}>Throw error</button>;
};

export default ErrorThrower;