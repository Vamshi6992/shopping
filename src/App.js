import React from 'react';
import { Router,createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './Header/Header';
import Footer from "./Footer/Footer";
import Home from './Pages/Home/Home';
import "./App.css";

const Layout=()=>{
    return(
        <div className='app'>
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
                path:"/",
                element:<Home/>
            },
            
        ]
    }
])

const App = () => {
  return (
    <div className='app'>
      <RouterProvider router ={router}/>
    </div>
  )
}

export default App
