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
      <h1 className='text-3xl font-medium'>Halo</h1>
      {data && data.map((Todo) => (
        <div key={Todo.id}>
          <p>Todo: {capitalizeFirstLetter(Todo.Todo)}</p>
          <p>Name: {capitalizeFirstLetter(Todo.Name)}</p> <br />
        </div>
      ))}
    </div>
  );
}

export default App;