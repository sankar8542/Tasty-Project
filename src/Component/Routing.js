import React, { useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { initialstate, reducer } from "./Webpage/Reducer";
import { globalstate } from "./Webpage/Context";
import Home from "./Webpage/Home.js";
import Book from "./Webpage/Book.js";



const Routing=()=>{


   let [state,dispatch]=useReducer(reducer,initialstate)
       
    return (

        <div>
          <globalstate.Provider value={{state,dispatch}}> 

            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Book" element={<Book/>}/>
           
                

              </Routes>
            
            </BrowserRouter>
            </globalstate.Provider>


        </div>
    )
}

export default Routing;