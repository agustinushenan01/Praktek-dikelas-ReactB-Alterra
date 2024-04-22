import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../index.css';
import axios from 'axios';

export default function Login() {
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://6624a47b04457d4aaf9ca36d.mockapi.io/User');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
                alert('Gagal mengambil data user. Silakan coba lagi.');
            }
        };

        fetchUsers();
    }, []);

    const handleLogin = () => {
        const user = users.find(User => User.email === email && User.password === password);

        if (user) {
            localStorage.setItem('isLoggedIn', JSON.stringify(true));
            navigate(location.state?.from || '/Products');
            window.location.reload();
        } else {
            alert('Email atau password salah');
        }
    }

    return (
        <div className='w-full h-[80vh] flex justify-center items-center'>
            <div className='bg-slate-50 shadow-lg rounded-lg px-2 py-2'>
                <h3 className='text-xl sm:text-3xl text-center font-medium'>Login</h3>
                <form>
                    <input
                        className='border border-indigo-400 rounded-lg px-1 w-full focus:outline-none mb-1 mt-2 focus:ring focus:ring-violet-500'
                        type="text"
                        value={email}
                        onChange={(ev) => setEmail(ev.target.value)}
                        placeholder='Masukkan email Anda'
                    />
                    <br />
                    <input
                        className='border border-indigo-400 rounded-lg px-1 w-full focus:outline-none mb-2 mt-2 focus:ring focus:ring-violet-500'
                        type="password"
                        value={password}
                        onChange={(ev) => setPassword(ev.target.value)}
                        placeholder='Masukkan password Anda'
                    />
                    <br />
                    <button
                        onClick={handleLogin}
                        className='bg-sky-500 hover:bg-sky-600 text-white w-full rounded-lg py-0.5 font-medium'
                        type="button"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}