import { useState } from 'react'
import './App.css'
import AppRoutes from './Routes/AppRoutes'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AppRoutes/>
    </>
  )
}

export default App
