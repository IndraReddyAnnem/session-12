import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const {user} =useContext(UserContext);
   
    return (
      <div className='w-56 p-2 m-2 shadow-lg bg-pink-50 h-[500px]'>
          <img className='h-[250px]'src={props.image} alt={props.name} />
          <h2 className="font-bold text-xl">{props.name}</h2>
          <h3>{props.cuisines.join(", ")}</h3>
          <h4>{props.avgRating} stars</h4>
          <h4>{props.deliveryTime} </h4>
          <h4 className="font-bold">{user.name}</h4>
          <h4 className="font-bold">{user.email}</h4>
      </div>
    );
  };

  export default RestaurantCard;