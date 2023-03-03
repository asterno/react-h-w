import { combineReducers,configureStore} from "@reduxjs/toolkit" 
import  CountReducer from "./reducers/countReducer" 


const rootReducer = combineReducers({
  CountReducer,
})


 const setupStore = () => {
    return configureStore({
        reducer:rootReducer
    })
 }

 export default setupStore