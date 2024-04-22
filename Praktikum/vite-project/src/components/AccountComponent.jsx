import '../index.css';
import { useState } from 'react';
import axios from 'axios'; // Tambahkan import axios

export default function AccountComponent() {
    const ListUserUrl = "https://6624a47b04457d4aaf9ca36d.mockapi.io/User"
    const [confirmPassword, setConfirmPassword] = useState();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleTogglePassword = () => {
        setShowPassword(prevState => !prevState);
    };

    const handleToggleConfirmPassword = () => {
        setShowConfirmPassword(prevState => !prevState);
    };

    const handleSubmit = async (e) => { // Tambahkan async pada handleSubmit
        e.preventDefault();
        if (formData.password !== confirmPassword) {
            alert("Password and Confirm Password must match!");
        } else {
            try {
                const userData = { // Buat objek userData untuk menyimpan data pengguna
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    password: formData.password
                };

                const response = await axios.post(ListUserUrl, userData); // Kirim data pengguna ke backend untuk disimpan
                console.log('Data yang akan dikirim:', userData);
                console.log('Response dari server:', response.data);
                // Di sini Anda dapat menambahkan logika untuk mengirim data ke backend melalui API
                // Setelah itu, Anda dapat mengarahkan pengguna ke halaman profil

                // Reset input type checkbox setelah berhasil mengirim data
                setShowPassword(false);
                setShowConfirmPassword(false);
            } catch (error) {
                console.error('Gagal mengirim data:', error);
            }
            
            setConfirmPassword('');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            });
        }
    };

    return (
        <>
            <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full flex px-2 sm:px-10 py-4 sm:py-10'>
                <div className='bg-white px-1 py-2 sm:py-6 rounded-lg shadow-lg w-11/12 h-auto  sm:w-11/12 lg:w-4/5 mx-auto'>
                    <h1 className='text-center font-open-sans font-medium text-lg sm:text-2xl'>Account</h1>
                    <form className="flex flex-col gap-px" onSubmit={handleSubmit}>
                        <div className='flex flex-col sm:flex-row mb-1'>
                            <div className='flex flex-col sm:w-1/2'>
                                <label htmlFor="firstName" className="after:content-['*'] after:text-pink-600">First name</label>
                                <input type="text" required name="firstName" value={formData.firstName} onChange={handleChange} className='border border-indigo-400 rounded-lg px-1 w-full focus:outline-none mb-1 mt-2 focus:ring focus:ring-violet-500' />
                            </div>
                            <div className='flex flex-col sm:w-1/2'>
                                <label htmlFor="lastName" className="after:content-['(Optional)'] after:text-zinc-600 after:text-xs">Last name</label>
                                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className='border border-indigo-400 rounded-lg px-1 w-full focus:outline-none mb-1 mt-2 focus:ring focus:ring-violet-500' />
                            </div>
                        </div>
                        <div className='flex flex-col mb-1'>
                            <label htmlFor="email" className="after:content-['*'] after:text-pink-600">Email</label>
                            <input type="email" required name="email" value={formData.email} onChange={handleChange} className='border border-indigo-400 rounded-lg px-1 w-full focus:outline-none mb-1 mt-2 focus:ring focus:ring-violet-500' />
                        </div>
                        <div className='flex flex-col mb-1'>
                            <label htmlFor="password" className="after:content-['*'] after:text-pink-600">Password</label>
                            <div>
                                <input type={showPassword ? "text" : "password"} required name="password" value={formData.password} onChange={handleChange} className='border border-indigo-400 rounded-lg px-1 w-full focus:outline-none mb-1 mt-2 focus:ring focus:ring-violet-500' />
                                <input className='absolute w-4 h-4 -ml-7 mt-3 rounded-full' type="checkbox" checked={showPassword} onChange={handleTogglePassword} />
                            </div>
                        </div>
                        <div className='flex flex-col mb-1'>
                            <label htmlFor="confirmPassword" className="after:content-['*'] after:text-pink-600">Confirm password</label>
                            <div>
                                <input type={showConfirmPassword ? "text" : "password"} required name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='border border-indigo-400 rounded-lg px-1 w-full focus:outline-none mb-1 mt-2 focus:ring focus:ring-violet-500' />
                                <input className='absolute w-4 h-4 -ml-7 mt-3 rounded-full' type="checkbox" checked={showConfirmPassword} onChange={handleToggleConfirmPassword} />
                            </div>
                        </div>
                        <button type="submit" className='bg-violet-600 text-white hover:bg-violet-700 py-1 rounded-full font-medium'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}