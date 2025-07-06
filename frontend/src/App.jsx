import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Caption from './components/Caption'
import Translation from './components/Translation'
import Contact from './components/Contact'
import French from './components/French'
import Telugu from './components/Telugu'
import Hindi from './components/Hindi'
import Marati from './components/Marati'


const App = () => {
  return (
    <div className='h-screen'>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/caption" element={<Caption />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* Default redirect to French if /translate is visited */}
        <Route path="/translate" element={<Navigate to="/translate/French" />} />

        {/* Translation Layout with nested routes */}
        <Route path="/translate" element={<Translation />}>
          <Route path="French" element={<French />} />
          <Route path="Hindi" element={<Hindi />} />
          <Route path="Marati" element={<Marati />} />
          <Route path="Telugu" element={<Telugu />} />
        </Route>
      </Routes>





    </div>
  )
}

export default App