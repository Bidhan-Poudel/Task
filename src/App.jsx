import React from 'react'
import { Home, Offer, Product } from './pages'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './layouts';
import { DataProvider } from './context/DataContext';
import { Cart } from './pages/Cart';


const App = () => {
  return (
    <div>
      <DataProvider>
        <Router>
          <Header />
          <Routes>
            <Route key={"1"} path="/" element={<Home />} />
            <Route key={"2"} path="/product" element={<Product />} />
            <Route key={"3"} path="/offer" element={<Offer />} />
            <Route key={"4"} path="/cart" element={<Cart/>} />
          </Routes>
        </Router>
      </DataProvider>

    </div>
  )
}

export default App