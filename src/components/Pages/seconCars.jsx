 
import React from "react";
import { Link } from "react-router-dom";


const Second = () => {


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
    return(
        <div>
            {
                ListOfCars2.map(car => (
                    <Link key={car.id} to={`/second/${car.id}`}>
                         <img src='https://assets.avtocod.ru/storage/images/articles/mashina-za-million-rublej-kakuyu-kupit%200.jpg' alt="" />
             <li>{car.model}</li>
              </Link>
                ))
              
            }
        </div>
    )
}

export default Second