import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Header } from './layouts';
import { DataProvider } from './context/DataContext';
import { routes } from './routes';


const App = () => {
  return (
    <div>
      <DataProvider>
        <Router>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Router>
      </DataProvider>

    </div>
  )
}

export default App