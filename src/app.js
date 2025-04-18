import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./component/Header.js";
import Body from "./component/Body.js";
import About from "./component/About.js";
import Contact from "./component/Contact.js";
import Error from "./component/Error.js";
import { createBrowserRouter , Outlet, RouterProvider,Outlet } from "react-router-dom";    

const AppLayout=()=>{
   return  <div className="app">
    <Header />
  
     <Outlet/>


   </div>;
   
};

//About section 

const appRouter = createBrowserRouter([
   {
     path:"/",
     element: <AppLayout/>,
     children:[
        {
            path:"/",
            element:<Body/>
        },
        { 
            path:"/about",
            element: <About />,
        },
        {
            
            path:"/contact",
            element: <Contact />,
        },
    ],
    errorElement:<Error/>
   },
 
]);




const root=ReactDOM.createRoot(document.getElementById("root"));
//before using router 
// root.render(<AppLayout />); 
root.render(< RouterProvider router={appRouter} />);
