import React from 'react';

export default function Navbar(props) {
    const namaAnakKelas = ["muchson", "daffa", "lativa", "nabraska"];
    
    return (
        <div>
            <div>props dari appjs = {props.nama}</div>
            {props.nama === "John" ? <h1>Hai, kamu admin John.</h1> : null}
            <ul>
                {namaAnakKelas.map((nama, index) => (
                    <li key={index}>{nama}</li>
                ))}
            </ul>
        </div>
    );
}