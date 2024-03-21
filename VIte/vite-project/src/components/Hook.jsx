import React, { useState } from 'react';

export default function Hook(props) {
    const [anakKelas, setAnakKelas] = useState(["muchson", "daffa", "lativa", "nabraska"]);
    const [username, setUsername] = useState("");
    const [showAnakKelas, setShowAnakKelas] = useState(false); // Menyimpan status apakah harus menampilkan anakKelas atau tidak

    const handleInputChangeusername = (e) => {
        setUsername(e.target.value);
    };
    const [bahasa, setBahasa] = useState("Button");

    // fungsi mengganti text di button
    const handleButtonClick = () => {
        if (bahasa === "Button") {
            setBahasa("Tombol");
        } else {
            setBahasa("Button");
        }
    };

    const [count, setCount] = useState(0); // angka count default

    const handleButtonClickcontnumber = () => {
        setCount(count + 2); // buat agar hitungan count kelipatan 2
    };

    const handleClickSubmit = () => {
        setAnakKelas([...anakKelas, username]);
        setUsername(""); // Mengosongkan input setelah ditambahkan ke dalam array
        setShowAnakKelas(true); // Menampilkan daftar anak kelas setelah tombol "Submit" ditekan
    }

    return (
        <>
            <h1>Hook</h1>
            <div>
                {username}
                <input
                    type="text"
                    onChange={handleInputChangeusername}
                />
                <button onClick={handleClickSubmit}>Submit</button>
            </div>
            {showAnakKelas && ( // Menampilkan daftar anak kelas hanya jika showAnakKelas bernilai true
                <div>
                    {anakKelas.map((nama, index) => (
                        <span key={index}>{nama} </span>
                    ))}
                </div>
            )}
            <div>
                <br />
                <button onClick={handleButtonClick}>{bahasa}</button> {/* Mengubah teks tombol menjadi "Submit" */}
                <button onClick={handleButtonClickcontnumber}>Count</button> {/* Membuat tombol count */}
                {count} {/* Menampilkan hitungan count */}
            </div>
        </>
    );
}
