
const FoodItems = (props) => {
    return (
      <div className='w-56 p-2 m-2 shadow-lg bg-pink-50 h-[500px]'>
          <img className='h-[250px]'src={props.image} />
          <h2 className="font-bold text-xl">{props.name}</h2>
          <span><h4 className="font-bold">description:</h4>{props.description}</span>
          <h4>Rupees: {props.price} </h4>
         

      </div>
    );
  };

  export default FoodItems;