import './App.css';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import Dropdown from './Dropdown'; // Assuming the file name is 'Dropdown.jsx'

function App() {
  const [category, setCategory] = useState('family');
  const [excuseData, setExcuseData] = useState(null);
  const [error, setError] = useState(null);

  const handleDropdownChange = (event) => {
    setCategory(event.target.value);
  };

  const fetchData = async (category) => {
    setError(null);
    try {
      const response = await Axios.get(
        `https://excuser-three.vercel.app/v1/excuse/${category}/`
      );
      setExcuseData(response.data);
      console.log(response.data[0].category);
    } catch (err) {
      setError(err);
    }
  };

  const generateExcuse = () => {
    fetchData(category);
  };

  // Fetch data when component mounts
  useEffect(() => {
    setExcuseData(null); // Reset excuseData to null on mount
  }, []);

  return (
    <div className='App'>
      <h1>Generate an Excuse</h1>
      <Dropdown
        category={category}
        handleDropdownChange={handleDropdownChange}
      />
      <button style={{ marginTop: '1rem' }} onClick={generateExcuse}>
        Generate Excuse
      </button>
      {error ? <p>Error: {error.message}</p> : null}
      {excuseData && excuseData.length > 0 && <h2>{excuseData[0].excuse}</h2>}
    </div>
  );
}

export default App;
