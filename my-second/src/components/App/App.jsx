import React, { useState } from "react"
import {useDispatch,useSelector} from "react-redux"


import { countSlice } from "../../store/reducers/countReducer"

const CounerWithState = () => {
    const [count,setCount] = useState()
    return(
        <div>
            <h2>{count} </h2>
            <button   onClick={() => setCount((prev) => prev+1)} >+</button>
            <button  onClick={() => setCount((prev) => prev-1)}  >-</button>
           
        </div>
    )
}


  const CounerWithStore = () => {
    const {increment,decrement} = countSlice.actions
    const {count} = useSelector((state) => state.CountReducer)
    const dispatch = useDispatch()
    console.log(increment(1))



    return(
         <div>
            <h2>{count} </h2>
            <button   onClick={() => setCount((prev) => prev+1)} >+</button>
            <button  onClick={() => setCount((prev) => prev-1)}  >-</button>
           
        </div>
    )
    
  }



const App = () => {

    return (
        <>
     <div>
        <CounerWithState/>
        <hr/>
        <CounerWithStore/>
        
     </div>
      
          
        </>
    )
}

export  default App
       
//3 урок:property dream,key,consumer,вложенность,деструктуризация,router dom,routes,route,navigate,usenavigate,динамические ссылки,useParams
//4 урок:useSelector,actions(),dispatch (acrions()),useDispatch,Provider,   
