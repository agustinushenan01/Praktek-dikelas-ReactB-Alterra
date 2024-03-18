import Navbar from "./component/Navbar";

export default function App() {
  const bahasa = "indonesia";
  return (
    <>
      <h1>Halaman APP</h1>
      <div>
        herosection
      </div>
      <Navbar nama = {"John"}/>
      <button>{bahasa.toLowerCase() === "indonesia" ? "Tombol" : "Button"}</button>
    </>
  )
}

