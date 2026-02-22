import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
          <span>Environment: {import.meta.env.VITE_ENV}</span>
          <span>API URL: {import.meta.env.VITE_API_URL}</span>
      </div>
        
    </>
  )
}

export default App
