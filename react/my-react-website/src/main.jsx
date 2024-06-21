import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div></div>
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    
       <>
            <RouterProvider router={router} />
                <App />
        </>
       
            
        
  
    
  
)
