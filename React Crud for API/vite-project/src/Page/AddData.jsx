import { useEffect } from 'react';
import axios from 'axios';
import '../index.css'

function AddData() {
    // const [name, setName] = useState('');
    // const [age, setAge] = useState('');
    const FecthURL = "https://660fae8d356b87a55c52086e.mockapi.io/Todo";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(FecthURL);
                setData(response.data);
            } catch (error) {
                console.error('Failed to fetch data:', error);
                // Handle error appropriately
            } finally {
                setIsLoading(false); // Set isLoading to false after fetching data
            }
        };

        fetchData();
    }, []);

    return (
        <div className='flex flex-col mx-3 my-4 bg-violet-100 shadow-lg rounded-lg w-72'>
            {/* <form onSubmit={handleSubmit} action="post" className='flex flex-col px-2 py-2'> */}
            <form action="post" className='flex flex-col px-2 py-2'>
                <h2 className='text-center mb-4 font-medium text-2xl'>Tambah Data</h2>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Masukkan nama Anda' className='border px-1 border-emerald-400 rounded-lg focus:ring focus:outline-none focus:ring-cyan-400 mb-2' />
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder='Masukkan umur Anda' className='border px-1 border-emerald-400 rounded-lg focus:ring focus:outline-none focus:ring-cyan-400 mb-2' />
                <button type="submit" className='bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white text-lg'>Submit</button>
            </form>
        </div>
    );
}

export default AddData;
