import { Link } from "react-router-dom";

import React from "react";


const Thirt = () => {

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
       
        
      return(
          <div>
              {
                  ListOfCars3.map(car => (
                      <Link key={car.id} to={`/thirt/${car.id}`}>
                        <img src='https://s0.rbk.ru/v6_top_pics/media/img/4/46/756681047173464.jpg' alt="" />
               <li>{car.model}</li>
                </Link>
                  ))
                
              }
          </div>
      )
}

export default Thirt