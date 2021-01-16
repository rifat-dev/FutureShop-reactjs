import * as Types from '../action/Types'


const init = {
    bascket: [], 
    totalAmount: 0,
    totalProduct: 0,

}

const basketReducer = (state = init, action) =>{
     switch (action.type){
         case Types.ADD_PRODUCT:{
           return{
            bascket: [...state.bascket,action.palyload.product],
            totalAmount: state.totalAmount + action.palyload.product.price,
            totalProduct: state.totalProduct + 1
           }
         }
         case Types.REMOVE_PRODUCT:{
           let newBascket = [...state.bascket]
           newBascket = newBascket.filter(item=> item._id === action.palyload._id)
           return{
             bascket: newBascket,
             totalAmount: state.totalAmount - action.palyload.price,
             totalProduct: state.totalProduct - 1
           }
         }
         default: return state
     }
}


export default basketReducer