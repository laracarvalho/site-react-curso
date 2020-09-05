import React from 'react';

import Header from '../Header';

import './HelloWorld.css';

function HelloWorld({name = 'World', emotion = 'contente'}) {
    const emotionAlert = () => {
        alert(`Estou ${emotion} em te ver.`);
    }

    return (
        <>
        <Header />
        <div className="hello-world">
            <h1>Hello {name}!</h1>
            <button onClick={emotionAlert}>Clique aqui</button>
        </div>
        </>
    )
}


export default HelloWorld;