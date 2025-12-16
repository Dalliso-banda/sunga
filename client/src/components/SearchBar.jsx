import { InputGroup, FormControl, Button } from 'react-bootstrap';
import {useState,useEffect} from 'react';
import RegisterButton from '../components/RegisterClientButton.jsx';
import axios from 'axios';

 export default function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const API_URL = '/api/client/getclients';
useEffect(() => {
    if (searchTerm.length === 0) {
        setResults([]);
        return;
    }

    const fetchResults = async () => {
        try {
            const response = await axios.get(`${API_URL}`);
            console.log(response.data);
           let isAvalible = response.data.filter(client => 
               client.client_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
               client.client_number.toLowerCase().includes(searchTerm.toLowerCase())
           );
           if(!isAvalible){
               setResults([]);
               return;
           }
            setResults(isAvalible);
             // Adjust based on your API response structure
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    fetchResults();
}, [searchTerm]);
  

  const handleSearch = () => {
      console.log(results)
  };

  return (
    <>
<div  className='d-flex align-items-center g-3' >
        <InputGroup className="m-3 w-75">
      <FormControl
        placeholder="Search..."
        aria-label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="outline-secondary" onClick={handleSearch}>
        Search
      </Button>
    </InputGroup><RegisterButton/>

</div>
    
    {results.length > 0?(
        <div className="m-3 w-75 h-25 overflow-auto border p-2  " style={{maxHeight:'25vh'}}>
            <h5>Search Results:</h5>
            <ul>
                {results.map((result, index) => (
                    <li className='nav-link hover-shadow fw-bold pointer-cursor' key={index}>{result.client_name}  NRC:{result.client_nrc.replaceAll('-','/')}</li> 
                ))}

            </ul>
        </div>
    ):null
        
    }
        </>
  );
}
