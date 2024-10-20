/* eslint-disable no-unused-vars */
import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import ShowBook from './pages/ShowBook';
import Create from './pages/Create';


const App = () => {
  return (
    <Routes >
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<Create/>}/>
      <Route path='/books/details/:id' element={<ShowBook/>}/>
      <Route path='/books/edit/:id' element={<EditBook/>}/>
      <Route path='/books/delete/:id' element={<DeleteBook/>}/>
    </Routes>
  )
}

export default App
