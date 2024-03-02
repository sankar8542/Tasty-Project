import Food from "../Product.json"



   
export const initialstate={
           name:"sankar",
           
           arr:Food.Foods
          
}

export const reducer=(state,action)=>{
        
    if(action.type==="update name"){

        return{...state,arr:action.payload}
    }
   
        
}