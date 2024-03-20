import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection.jsx";
import "./assets/css/style.css";

export default function App() {
  const handleMouseEnter = () => {
    console.log('Mouse masuk');
  };

  const handleMouseOut = () => {
    console.log('Mouse keluar');
  };
  return (
    <>
      <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut}>Halaman APP</h1>
      <HeroSection />
      <Navbar nama = {"John"}/>
    </>
  )
}

