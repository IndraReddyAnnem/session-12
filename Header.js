import { useEffect, useState, useContext } from "react";
import Logo from "../assets/img/zygo.png"
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/store";



const Title =() => (
    <a className="sm:justify-self-auto" href='/'>
  <img
  className='h-28 px-2'
  alt='logo' 
  src={Logo} 
  />
  </a>
);

const Header = () =>{
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //const [title, setTitle] = useState("Zygo");

  const isOnline = useOnline();

  const { user} =  useContext(UserContext);

  const cartItems = useSelector(store => store.cart.items);

  console.log(cartItems);

    return(
    <div className='flex justify-between bg-pink-200 shadow-lg sm:bg-blue-200 md:bg-yellow-500'>
      <Title /> 


     <div className='nav-items'>
        <ul className="flex py-10">
           
            <Link to="/" ><li className="px-2 hover:text-red-900" >Home</li>  </Link>
           
            <Link to="/about"><li className="px-2 hover:text-red-700 ">About</li> </Link>
            
            <Link to="/contact"><li className="px-2 hover:text-red-700">Contact</li></Link>
            
            <Link to="/instamart"><li className="px-2 hover:text-red-700 ">InstaMart</li></Link>

            <Link to="/cart"><li className="px-2 hover:text-red-700 ">Cart {cartItems.length} added</li></Link>
        </ul> 

        
     </div>
      <span className="p-10 font-bold text-red-900"> {user.name}</span>
      <h1 className="p-10">{isOnline? "✅" :"🔴" }</h1>
        {isLoggedIn ?(
        <button onClick={() =>setIsLoggedIn(false)}>Logout</button>
        ) : (<button onClick={() =>setIsLoggedIn(true)}>Login</button>
        )}
    </div>
    );
  };

export default Header;

/**const [title, setTitle] = useState("Zygo");

  <h1>{title}</h1>

  <button className="header-btn" onClick={() => setTitle("Food App")}>Change Title</button>
          <button className="search-btn" onClick={() =>{
            if(title == "Zygo"){
                setTitle("Food App");
            }else{
                setSearchClicked("Zygo");
            }
             
          }}> search </button>
 useEffect(() =>{
   console.log("useEffect")
  },[])          
          
        


      /* <h1 className="header-txt">{title}</h1>
      <button className="header-btn" onClick={() =>{
            if(title == "Zygo"){
                setTitle("Food App");
            }else{
              setTitle("Zygo");
            }
             
          }}> Change Title </button>  */