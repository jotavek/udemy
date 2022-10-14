import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './components/Home'
import './styles/global.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { About } from './components/About'
import { Menu } from './components/Menu'
import { Posts } from './components/Post'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/posts/:id" element={<Posts/>}></Route>
        <Route path="/posts" element={<Posts/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
