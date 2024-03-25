import React, { useEffect, useState } from "react";

export default function UseEffectComponent(props) {
    const nama = "Swiper";
    const [inputValue, setInputValue] = useState("");
    const [display, setDisplay] = useState("none");

    const handleChange = (e) => {
        const newValue = e.target.value;
        if (newValue === nama) {
            alert("Swiper, jangan mencuri!");
            return;
        }
        setInputValue(newValue);
        if (newValue.length > 6) {
            setDisplay("");
        } else {
            setDisplay("none");
        }
    }

    useEffect(() => {
        console.log("Use Effect tanpa kurung siku");
    });

    useEffect(() => {
        if (nama === "Swiper") {
            alert("Halo Swiper");
        }
    }, [nama]);

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
            />
            <small style={{ display: display, color: "red" }}>Input terlalu panjang</small>
        </>
    );
}
