
import {Routes,Route} from "react-router-dom"
import Main from "../Pages/Main"
import Second from "../Pages/seconCars"
import Thirt from "../Pages/ThirtCart"
import Cars from "../Pages/cars"
import Details from "../Pages/details"
import DetailSecond from "../Pages/detailSecond"
import ThirtDetails from "../Pages/thirtDetaild"
const App = () => {


    return(

        <>
         <Routes>
             <Route path="/" element={<Main/>}/> 
             <Route path="/first" element={<Cars/>}/> 
             <Route path="/second" element={<Second/>}/> 
             <Route path="/thirt" element={<Thirt/>}/> 
             <Route path="/first/:id" element={<Details/>}/>
             <Route path="/second/:id" element={<DetailSecond/>}/>
             <Route path="/thirt/:id" element={<ThirtDetails/>}/>
         </Routes>
        </>
        
   
    
    )
}


export default App
