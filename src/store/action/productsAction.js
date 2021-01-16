import * as Types from './Types'
import products from '../../utils/products'

 export const getProductsAction = () => dispatch =>{
    dispatch({
        type: Types.ALL_PRODUCT,
        palyload:{
           products: products
        } 
    })
}

