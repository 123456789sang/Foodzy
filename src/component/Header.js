import {useState} from "react";

const Header =()=>{

    const [btnNameReact,setbtnNameReact]=useState("login");
    return (
        <div className="header">
          <div className="logo-container">
              <img  className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s"  />
           </div>
           <div className="nav-item">
              <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Cart</li>
                  <li>Contact</li>
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