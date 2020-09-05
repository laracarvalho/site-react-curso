import React, { useState } from 'react';
import Header from '../Header';

export default function CheckAccount() {
    const [accountValue, setAccountValue] = useState(true);
    const changeAccountValue = () => setAccountValue(!accountValue);

    const styles = { color: accountValue ? 'blue' : 'red' };

    return (
        <div className="counter">
            <Header />
            <h1 style={styles}>{accountValue ? "Tem dinheiro" : "Não tem dinheiro"}</h1>
            <button onClick={changeAccountValue}>Trocar valor</button>
        </div>
    )
}