import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pajes/Home';
import Catalog from './pajes/Catalog';
import Product from './pajes/Product';
import { createContext, useEffect, useState } from 'react';
import Card from './pajes/Card';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    errorElement: <h2>Oooops</h2>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/catalog',
        element: <Catalog />,
      },
      {
        path: '/products/:prodId',
        element: <Product />
      }, 
      {
        path: '/card',
        element: <Card />
      }
    ]
  },
]);

export const CardContext = createContext()

function App() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    console.log(card);
  });
  
  return (
    <div className="App">
      <CardContext.Provider value={{ card, setCard }}>
        <RouterProvider router={router} />
      </CardContext.Provider>
    </div>
  );
}

export default App;
