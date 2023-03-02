import React from "react";
import { Link } from "react-router-dom";


const Cars = () => {


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
    return(
        <div>
            {
                ListOfCars.map(car => (
                    <Link key={car.id} to={`/first/${car.id}`}>
                         <img src='https://rg.ru/uploads/images/187/07/30/11.jpg' alt="" />
             <li>{car.model}</li>
              </Link>
                ))
              
            }
        </div>
    )
}

export default Cars