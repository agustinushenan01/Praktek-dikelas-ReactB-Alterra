import '../index.css';
import { useState, useEffect } from 'react';
import { Link, useLocation, Outlet, Navigate } from 'react-router-dom';

function HeaderNavigation({ isLoggedIn, setIsLoggedIn }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    }, [setIsLoggedIn]);

    const handleLogout = () => {
        localStorage.setItem('isLoggedIn', 'false');
        setIsLoggedIn(false);
        return <Navigate to="/" replace />;
    };

    return (
        <>
            <nav className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between z-50">
                        <div>
                            <h1 className="font-medium text-figmagray-900">Simple header</h1>
                        </div>
                        <div className="hidden space-x-4 sm:flex">
                            <Link to="/" className={` ${location.pathname === '/' ? 'bg-primary-500 text-white' : 'text-primary-500'} hover:text-white rounded-md items-center flex hover:bg-primary-500 px-3 py-2 text-sm font-medium`}>Home</Link>
                            <Link to="/Products" className={` ${location.pathname === '/Products' ? 'bg-primary-500 text-white' : 'text-primary-500'} hover:bg-primary-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}>Products</Link>
                            <Link to="/About" className={` ${location.pathname === '/About' ? 'bg-primary-500 text-white' : 'text-primary-500'} hover:bg-primary-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}>About</Link>
                            <Link to="/Account" className={` ${location.pathname === '/Account' ? 'bg-primary-500 text-white' : 'text-primary-500'} hover:bg-primary-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}>Account</Link>
                            {isLoggedIn ? (
                                <Link to="/" className="text-primary-500 hover:bg-primary-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={handleLogout}>Logout</Link>
                            ) : (
                                <Link to="/login" className="text-primary-500 hover:bg-primary-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Login</Link>
                            )}
                        </div>

                        <div className={`sm:hidden z-50 ${isMobileMenuOpen ? '' : 'hidden'}`} id="mobile-menu">
                            <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col absolute top-16 left-0 right-0 shadow-lg bg-white rounded-md border-y-2 border-y-figmagray-300">
                                <Link to="/" className={` ${location.pathname === '/' ? 'bg-primary-500 text-white' : 'text-primary-500'} hover:text-white rounded-md items-center hover:bg-primary-500 block px-3 py-2 text-base font-medium`}>Home</Link>
                                <Link to="/Products" className={` ${location.pathname === '/Products' ? 'bg-primary-500 text-white' : 'text-primary-500'} hover:bg-primary-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium`}>Products</Link>
                                <Link to="/About" className={` ${location.pathname === '/About' ? 'bg-primary-500 text-white' : 'text-primary-500'} hover:bg-primary-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium`}>About</Link>
                                <Link to="/Account" className={` ${location.pathname === '/Account' ? 'bg-primary-500 text-white' : 'text-primary-500'} hover:bg-primary-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium`}>Account</Link>
                                {isLoggedIn ? (
                                    <Link to="/" className="text-primary-500 hover:bg-primary-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={handleLogout}>Logout</Link>
                                ) : (
                                    <Link to="/login" className="text-primary-500 hover:bg-primary-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Login</Link>
                                )}
                            </div>
                        </div>

                        <svg id="burger-menu" className="block h-6 w-6 sm:hidden" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" onClick={toggleMobileMenu}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default HeaderNavigation;
