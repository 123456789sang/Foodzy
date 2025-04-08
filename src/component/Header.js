
import {LOGO_URL} from "../utils/constant.js";
import {useState, } from "react";
import { Link } from "react-router-dom";    
const Header =()=>{
   // console.log("header-render");
    const [btnNameReact,setbtnNameReact]=useState("login");
     // case 1 If there is no dependency array +> uaeEfect is called on every render 
     // case 2 If there is an empty dependency array[] => useEffect is not called at all or it call initial render (just once )
     // case 3 If there is a dependency array []> useEffect is called only when the dependency array value changes
    // useEffect(()=>{
    //     console.log("useEffect-called");
    // },[]);

    return (
        <div className="header">
          <div className="logo-container">
              <img  className="logo" src={LOGO_URL }/>
           </div>
           <div className="nav-item">
              <ul>
                  <li>
                  <Link to="/">  Home</Link></li>

                  <li>
                    <Link to="/about">About</Link>
                  </li>

                  <li>
                    <Link to="/contact">Contact</Link></li>
                  <li>Cart </li>

                  <button className="login"
                  onClick={() =>{
                  btnNameReact==="login"? setbtnNameReact("logout"):
                  setbtnNameReact("login"); 
                  }}
              
                  >{btnNameReact}</button>
              </ul>
              
           </div>
        </div>
    );
   
}
export default Header;