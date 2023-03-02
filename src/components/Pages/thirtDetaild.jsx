import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ThirtDetails
 = () => {
    const {id} = useParams()
const [car,serCars] = useState(null)

  
        
useEffect(() => {
    
  const   ListOfCars3= [

      {
        model: "Mersedes",
        price: 9239,
        id: 1,
        description: "Thirt car in the world",
        oil: "da",
        year: 70222,
        imgSrc: "https://rg.ru/uploads/images/187/07/30/11.jpg",
      },
      {
        model: "Mersedes12",
        price: 59912,
        id: 2,
        description: "Thirt car in the world",
        oil: "da",
        year: 90211,
        imgSrc: "https://rg.ru/uploads/images/187/07/30/11.jpg",
      },
      {
        model: "Mersedes13",
        price: 91212,
        id: 3,
        description: "Thirt car in the world",
        oil: "da",
        year: 30001,
        imgSrc: "https://rg.ru/uploads/images/187/07/30/11.jpg",
      },
      {
        model: "Mersedes15",
        price: 9344242,
        id: 4,
        description: "Thirt car in the world",
        oil: "da",
        year: 402122,
        imgSrc: "https://rg.ru/uploads/images/187/07/30/11.jpg",
      },
     
      ]
    serCars(ListOfCars3[id -1])
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

export default ThirtDetails
