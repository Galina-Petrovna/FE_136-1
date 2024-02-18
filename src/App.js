import './App.css';
// import style from "./App.module.css";

// import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Library from './components/Library/Library';
import Home from './components/Home/Home';
import Games from './Games/Games';
import Learn from './Learn/Learn';
import { createContext, useEffect, useState } from 'react';
import WriteIt from './Games/AppGames/WriteIt';
import style from "./App.module.css";



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
        path: '/games/write-it',
        element: <WriteIt />,
      },

      {
        path: '/learn',
        element: <Learn />,
      },

    ]
  },
]);

export const LibraryContext = createContext()

function App() {
  const [library, setLibrary] = useState(JSON.parse(localStorage.getItem('library')) || []);
  // const [wordIndex, setWordIndex] = useState(0)
  // const progressBarWidth = {
  //   width: `${(100 / library.slice(-10).length) * wordIndex}vw`
  // }
 
  useEffect(() => {
    console.log(library);
   })
  return (

    // <BrowserRouter>
      <div className='App'>
        

        <LibraryContext.Provider value={{ library, setLibrary}}>

      
       
          <RouterProvider router={router} />

          {/* <div className={style.progressBarContainer}>
                <div className={style.progressBar} style={progressBarWidth}></div>
            </div>
            <div onClick={() => {
                setWordIndex(wordIndex + 1)
            }} className={style.btnNext}>

            </div> */}
         
        </LibraryContext.Provider>
       
      </div>
     
      
      // </BrowserRouter>
  );
}

export default App;
