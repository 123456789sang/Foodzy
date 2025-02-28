import { CDN_URL } from "../utils/constant.js";

const RestaurantCard = (props) => {
    const { resData } = props;  
  //  console.log("RestaurantCard Props:", props);

    // Ensure resData and resData.info exist
    const { 
        cloudinaryImageId , 
        name , 
        cuisines, 
        avgRating , 
        costForTwo,
        sla = {} 
    } = resData?.info || {};  //  Fix: Default to empty object {}

    return (
        <div className="res-card" style={{ background: "#f0f0f0" }}>
            <img 
                className="res-logo" 
                alt="logo" 
                src={CDN_URL + cloudinaryImageId} 
            />
            <h3>{name}</h3>
            <h4>{ cuisines.join(", ") }</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.deliveryTime } minutes</h4>
        </div>
    );
};

export default RestaurantCard;
