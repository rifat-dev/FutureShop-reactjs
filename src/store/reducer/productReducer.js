import * as Types from "../action/Types"

const productReducer = (state = [], action) => {
  
     switch (action.type) {
         case Types.ALL_PRODUCT:{
             return action.palyload.products 
         }
         default : return state
                
     }
}

export default productReducer

