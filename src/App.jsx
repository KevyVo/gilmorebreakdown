import './App.css'
import { useState } from 'react';
import Form from './Components/Form';
import Results from './Components/Results';

function App() {
  const [data, setData] = useState({})
  const [submitted, setSubmitted] = useState(false);
  
  return (
    <div>
     <Form setData={setData} setSubmitted={setSubmitted}></Form>
     {submitted && data &&(
          <Results data={data}></Results>
        )}
    </div>
  );
};

export default App
