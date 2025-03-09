import { fetchGoogleSheetsData } from 'google-sheets-mapper';
import Selector from './Selector';
import { useState } from 'react';

export default function Form({setData, setSubmitted}) {
    const [tower, setTower] = useState();
    const [usersStrata, setUsersStrata] = useState("");
  
  
    const handleInputChange = (e) => {
      const value = e.target.value;
      if (/^\d*\.?\d*$/.test(value)) { // Allow only numbers and a single decimal point
        setUsersStrata(value);
      }
    };

    const getData = async (tower) => {
        try {
          return await fetchGoogleSheetsData({
            apiKey: import.meta.env.VITE_GoogleSheetAPIKEY,
            sheetId: import.meta.env.VITE_GoogleSheetID,
            sheetsOptions: [{ id: tower }],
          });
        } catch (error) {
          console.error(error);
        }
    };
  
    const handleSubmit = () => {
        if(tower){
            getData(tower)
            .then(data => {
                setData(data)
            })
        }
      setSubmitted(true);
    };
  
  
    return (
      <div>
        <Selector tower={tower} setTower={setTower}></Selector>
  
        <input 
          type="text" 
          value={usersStrata} 
          onChange={handleInputChange} 
          placeholder="Enter text here"
        />
  
        <button 
          onClick={handleSubmit} 
          disabled={!usersStrata || !tower}
        >
          Submit
        </button>
      </div>
    );
  }
  