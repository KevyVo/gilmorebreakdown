import { fetchGoogleSheetsData } from 'google-sheets-mapper';
import Selector from './Selector';
import { useEffect, useState } from 'react';

export default function Form() {
    const [data, setData] = useState({})
    const [tower, setTower] = useState();
    const [textBoxValue, setTextBoxValue] = useState("");
    const [submitted, setSubmitted] = useState(false);
  

    // useEffect(() => {
    //     const getData = async () => {
    //         try {
    //           return await fetchGoogleSheetsData({
    //             apiKey: import.meta.env.VITE_GoogleSheetAPIKEY,
    //             sheetId: import.meta.env.VITE_GoogleSheetID,
    //             sheetsOptions: [{ id: tower }], // Ensure sheetsOptions is not null
    //           });
    //         } catch (error) {
    //           console.error(error);
    //         }
    //     };

    //     if(tower){
    //         getData()
    //         .then(data => {
    //             setData(data)
    //         })
    //     }

    // }, [tower]);
  

  
    console.log("data", data);
  
    const handleInputChange = (e) => {
      const value = e.target.value;
      if (/^\d*\.?\d*$/.test(value)) { // Allow only numbers and a single decimal point
        setTextBoxValue(value);
      }
    };

    const getData = async (tower) => {
        try {
          return await fetchGoogleSheetsData({
            apiKey: import.meta.env.VITE_GoogleSheetAPIKEY,
            sheetId: import.meta.env.VITE_GoogleSheetID,
            sheetsOptions: [{ id: tower }], // Ensure sheetsOptions is not null
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
  
        <p>This is the building: {tower}</p>
  
        <input 
          type="text" 
          value={textBoxValue} 
          onChange={handleInputChange} 
          placeholder="Enter text here"
        />
        <p>TextBox Value: {textBoxValue}</p>
  
        <button 
          onClick={handleSubmit} 
          disabled={!textBoxValue || !tower}
        >
          Submit
        </button>
  
        {submitted && data &&(
          <div>
            <h2>Google Sheets Data:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    );
  }
  