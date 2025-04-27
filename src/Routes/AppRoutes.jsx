import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RoutesData } from '../Data/Data'

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        {RoutesData.map((route)=>(
            <Route path={route[0]} element={route[1]} />
        ))}
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes