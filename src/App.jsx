import React from 'react'
import { Header } from './components'
import { Home, Offer, Product } from './pages'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route key={"1"} path="/" element={<Home />} />
          <Route key={"2"} path="/product" element={<Product />} />
          <Route key={"3"} path="/offer" element={<Offer />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App