import React from 'react';
import { Router,createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './Header/Header';
import Footer from "./Footer/Footer";

const Layout=()=>{
    return(
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}


const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                // path:"/",
                // element:<Home/>
            },
            
        ]
    }
])

const App = () => {
  return (
    <div>
      <RouterProvider router ={router}/>
    </div>
  )
}

export default App
