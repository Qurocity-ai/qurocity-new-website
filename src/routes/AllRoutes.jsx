import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
function AllRoutes() {
  return (
    <div>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='*' element={<NotFound/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes