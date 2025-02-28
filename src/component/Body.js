import RestaurantCard from "./RestaurantCard.js";

const Body = () => { 

  let listOfRestaurants =[
    {
        info: {
            id: "12575",
            name: "Pizza Hut",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/5b9c53df-e0cb-48fc-ac31-f02735592edc_10575.jpg",
            locality: "Richmond Town",
            areaName: "Central Bangalore",
            costForTwo: "₹600 for two",
            cuisines: [
            "Pizzas"
            ],
            avgRating: 4.3,
            deliveryTime: 38 ,   
       },
    },

    {
        info: {
        id: "10676",
        name: "Domino",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/5b9c53df-e0cb-48fc-ac31-f02735592edc_10575.jpg",
        locality: "Richmond Town",
        areaName: "Central Bangalore",
        costForTwo: "₹600 for two",
        cuisines: [
        "Pizzas"
        ],
        avgRating: 4.6,
        deliveryTime: 38
        }
    },
   ];



    return (
        <div className="body-container">
            <div className="filter">
               <button 
                  className="filter-btn"
                  onClick={() => {
                     // filter logic here

                 listOfRestaurants =listOfRestaurants.filter( 
                   (res) => res.info.avgRating > 4
                  );
                  console.log(listOfRestaurants);
                }}
                >
                Top Rated Restaurant 
                </button>
            </div>
            <div className="restaurant-container">
              {listOfRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.info.id} resData = {restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;