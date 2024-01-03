import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import CarsPage from './pages/CarsPage'
import AvailableBrPage from './pages/AvailableBrPage'
import WorkerPage from './pages/WorkerPage'
import BranchPage from './pages/BranchPage'
import Header from './component/Header'
import AddBtn from './component/AddBtn'
import CarsEdit from './pages/edit/CarsEdit'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Header/>
      <AddBtn />
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/cars' element={<CarsPage/>}/>
        <Route path='/available-branch' element={<AvailableBrPage/>}/>
        <Route path='/user' element={<WorkerPage/>}/>
        <Route path='/branch' element={<BranchPage/>}/>
        <Route path='cars/:id' element={<CarsEdit />}/>
      </Routes>
      </BrowserRouter>
    )
  }
}

export default App