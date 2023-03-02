import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Details = () => {
    const {id} = useParams()
const [car,serCars] = useState(null)

  
        
useEffect(() => {
    
  const   ListOfCars= [
    {
      model: "Optimus Prime",
      price: 999,
      id: 1,
      description: "Best car in the world",
      oil: "da",
      year: 10222,
      imgSrc: "https://rg.ru/uploads/images/187/07/30/11.jpg",
    },
    {
      model: "Optimus Prime12",
      price: 99912,
      id: 2,
      description: "Best car in the world",
      oil: "da",
      year: 10211,
      imgSrc: "https://rg.ru/uploads/images/187/07/30/11.jpg",
    },
    {
      model: "Optimus Prime13",
      price: 999323,
      id: 3,
      description: "Best car in the world",
      oil: "da",
      year: 102,
      imgSrc: "https://rg.ru/uploads/images/187/07/30/11.jpg",
    },
    {
      model: "Optimus Prime15",
      price: 9994242,
      id: 4,
      description: "Best car in the world",
      oil: "da",
      year: 102122,
      imgSrc: "https://rg.ru/uploads/images/187/07/30/11.jpg",
    },
   
    ]
    serCars(ListOfCars[id -1])
},[id])
   
    
    return(
 <div>
  {
        car &&(
         <>
         <h1>
            {car.id}
         </h1>
         <h1>
            {car.year}
         </h1>
         <h1>
            {car.oil}
         </h1>
         <h1>
            {car.description}
         </h1>
         <h1>
            {car.price}
         </h1>
         <h1>
            {car.model}
         </h1>
         </>
        )
      }
 </div>
    
    
    )
}

export default Details