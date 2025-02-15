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
   const {resData} = props;  //destructuring properties
  const{cloudinaryImageId, 
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime 
  } = resData?.info;
    return(
        <div className="res-card" style={{background:"#f0f0f0"}}>
            <img  className="res-logo" alt="logo "
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
               cloudinaryImageId }        
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo }</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
};     
const resList=  [
    {
    info: {
    id: "10575",
    name: "Pizza Hut",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/5b9c53df-e0cb-48fc-ac31-f02735592edc_10575.jpg",
    locality: "Richmond Town",
    areaName: "Central Bangalore",
    costForTwo: "₹600 for two",
    cuisines: [
    "Pizzas"
    ],
    avgRating: 4.3,
    parentId: "721",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
    deliveryTime: 38,
    lastMileTravel: 2.7,
    serviceability: "SERVICEABLE",
    slaString: "35-40 mins",
    lastMileTravelString: "2.7 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-02-15 03:00:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "50% OFF",
    subHeader: "UPTO ₹100"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "4.1",
    ratingCount: "1.8K+"
    },
    source: "GOOGLE",
    sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-fe9b81f7-6209-4b0a-9363-f99c29325fe3"
    },
    cta: {
    link: "https://www.swiggy.com/city/bangalore/pizza-hut-richmond-town-central-bangalore-rest10575",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "5938",
    name: "Burger King",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5938.JPG",
    locality: "Tasker Town",
    areaName: "Shivaji Nagar",
    costForTwo: "₹350 for two",
    cuisines: [
    "Burgers",
    "American"
    ],
    avgRating: 4.4,
    parentId: "166",
    avgRatingString: "4.4",
    totalRatingsString: "38K+",
    sla: {
    deliveryTime: 45,
    lastMileTravel: 2.7,
    serviceability: "SERVICEABLE",
    slaString: "40-45 mins",
    lastMileTravelString: "2.7 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-02-15 03:00:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "Rxawards/_CATEGORY-Burger.png",
    description: "Delivery!"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: {
    badgeObject: [
    {
    attributes: {
    description: "Delivery!",
    imageId: "Rxawards/_CATEGORY-Burger.png"
    }
    }
    ]
    },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "60% OFF",
    subHeader: "UPTO ₹120"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-fe9b81f7-6209-4b0a-9363-f99c29325fe3"
    },
    cta: {
    link: "https://www.swiggy.com/city/bangalore/burger-king-tasker-town-shivaji-nagar-rest5938",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "69274",
    name: "Chai Point",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/22/5ee468dd-aeb5-4779-84e8-be4f9fcdb5db_69274.jpg",
    locality: "Ashok Nagar",
    areaName: "Ashok Nagar",
    costForTwo: "₹150 for two",
    cuisines: [
    "Bakery",
    "Beverages",
    "Maharashtrian",
    "Snacks",
    "Street Food",
    "South Indian",
    "Punjabi",
    "Chaat",
    "Indian",
    "American"
    ],
    avgRating: 4.5,
    parentId: "1607",
    avgRatingString: "4.5",
    totalRatingsString: "9.7K+",
    sla: {
    deliveryTime: 43,
    lastMileTravel: 1.8,
    serviceability: "SERVICEABLE",
    slaString: "40-45 mins",
    lastMileTravelString: "1.8 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-02-14 23:00:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
    description: "Delivery!"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: {
    badgeObject: [
    {
    attributes: {
    description: "Delivery!",
    imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
    }
    }
    ]
    },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "50% OFF",
    subHeader: "UPTO ₹100"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "4.1",
    ratingCount: "1.5K+"
    },
    source: "GOOGLE",
    sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-fe9b81f7-6209-4b0a-9363-f99c29325fe3"
    },
    cta: {
    link: "https://www.swiggy.com/city/bangalore/chai-point-ashok-nagar-rest69274",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "396750",
    name: "The Biryani Life",
    cloudinaryImageId: "wvjsuvqrd6ahqqyhmnrt",
    locality: "Residency Road",
    areaName: "Central Bangalore",
    costForTwo: "₹250 for two",
    cuisines: [
    "Biryani",
    "Mughlai",
    "Lucknowi",
    "Hyderabadi",
    "Kebabs",
    "Desserts",
    "Beverages"
    ],
    avgRating: 3.9,
    parentId: "8496",
    avgRatingString: "3.9",
    totalRatingsString: "416",
    sla: {
    deliveryTime: 43,
    lastMileTravel: 2.2,
    serviceability: "SERVICEABLE",
    slaString: "40-45 mins",
    lastMileTravelString: "2.2 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-02-14 23:59:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "ITEMS",
    subHeader: "AT ₹49"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-fe9b81f7-6209-4b0a-9363-f99c29325fe3"
    },
    cta: {
    link: "https://www.swiggy.com/city/bangalore/the-biryani-life-residency-road-central-bangalore-rest396750",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "29673",
    name: "Natural Ice Cream",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/8/ebea52ad-d68c-4387-9548-550081bba290_29673.JPG",
    locality: "St. Marks Road",
    areaName: "Central Bangalore",
    costForTwo: "₹150 for two",
    cuisines: [
    "Ice Cream",
    "Desserts"
    ],
    avgRating: 4.7,
    parentId: "2093",
    avgRatingString: "4.7",
    totalRatingsString: "11K+",
    sla: {
    deliveryTime: 39,
    lastMileTravel: 0.8,
    serviceability: "SERVICEABLE",
    slaString: "35-40 mins",
    lastMileTravelString: "0.8 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-02-15 00:00:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "Rxawards/_CATEGORY-Ice-creams.png",
    description: "Delivery!"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: {
    badgeObject: [
    {
    attributes: {
    description: "Delivery!",
    imageId: "Rxawards/_CATEGORY-Ice-creams.png"
    }
    }
    ]
    },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "20% OFF",
    subHeader: "UPTO ₹50"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "4.4",
    ratingCount: "1.1K+"
    },
    source: "GOOGLE",
    sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-fe9b81f7-6209-4b0a-9363-f99c29325fe3"
    },
    cta: {
    link: "https://www.swiggy.com/city/bangalore/natural-ice-cream-st-marks-road-central-bangalore-rest29673",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "566497",
    name: "Faasos' Signature Wraps & Rolls",
    cloudinaryImageId: "c583ca6ce40b426797a78ae2ac91f2ec",
    locality: "Residency Road",
    areaName: "Central Bangalore",
    costForTwo: "₹350 for two",
    cuisines: [
    "Fast Food",
    "Snacks",
    "North Indian",
    "Desserts",
    "Beverages"
    ],
    avgRating: 4.1,
    parentId: "340366",
    avgRatingString: "4.1",
    totalRatingsString: "51",
    sla: {
    deliveryTime: 48,
    lastMileTravel: 2.2,
    serviceability: "SERVICEABLE",
    slaString: "45-50 mins",
    lastMileTravelString: "2.2 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-02-14 23:59:00",
    opened: true
    },
    badges: {
    textExtendedBadges: [
    {
    iconId: "guiltfree/GF_Logo_android_3x",
    shortDescription: "options available",
    fontColor: "#7E808C"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: {
    badgeObject: [
    {
    attributes: {
    description: "",
    fontColor: "#7E808C",
    iconId: "guiltfree/GF_Logo_android_3x",
    shortDescription: "options available"
    }
    }
    ]
    }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "ITEMS",
    subHeader: "AT ₹63",
    discountCalloutInfo: {
    message: "Free Delivery",
    logoCtx: {
    logo: "v1655895371/free_delivery_logo_hqipbo.png"
    }
    }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-fe9b81f7-6209-4b0a-9363-f99c29325fe3"
    },
    cta: {
    link: "https://www.swiggy.com/city/bangalore/faasos-signature-wraps-and-rolls-residency-road-central-bangalore-rest566497",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "43836",
    name: "McDonald's",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg",
    locality: "MG Road",
    areaName: "Ashok Nagar",
    costForTwo: "₹400 for two",
    cuisines: [
    "Burgers",
    "Beverages",
    "Cafe",
    "Desserts"
    ],
    avgRating: 4.4,
    parentId: "630",
    avgRatingString: "4.4",
    totalRatingsString: "25K+",
    sla: {
    deliveryTime: 37,
    lastMileTravel: 1.3,
    serviceability: "SERVICEABLE",
    slaString: "35-40 mins",
    lastMileTravelString: "1.3 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-02-15 02:45:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "Rxawards/_CATEGORY-Burger.png",
    description: "Delivery!"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: {
    badgeObject: [
    {
    attributes: {
    description: "Delivery!",
    imageId: "Rxawards/_CATEGORY-Burger.png"
    }
    }
    ]
    },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "20% OFF",
    subHeader: "UPTO ₹50"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-fe9b81f7-6209-4b0a-9363-f99c29325fe3"
    },
    cta: {
    link: "https://www.swiggy.com/city/bangalore/mcdonalds-mg-road-ashok-nagar-rest43836",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "23847",
    name: "Domino's Pizza",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/7/c4e84cd7-081c-4ead-acfb-1794a932b80d_23847.JPG",
    locality: "MG Road",
    areaName: "Brigade Road",
    costForTwo: "₹400 for two",
    cuisines: [
    "Pizzas",
    "Italian",
    "Pastas",
    "Desserts"
    ],
    avgRating: 4.4,
    parentId: "2456",
    avgRatingString: "4.4",
    totalRatingsString: "5.9K+",
    sla: {
    deliveryTime: 25,
    lastMileTravel: 2.4,
    serviceability: "SERVICEABLE",
    slaString: "20-25 mins",
    lastMileTravelString: "2.4 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-02-14 22:59:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "Rxawards/_CATEGORY-Pizza.png",
    description: "Delivery!"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: {
    badgeObject: [
    {
    attributes: {
    description: "Delivery!",
    imageId: "Rxawards/_CATEGORY-Pizza.png"
    }
    }
    ]
    },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "ITEMS",
    subHeader: "AT ₹89"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "4.0",
    ratingCount: "4.9K+"
    },
    source: "GOOGLE",
    sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-fe9b81f7-6209-4b0a-9363-f99c29325fe3"
    },
    cta: {
    link: "https://www.swiggy.com/city/bangalore/dominos-pizza-mg-road-brigade-road-rest23847",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "570511",
    name: "Bakingo",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/6/cc788590-0b0c-4422-afb2-104986968047_570511.jpg",
    locality: "Puhlong X-road",
    areaName: "Vasanth Nagar",
    costForTwo: "₹299 for two",
    cuisines: [
    "Bakery",
    "Desserts",
    "Beverages",
    "Snacks"
    ],
    avgRating: 4.6,
    parentId: "3818",
    avgRatingString: "4.6",
    totalRatingsString: "4.0K+",
    sla: {
    deliveryTime: 36,
    lastMileTravel: 3.6,
    serviceability: "SERVICEABLE",
    slaString: "35-40 mins",
    lastMileTravelString: "3.6 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-02-15 01:00:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "ITEMS",
    subHeader: "AT ₹89"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-fe9b81f7-6209-4b0a-9363-f99c29325fe3"
    },
    cta: {
    link: "https://www.swiggy.com/city/bangalore/bakingo-puhlong-x-road-vasanth-nagar-rest570511",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "51835",
    name: "Aubree",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/8/2c329e01-b5b9-4909-ba47-87e146df02da_51835.jpg",
    locality: "Shivaji Nagar",
    areaName: "Shivaji Nagar",
    costForTwo: "₹700 for two",
    cuisines: [
    "Desserts",
    "Bakery"
    ],
    avgRating: 4.7,
    parentId: "3807",
    avgRatingString: "4.7",
    totalRatingsString: "2.0K+",
    sla: {
    deliveryTime: 43,
    lastMileTravel: 2.8,
    serviceability: "SERVICEABLE",
    slaString: "40-45 mins",
    lastMileTravelString: "2.8 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-02-14 21:00:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "newg.png",
    description: "Gourmet"
    }
    ]
    },
    isOpen: true,
    type: "D",
    badgesV2: {
    entityBadges: {
    imageBased: {
    badgeObject: [
    {
    attributes: {
    description: "Gourmet",
    imageId: "newg.png"
    }
    }
    ]
    },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "50% OFF",
    subHeader: "UPTO ₹100"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "4.7",
    ratingCount: "838"
    },
    source: "GOOGLE",
    sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-fe9b81f7-6209-4b0a-9363-f99c29325fe3"
    },
    cta: {
    link: "https://www.swiggy.com/city/bangalore/aubree-shivaji-nagar-rest51835",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "426730",
    name: "Theobroma",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/12/b07377e8-096b-4310-84af-976838c5973f_426730.jpg",
    locality: "Lavelle Road",
    areaName: "Ashok Nagar",
    costForTwo: "₹400 for two",
    cuisines: [
    "Desserts",
    "Bakery",
    "Beverages"
    ],
    avgRating: 4.7,
    parentId: "1040",
    avgRatingString: "4.7",
    totalRatingsString: "5.3K+",
    sla: {
    deliveryTime: 32,
    lastMileTravel: 0.3,
    serviceability: "SERVICEABLE",
    slaString: "30-35 mins",
    lastMileTravelString: "0.3 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-02-14 23:00:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "Rxawards/_CATEGORY-Desserts.png",
    description: "Delivery!"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: {
    badgeObject: [
    {
    attributes: {
    description: "Delivery!",
    imageId: "Rxawards/_CATEGORY-Desserts.png"
    }
    }
    ]
    },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "ITEMS",
    subHeader: "AT ₹39"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "4.1",
    ratingCount: "427"
    },
    source: "GOOGLE",
    sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-fe9b81f7-6209-4b0a-9363-f99c29325fe3"
    },
    cta: {
    link: "https://www.swiggy.com/city/bangalore/theobroma-lavelle-road-ashok-nagar-rest426730",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "17376",
    name: "Glen's Bakehouse",
    cloudinaryImageId: "m6jahioyu7zrodei5pcq",
    locality: "Lavelle Road",
    areaName: "Ashok Nagar",
    costForTwo: "₹500 for two",
    cuisines: [
    "Desserts",
    "Bakery",
    "Beverages",
    "Continental",
    "Italian"
    ],
    avgRating: 4.7,
    parentId: "3220",
    avgRatingString: "4.7",
    totalRatingsString: "25K+",
    sla: {
    deliveryTime: 35,
    lastMileTravel: 0.4,
    serviceability: "SERVICEABLE",
    slaString: "30-35 mins",
    lastMileTravelString: "0.4 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-02-14 23:59:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    aggregatedDiscountInfoV2: { },
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "4.4",
    ratingCount: "10K+"
    },
    source: "GOOGLE",
    sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-fe9b81f7-6209-4b0a-9363-f99c29325fe3"
    },
    cta: {
    link: "https://www.swiggy.com/city/bangalore/glens-bakehouse-lavelle-road-ashok-nagar-rest17376",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "622202",
    name: "MOJO Pizza - 2X Toppings",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/12/e7ccd786-be92-4743-8e0c-f3d3a577d48f_622202.jpg",
    locality: "Langford Road",
    areaName: "Central Bangalore",
    costForTwo: "₹250 for two",
    cuisines: [
    "Pizzas",
    "Italian",
    "Fast Food",
    "Desserts"
    ],
    avgRating: 4.6,
    parentId: "11329",
    avgRatingString: "4.6",
    totalRatingsString: "634",
    sla: {
    deliveryTime: 25,
    lastMileTravel: 2.6,
    serviceability: "SERVICEABLE",
    slaString: "20-30 mins",
    lastMileTravelString: "2.6 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-02-15 02:00:00",
    opened: true
    },
    badges: {
    textExtendedBadges: [
    {
    iconId: "guiltfree/GF_Logo_android_3x",
    shortDescription: "options available",
    fontColor: "#7E808C"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: {
    badgeObject: [
    {
    attributes: {
    description: "",
    fontColor: "#7E808C",
    iconId: "guiltfree/GF_Logo_android_3x",
    shortDescription: "options available"
    }
    }
    ]
    }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "ITEMS",
    subHeader: "AT ₹159"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-fe9b81f7-6209-4b0a-9363-f99c29325fe3"
    },
    cta: {
    link: "https://www.swiggy.com/city/bangalore/mojo-pizza-2x-toppings-langford-road-central-bangalore-rest622202",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "643832",
    name: "WeFit - Protein Bowls, Salads & Sandwiches",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/3/c64e7364-7909-417f-a850-ea89f41c318e_643832.jpg",
    locality: "Langford Road",
    areaName: "Central Bangalore",
    costForTwo: "₹250 for two",
    cuisines: [
    "Healthy Food",
    "Salads",
    "Keto",
    "Snacks"
    ],
    avgRating: 4.7,
    parentId: "355285",
    avgRatingString: "4.7",
    totalRatingsString: "649",
    sla: {
    deliveryTime: 25,
    lastMileTravel: 2.6,
    serviceability: "SERVICEABLE",
    slaString: "20-30 mins",
    lastMileTravelString: "2.6 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-02-15 02:00:00",
    opened: true
    },
    badges: {
    textExtendedBadges: [
    {
    iconId: "guiltfree/GF_Logo_android_3x",
    shortDescription: "brand",
    fontColor: "#7E808C"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: {
    badgeObject: [
    {
    attributes: {
    description: "",
    fontColor: "#7E808C",
    iconId: "guiltfree/GF_Logo_android_3x",
    shortDescription: "brand"
    }
    }
    ]
    }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "ITEMS",
    subHeader: "AT ₹179"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-fe9b81f7-6209-4b0a-9363-f99c29325fe3"
    },
    cta: {
    link: "https://www.swiggy.com/city/bangalore/wefit-protein-bowls-salads-and-sandwiches-langford-road-central-bangalore-rest643832",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "681612",
    name: "LeanCrust Pizza- ThinCrust Experts",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/14414940-565f-4b31-8880-eb44478a5ec0_681612.jpg",
    locality: "Lakshmi Road",
    areaName: "Central Bangalore",
    costForTwo: "₹300 for two",
    cuisines: [
    "Pizzas",
    "Italian",
    "Desserts"
    ],
    avgRating: 4.6,
    parentId: "11216",
    avgRatingString: "4.6",
    totalRatingsString: "387",
    sla: {
    deliveryTime: 25,
    lastMileTravel: 2.6,
    serviceability: "SERVICEABLE",
    slaString: "20-30 mins",
    lastMileTravelString: "2.6 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-02-15 02:00:00",
    opened: true
    },
    badges: {
    textExtendedBadges: [
    {
    iconId: "guiltfree/GF_Logo_android_3x",
    shortDescription: "options available",
    fontColor: "#7E808C"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: {
    badgeObject: [
    {
    attributes: {
    description: "",
    fontColor: "#7E808C",
    iconId: "guiltfree/GF_Logo_android_3x",
    shortDescription: "options available"
    }
    }
    ]
    }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "ITEMS",
    subHeader: "AT ₹159"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-fe9b81f7-6209-4b0a-9363-f99c29325fe3"
    },
    cta: {
    link: "https://www.swiggy.com/city/bangalore/leancrust-pizza-thincrust-experts-lakshmi-road-central-bangalore-rest681612",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "31422",
    name: "SodaBottleOpenerWala",
    cloudinaryImageId: "495277686a0f29763fad4e916642b1eb",
    locality: "Lavelle Road",
    areaName: "Lavelle Road",
    costForTwo: "₹500 for two",
    cuisines: [
    "Parsi",
    "Indian"
    ],
    avgRating: 4.5,
    parentId: "877",
    avgRatingString: "4.5",
    totalRatingsString: "2.0K+",
    sla: {
    deliveryTime: 34,
    lastMileTravel: 0.5,
    serviceability: "SERVICEABLE",
    slaString: "30-35 mins",
    lastMileTravelString: "0.5 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-02-14 23:00:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "bolt/Bolt%20Listing%20badge@3x.png",
    description: "bolt!"
    },
    {
    imageId: "newg.png",
    description: "Gourmet"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: {
    badgeObject: [
    {
    attributes: {
    description: "bolt!",
    imageId: "bolt/Bolt%20Listing%20badge@3x.png"
    }
    },
    {
    attributes: {
    description: "Gourmet",
    imageId: "newg.png"
    }
    }
    ]
    },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "ITEMS",
    subHeader: "AT ₹99"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "4.2",
    ratingCount: "6.0K+"
    },
    source: "GOOGLE",
    sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-fe9b81f7-6209-4b0a-9363-f99c29325fe3"
    },
    cta: {
    link: "https://www.swiggy.com/city/bangalore/sodabottleopenerwala-lavelle-road-rest31422",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "681363",
    name: "GLOBO Ice Creams Of The World",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/28/04968076-c09c-464e-90e2-e0dd29ea1dfa_681363.JPG",
    locality: "Lakshmi Road",
    areaName: "Central Bangalore",
    costForTwo: "₹150 for two",
    cuisines: [
    "Ice Cream",
    "Desserts",
    "Bakery"
    ],
    avgRating: 4.5,
    parentId: "22303",
    avgRatingString: "4.5",
    totalRatingsString: "52",
    sla: {
    deliveryTime: 15,
    lastMileTravel: 2.6,
    serviceability: "SERVICEABLE",
    slaString: "10-20 mins",
    lastMileTravelString: "2.6 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-02-15 02:00:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "ITEMS",
    subHeader: "AT ₹100"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-fe9b81f7-6209-4b0a-9363-f99c29325fe3"
    },
    cta: {
    link: "https://www.swiggy.com/city/bangalore/globo-ice-creams-of-the-world-lakshmi-road-central-bangalore-rest681363",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "69876",
    name: "Subway",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/636cfd42-9fe5-4ce9-8501-d811377da198_69876.JPG",
    locality: "UB City",
    areaName: "Vittal Mallya Road",
    costForTwo: "₹350 for two",
    cuisines: [
    "sandwich",
    "Salads",
    "wrap",
    "Healthy Food"
    ],
    avgRating: 4.3,
    parentId: "2",
    avgRatingString: "4.3",
    totalRatingsString: "3.7K+",
    sla: {
    deliveryTime: 40,
    lastMileTravel: 0.4,
    serviceability: "SERVICEABLE",
    slaString: "35-40 mins",
    lastMileTravelString: "0.4 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-02-14 23:00:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "Rxawards/_CATEGORY-Sandwiches.png",
    description: "Delivery!"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: {
    badgeObject: [
    {
    attributes: {
    description: "Delivery!",
    imageId: "Rxawards/_CATEGORY-Sandwiches.png"
    }
    }
    ]
    },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "ITEMS",
    subHeader: "AT ₹119"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "3.8",
    ratingCount: "282"
    },
    source: "GOOGLE",
    sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-fe9b81f7-6209-4b0a-9363-f99c29325fe3"
    },
    cta: {
    link: "https://www.swiggy.com/city/bangalore/subway-ub-city-vittal-mallya-road-rest69876",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "48230",
    name: "Kanti Sweets",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/13/aa4b203a-ac9e-49e0-83e8-c4910f309395_48230.jpg",
    locality: "Brigade Road",
    areaName: "Central Bangalore",
    costForTwo: "₹150 for two",
    cuisines: [
    "Sweets"
    ],
    avgRating: 4.7,
    parentId: "4700",
    avgRatingString: "4.7",
    totalRatingsString: "6.2K+",
    sla: {
    deliveryTime: 33,
    lastMileTravel: 2,
    serviceability: "SERVICEABLE",
    slaString: "30-35 mins",
    lastMileTravelString: "2.0 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-02-14 22:00:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "v1695133679/badges/Pure_Veg111.png",
    description: "pureveg"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: {
    badgeObject: [
    {
    attributes: {
    description: "pureveg",
    imageId: "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "ITEMS",
    subHeader: "AT ₹19"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "4.1",
    ratingCount: "1.9K+"
    },
    source: "GOOGLE",
    sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-fe9b81f7-6209-4b0a-9363-f99c29325fe3"
    },
    cta: {
    link: "https://www.swiggy.com/city/bangalore/kanti-sweets-brigade-road-central-bangalore-rest48230",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "59146",
    name: "Krispy Kreme - Doughnuts & Coffee",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/14/0381c932-5c1d-4280-8a11-40cd8dcbbd65_59146.jpg",
    locality: "Austin town",
    areaName: "Richmond Road",
    costForTwo: "₹170 for two",
    cuisines: [
    "Desserts",
    "Cafe",
    "Bakery",
    "Coffee",
    "Beverages",
    "Snacks"
    ],
    avgRating: 4.7,
    veg: true,
    parentId: "570",
    avgRatingString: "4.7",
    totalRatingsString: "5.0K+",
    sla: {
    deliveryTime: 35,
    lastMileTravel: 2.6,
    serviceability: "SERVICEABLE",
    slaString: "35-40 mins",
    lastMileTravelString: "2.6 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-02-14 22:00:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "v1695133679/badges/Pure_Veg111.png",
    description: "pureveg"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: {
    badgeObject: [
    {
    attributes: {
    description: "pureveg",
    imageId: "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
   
    
    }
    }
    }
    }
   
    
]  ;
const Body = () => { 
   
    return (
        <div className="body-container">
            <div className="search"> Search</div>
            <div className="restaurant-container">
              {resList.map((restaurant) => (
                <RestaurantCard key="restaurant.info.id" resData = {restaurant} />
                ))}
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