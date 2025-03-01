import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import useGoogleSheets from 'use-google-sheets';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { data, loading, error, refetch} = useGoogleSheets({
    apiKey: import.meta.env.VITE_GoogleSheetAPIKEY,
    sheetId: import.meta.env.VITE_GoogleSheetID,
  });

  console.log(data)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
      <div>{JSON.stringify(data)}</div>

      <button onClick={refetch}>Refetch</button>
    </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
