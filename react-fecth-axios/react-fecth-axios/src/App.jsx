import { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://660fae8d356b87a55c52086e.mockapi.io/Todo');
        setData(response.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        // Handle error appropriately
      }
    };

    fetchData();
  }, []);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div>
      <h1 className='text-3xl font-medium'>Fecth data</h1>
      {data && data.map((Todo) => (
        <div key={Todo.id}>
          <img src={Todo.Avatar} alt="Avatar" />
          <p><span className='font-medium'>Name:</span> {capitalizeFirstLetter(Todo.Name)}</p>
          <p><span className='font-medium'>Todo:</span> {capitalizeFirstLetter(Todo.Todo)}</p>
          <p><span className='font-medium'>Comment:</span> {capitalizeFirstLetter(Todo.Comment)}</p> <br />
        </div>
      ))}
    </div>
  );
}

export default App;