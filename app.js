import React from "react";
import ReactDOM  from "react-dom/client";
/** 
 * Header
 * -logo
 * -navbar
 * Body
 * -Search
 * -restaurantcontainer
 *    -restaurantcard
 *          -Img
 *           -Name of restaurant ,starrating,cuisineetc
 * footer
 * copyright
 * link
 * address
 * contact
 
*/
const Header = () => {
    return (
        <div className= "header" >
            <div className="logo-container">
              <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"></img>
            </div>
            <div className="nav-item">
               <ul>
                 <li>Home</li>
                 <li>About</li>
                 <li>Contact Us</li>
                 <li>Cart</li>
               </ul>
            </div>
        </div>
    )

};

const RestaurantCard= (props) => {
    console.log(props);
    return(
        <div className="res-card" style={{background:"#f0f0f0"}}>
            <img  className="res-logo" alt="logo " src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf"></img>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.4 stars</h4>
            <h4>30 minutes </h4>
        </div>
    )
};     

const Body = () => { 
    return (
        <div className="body-container">
            <div className="search"> Search</div>
            <div className="restaurant-container">
               <RestaurantCard
               resName="Meghna food"
               cuisine="Biryani North indian Asian"
               />
               <RestaurantCard resName="KFC" cuisine="Burger fast food" />
            </div>
        </div>
    );
};
const AppLayout=()=>{
   return  <div className="app">
    <Header />
    <Body />
   </div>;
   
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); 