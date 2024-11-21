import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center">
      <div className="flex justify-center space-x-4 my-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-24" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold">Vite + React</h1>
      <div className="my-4">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code className="bg-gray-200 p-1 rounded">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-4 text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App