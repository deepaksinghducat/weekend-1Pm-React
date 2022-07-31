import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function States() {

    const [t, setT] = useState('');

    useEffect(() => {
        console.log("fdsadfsfa");
    },[t])

    return (
        <div>
            <input
                type="text"
                value={t}
                placeholder="Enter any anme"
                onChange={(event) => setT(event.target.value)} />
            <p>{t}</p>
        </div>
    )
}

export default States