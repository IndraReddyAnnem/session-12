import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { restaurantList } from "../Config";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
//import useRestaurant from "../utils/useRestaurant";


const RestaurantMenu = () => {
    const { id } = useParams();
    const selectedRestaurant = restaurantList.find(restaurant => restaurant.id === id);
    
     //const selectedRestaurant = useRestaurant(id);

     const dispatch = useDispatch();
     
     const addFoodItem = (item)=>{
     dispatch (addItem(item))
     }

    return !selectedRestaurant ? (
        <Shimmer />
    ) : (
        <div className="flex">
            <div className="w-[250px] p-2 m-2 shadow-lg bg-yellow-50 h-[400px]">
                 <img src={selectedRestaurant.image} alt={selectedRestaurant.name} />
                <h2>{selectedRestaurant.name}</h2>
                <h1>Restaurant ID: {id}</h1>
                <h3>Location: {selectedRestaurant.area}, {selectedRestaurant.city}</h3>
                <h3>Rating: {selectedRestaurant.avgRating} stars</h3>
             </div> 
             <div className="p-5">
                <h1>Menu</h1>
                <ul>
                    {selectedRestaurant.menu.map((item) => (
                        <li key={item.id}>
                            {item.name} - {item.price} -
                             <button className="p-1 bg-green-50" onClick={() =>addFoodItem(item)}>Add</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;


/**
 * 
 * 
 * const handleAddItem = () =>{
    dispatch(addItem("grapes"));
   }

   <button onClick={() => handleAddItem()}>Add</button>
 * 
 * 
 */
