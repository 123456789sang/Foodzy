import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { resList } from "../utils/mockData";
const Body = () => { 
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
   
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
         
     console.log("API Response:", json);
      const restaurants =
      json?.data?.cards
  ?.flatMap((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  ?.map((res) => res?.info)
  .filter(Boolean);

   // console.log("Extracted Restaurants:", restaurants);
    //  Remove duplicates strictly using a Map
  const uniqueRestaurants = Array.from(
    new Map(restaurants.map((res) => [res?.id, res])).values()
  );

 // console.log("Filtered Unique Restaurants:", uniqueRestaurants.map((r) => r.id));

  setlistOfRestaurants(uniqueRestaurants);
  };

  //conditional rendering 
  if(listOfRestaurants==0){
    return ;
  }
  return   (restaurant.length==0) ?< shimmer />:(
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.avgRating > 4
            );
            setlistOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {
          listOfRestaurants.map((restaurant, index) => (
            <RestaurantCard 
              key={restaurant?.id || index} // Fallback to index if id is missing
              resData={{ info: restaurant }} 
            />
          ))}
 
      </div>
    </div>
  );
};

export default Body;  

  