import { useState } from 'react'
import './App.css'
import CookieManager from './CookieManager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CookieManager />
    </>
  )
}

export default App
