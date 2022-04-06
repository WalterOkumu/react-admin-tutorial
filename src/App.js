import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home'
import LoginPage from './pages/login'
import ListPage from './pages/list'
import NewPage from './pages/new'
import SinglePage from './pages/single'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='users'>
              <Route index element={<ListPage />} />
              <Route path=':userId' element={<SinglePage />} />
              <Route path='new' element={<NewPage />} />
            </Route>
            <Route path='products'>
              <Route index element={<ListPage />} />
              <Route path=':productId' element={<SinglePage />} />
              <Route path='new' element={<NewPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
