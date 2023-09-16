import { useDispatch, useSelector } from "react-redux";
import RestaurantCard from "./RestaurantCard";
import FoodItems from "./FoodItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{
    const cartItems = useSelector(store => store.cart.items)
    
    const  dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart())
    }
    
    return (
        <div>
            <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1> 
            <button 
                 className="bg-red-200 p-2 m-5" onClick={()=> handleClearCart()}>
           clear Cart</button>

           <div className="flex">
            {cartItems.map((item) =>(
               <FoodItems key={item.id} {...item} />
               )
            )};
           </div>  

           
        </div>
    ); 
    };

    export default Cart;