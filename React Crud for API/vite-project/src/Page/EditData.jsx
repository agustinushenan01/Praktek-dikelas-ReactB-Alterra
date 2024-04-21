import { useState, useEffect } from 'react';
import axios from 'axios';

function EditData({ match }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const FecthURL = "https://660fae8d356b87a55c52086e.mockapi.io/Todo";
    const id = match.params.id;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${FecthURL}/${id}`);
                setName(response.data.Name);
                setAge(response.data.Age);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchData();
    }, [id]);

    const validateName = (name) => {
        const regex = /^(?!\s+$)[a-zA-Z0-9]*$/;
        return regex.test(name);
    }

    const validateAge = (age) => {
        const regex = /^[0-9]+$/;
        return regex.test(age);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateAge(age) || !validateName(name)) {
            console.log("Validation failed for", { name, age });
            alert('Invalid input. Check age and name.');
            return;
        }
        try {
            await axios.put(`${FecthURL}/${id}`, { Name: name, Age: age });
            alert('Data successfully updated');
        } catch (error) {
            console.error('Failed to update data:', error);
        }
    };

    return (
        <div className='flex flex-col mx-3 my-4 bg-violet-100 shadow-lg rounded-lg w-72'>
            <form onSubmit={handleSubmit} className='flex flex-col px-2 py-2'>
                <h2 className='text-center mb-4 font-medium text-2xl'>Edit Data</h2>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Edit your name' className='border px-1 border-emerald-400 rounded-lg focus:ring focus:outline-none focus:ring-cyan-400 mb-2' />
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder='Edit your age' className='border px-1 border-emerald-400 rounded-lg focus:ring focus:outline-none focus:ring-cyan-400 mb-2' />
                <button type="submit" className='bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white text-lg'>Save</button>
            </form>
        </div>
    );
}

export default EditData;
