
// import RestaurantCard from "./RestaurantCard";
// import {useState,useEffect} from "react";
// import Shimmer from "./Shimmer";

// const Body = () => {
//     const [listOfRestaurants, setlistOfRestaurants] = useState([]);
//     const [originalList,setoriginalList]=useState([]); 
//     const [searchTxt, setSearchTxt] = useState("");
//     //whenever the state varriable is updated ,react trigger a reconcilaitian cycle(re-rendered the component)
//     console.log("body -rerendered ");
  
//     useEffect(() => {
//         fetchData();
//     }, []);
//     const fetchData = async () => {
//         const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//         const json = await response.json();
//         console.log(json);
//         const restaurants = json?.data?.cards?.flatMap((card) =>
//             card?.card?.card?.gridElements?.infoWithStyle?.restaurants
//         )?.map((res) => res?.info).filter(Boolean);
//         const uniqueRestaurants = Array.from(new Map(restaurants.map((res) => [res?.id, res])).values());
//         setlistOfRestaurants(uniqueRestaurants);
//     };

//     return  (listOfRestaurants.length==0)?<Shimmer/>: ( 
//         <div className="body">
//             <div className="filter">
//                 <div className="search">
//                     <input 
//                     type="text" 
//                     className="search-box" 
//                     value={searchTxt}
//                     onChange={(e) => setSearchTxt(e.target.value)}
//                     />
//                     <button
//                     onClick={()=>{
//                         //filter the restaurant card and update the ui
//                         //searchTxt
                        
//                         console.log(searchTxt);
                        
//                        const filteredRestaurant = originalList.filter((res) => {

//                            return  res?.info?.name?.toLowerCase().includes(searchTxt.toLowerCase());
//                        });
                      
//                     console.log(filteredRestaurant);
//                        setoriginalList(filteredRestaurant);
//                     }}
//                     >
//                         Search
//                     </button>
//                 </div>
//                 <button className="filter-btn"
//                        onClick={() => {
//                         const filteredlist = listOfRestaurants.filter((res) => res.avgRating > 4);
//                         setlistOfRestaurants(filteredlist);
//                     } }>
//                     Top Rated Restaurant

//                 </button>
//             </div>
        
//           <div className="restaurant-container">
//                 {listOfRestaurants.map((restaurant, index) => (
//                     <RestaurantCard
//                         key={restaurant?.id || index} resData={{ info: restaurant }} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Body;
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [originalList, setoriginalList] = useState([]); // ✅ Fixed: Correctly initialized
    const [searchTxt, setSearchTxt] = useState("");

    //console.log(listOfRestaurants); 
 //   console.log("body -rerendered ");


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await response.json();
       // console.log(json);
  
        const restaurants = json?.data?.cards
            ?.flatMap((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            ?.map((res) => res?.info)
            .filter(Boolean);
         // extract the restaurant from huge list of api data
        const uniqueRestaurants = Array.from(new Map(restaurants.map((res) => [res?.id, res])).values());

        setlistOfRestaurants(uniqueRestaurants);
        setoriginalList(uniqueRestaurants); // ✅ Fixed: Store original data
    };

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchTxt}
                        onChange={(e) => setSearchTxt(e.target.value)}
                    />
                    <button
                    //filter the restaurants and update the ui
                    //searchTxt
                        onClick={() => {

                        //    console.log(searchTxt);

                            const filteredRestaurant = originalList.filter((res) =>
                                res?.name?.toLowerCase().includes(searchTxt.toLowerCase())
                            );

                         //   console.log(filteredRestaurant);
                            setlistOfRestaurants(filteredRestaurant); // ✅ Fixed: Updating `listOfRestaurants` instead of `originalList`
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn" 
                     
                    onClick={() => {
                        const filteredList = originalList.filter((res) => res?.avgRating > 4.5);

//console.log(filteredList);
                        setlistOfRestaurants(filteredList);
                    }}
                >
                    Top Rated Restaurant
                </button>
            </div>

            <div className="restaurant-container">
                {listOfRestaurants.map((restaurant, index) => (
                    <RestaurantCard key={restaurant?.id || index} resData={{ info: restaurant }} />
                ))}
            </div>
        </div>
    );
};

export default Body;
