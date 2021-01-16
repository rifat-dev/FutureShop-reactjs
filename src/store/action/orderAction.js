import * as Types from './Types'

export const addProduct = (product) => dispatch =>{
    dispatch({
        type:Types.ADD_PRODUCT,
        palyload:{
            product:product
        }
    })
}

export const removeProduct = (_id,price) => dispatch =>{
    dispatch({
        type:Types.REMOVE_PRODUCT,
        palyload:{
             _id:_id,
             price:price
        }
    })
}