//import { useState } from 'react'
import './App.css'
import "./css/main.css"
import Listing from './components/Listing'
import { data } from "./data/data";
function App() {
 // const [count, setCount] = useState(0)
  const items = JSON.parse(JSON.stringify(data))
  return (
    <Listing items={items} />
  )
}

export default App
