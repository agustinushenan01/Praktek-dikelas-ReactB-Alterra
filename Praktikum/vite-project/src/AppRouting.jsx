import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import { useState } from 'react';
import HeaderNavigation from './components/HeaderNavigation.jsx';
import Home from './components/LandingPage';
import About from './AboutMe';
import Products from './components/CreateProduct.jsx';
import Footer from './components/Footer';
import Login from './components/Login';
import Account from './components/AccountComponent.jsx';

function Logout({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const location = useLocation();
    localStorage.setItem('isLoggedIn', false); // Set isLoggedIn to false as boolean
    setIsLoggedIn(false); // Update isLoggedIn state
    return navigate(location.state?.from || '/'); // Redirect to home after logout
}

function NotFound() {
    return <div>Page Not Found</div>;
}

export default function AppRouting() {
    const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem('isLoggedIn')) || false); // Parse JSON to boolean

    return (
        <div>
            <HeaderNavigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Routes>
                {/* Public routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
                {/* Private routes */}
                {isLoggedIn ? (
                    <>
                        <Route path="/account" element={<Account />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="" element={<Logout setIsLoggedIn={setIsLoggedIn} />} />
                    </>
                ) : (
                    <>
                        <Route path="/account" element={<Navigate to="/login" replace />} />
                        <Route path="/products" element={<Navigate to="/login" replace />} />
                        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                    </>
                )}
            </Routes>
            <Footer />
        </div>
    );
}
