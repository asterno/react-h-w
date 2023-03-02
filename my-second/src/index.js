import React from "react"
import ReactDOM  from "react-dom/client"
import { App } from "./components"
import ArsenContext from "./components/helpers/context"


const userAge =20

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <ArsenContext.Provider value = {userAge}>
                <App/> 
                
        </ArsenContext.Provider>
   
    </React.StrictMode>
)