import React from 'react';
import styles from '../assets/css/styles.module.css';
import "../assets/css/style.css";

export default function Navbar(props) {
    const namaAnakKelas = ["muchson", "daffa", "lativa", "nabraska"];
    const bahasa = "indonesia";
    const handleInputChangeusername = (e) => {
        console.log(e.target.value);
    };
    const handleInputChangepassword = (e) => {
        console.log("Arrow = " + e.target.value);
    };

    const handleClick = (e) => {
        console.log("Tombol diklik!");
        e.target.style.backgroundColor = 'green';
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Mencegah perilaku default dari formulir
        // console.log('Formulir dikirim!'); // Mencetak pesan saat formulir dikirim
        console.log(event.target.method);
    };

    return (
        <div>
            <div>props dari appjs = {props.nama}</div>
            {props.nama === "John" ? <h1 className="lataradmin">Hai, kamu admin John.</h1> : null}
            <input
                type="text"
                placeholder='username'
                onChange={handleInputChangeusername}
            />
            <input
                type="password"
                placeholder='password'
                onChange={handleInputChangepassword}
            />
            <button
                className='button'
                onClick={handleClick}
            >
                {bahasa.toLowerCase() === "indonesia" ? "Tombol" : "Button"}
            </button>
            <form onSubmit={handleSubmit}>
                <input type="text" />
                <button type="submit">Kirim</button>
            </form>
            {/* <ul>
                {namaAnakKelas.map((nama, index) => (
                    <li className={styles.ganti} key={index}>{nama}</li>
                ))}
            </ul> */}
            {namaAnakKelas.map((nama, index) => (
                <p className={styles.ganti} key={index}>{nama}</p>
            ))}
        </div>
    );
}