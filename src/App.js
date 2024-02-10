import './App.css';
// import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Library from './components/Library/Library';
import Home from './components/Home/Home';
import Games from './Games/Games';
import Learn from './Learn/Learn';


const router = createBrowserRouter ([
  {
    path: '/',
    element: <Header />,
    // element: <Dashboard />,
    children: [
      {
        path: '/',
        element: < Home />,
      },
      {
        path: '/library',
        element: <Library />,
      },
      {
        path: '/games',
        element: <Games />,
      },
      {
        path: '/learn',
        element: <Learn />,
      }
    ]
  },
]);

function App() {
  return (

    // <BrowserRouter>
    
      <RouterProvider router={router} />
     
      
      // </BrowserRouter>
  );
}

export default App;
