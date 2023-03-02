import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const DetailSecond = () => {
    const {id} = useParams()
const [car,serCars] = useState(null)

  
        
useEffect(() => {
    
  const   ListOfCars2= [

      {
        model: "Ferrari",
        price: 999,
        id: 1,
        description: "Second car in the world",
        oil: "da",
        year: 10222,
        imgSrc: "https://rg.ru/uploads/images/187/07/30/11.jpg",
      },
      {
        model: "Ferrai12",
        price: 99912,
        id: 2,
        description: "Second car in the world",
        oil: "da",
        year: 10211,
        imgSrc: "https://rg.ru/uploads/images/187/07/30/11.jpg",
      },
      {
        model: "Ferrai13",
        price: 999323,
        id: 3,
        description: "Second car in the world",
        oil: "da",
        year: 10001,
        imgSrc: "https://rg.ru/uploads/images/187/07/30/11.jpg",
      },
      {
        model: "Ferrai15",
        price: 9994242,
        id: 4,
        description: "Second car in the world",
        oil: "da",
        year: 102122,
        imgSrc: "https://rg.ru/uploads/images/187/07/30/11.jpg",
      },
     
      ]
    serCars(ListOfCars2[id -1])
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

export default DetailSecond