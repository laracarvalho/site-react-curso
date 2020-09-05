import React, { useState, useEffect } from 'react';

import Header from '../Header';

export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = count;
    }, [count]);

    return (
        <div className="counter">
            <Header />
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
}