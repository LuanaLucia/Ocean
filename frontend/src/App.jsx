import { Route, Routes } from "react-router-dom"
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import ReadAll from "./components/ReadAll/ReadAll"
import Create from "./components/Create/Create"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ReadAll />} />
        <Route path="/adicionar" element={<Create />} />


      </Routes>
    </div>
  )
}

export default App
