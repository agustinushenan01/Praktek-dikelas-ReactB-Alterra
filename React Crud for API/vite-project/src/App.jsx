import { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [editName, setEditName] = useState('');
  const [editAge, setEditAge] = useState('');
  const FecthURL = "https://660fae8d356b87a55c52086e.mockapi.io/Todo";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(FecthURL);
        setData(response.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        // Handle error appropriately
      }
    };

    fetchData();
  }, []);

  function validateName(name) {
    const regex = /^(?!\s+$)[a-zA-Z0-9]*$/;
    return regex.test(name);
  }

  function validateAge(age) {
    const regex = /^(1[0-9]{1,2}|200|[2-9][0-9]?)$/;
    return regex.test(age);
  }

  // Fungsi Tambah Data
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateAge(age) || !validateName(name)) {
      console.error('Invalid input. Check age and name.');
      return; // Stop the form submission if validation fails
    }
    try {
      const response = await axios.post(FecthURL, { Name: name, Age: age });
      setData([...data, response.data]); // Assuming the API returns the newly added item
      setName('');
      setAge('');
    } catch (error) {
      console.error('Failed to add data:', error);
    }
  };

  // Fungsi Hapus
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${FecthURL}/${id}`);
      const newData = data.filter(item => item.id !== id);
      setData(newData);
    } catch (error) {
      console.error('Failed to delete data:', error);
    }
  };

  // Fungsi edit Data
  const handleEdit = async (id) => {
    if (!validateAge(editAge) || !validateName(editName)) {
      console.error('Invalid input. Check age and name.');
      return; // Stop the form submission if validation fails
    }
    try {
      const TodoDataEdit = {
        Name: editName,
        Age: editAge
      };
      await axios.put(`${FecthURL}/${id}`, TodoDataEdit);
      // Setelah berhasil diubah, update data secara lokal
      const updatedData = data.map(item => {
        if (item.id === id) {
          return { ...item, Name: editName, Age: editAge };
        }
        return item;
      });
      setData(updatedData);
      // Reset form edit
      setEditName('');
      setEditAge('');
    } catch (error) {
      console.error('Failed to edit data:', error);
    }
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <div className='flex flex-col mx-3 my-4 bg-violet-100 shadow-lg rounded-lg w-72'>
        <form onSubmit={handleSubmit} action="post" className='flex flex-col px-2 py-2'>
          <h2 className='text-center mb-4 font-medium text-2xl'>Tambah Data</h2>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Input your name' className='border px-1 border-emerald-400 rounded-lg focus:ring focus:outline-none focus:ring-cyan-400 mb-2' />
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder='Input your age' className='border px-1 border-emerald-400 rounded-lg focus:ring focus:outline-none focus:ring-cyan-400 mb-2' />
          <button type="submit" className='bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white text-lg'>Submit</button>
        </form>
      </div>
      <h1 className='text-3xl font-medium px-3'>Fecth data</h1>
      {data.map((Todo) => (
        <div className='px-3' key={Todo.id}>
          <img className='w-32 h-32' src={Todo.Avatar} alt="Avatar" />
          <p><span className='font-medium'>Name:</span> {capitalizeFirstLetter(Todo.Name)}</p>
          <p><span className='font-medium'>Age:</span> {capitalizeFirstLetter(Todo.Age)}</p>
          <p><span className='font-medium'>Comment:</span> {capitalizeFirstLetter(Todo.Comment)}</p>
          <button onClick={() => handleDelete(Todo.id)} className='bg-red-500 hover:bg-red-600 rounded-lg px-4 text-white text-lg mb-3'>Delete</button>

          {/* Fungsi Edit Data */}
          <div className='flex flex-col px-2 py-2 w-36 bg-blue-50 rounded-lg shadow-lg'>
            <h2 className='text-center mb-4 font-medium text-2xl'>Edit Data</h2>
            <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} placeholder='Edit your name' className='border px-1 border-emerald-400 rounded-lg focus:ring focus:outline-none focus:ring-cyan-400 mb-2' />
            <input type="number" value={editAge} onChange={(e) => setEditAge(e.target.value)} placeholder='Edit your age' className='border px-1 border-emerald-400 rounded-lg focus:ring focus:outline-none focus:ring-cyan-400 mb-2' />
            <button onClick={() => handleEdit(Todo.id)} className='bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white text-lg'>Save</button>
          </div>
          <br />
        </div>
      ))}
    </>
  );
}

export default App;