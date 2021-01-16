import {useEffect} from 'react';
import {connect} from 'react-redux'
import ProductModel from '../models/ProductModel'
import {getProductsAction} from '../../store/action/productsAction'


const Products = (props) => {
  
    useEffect(()=>{
        props.getProductsAction()
    })
       
    return (
        <div className="row p-4" >
            <h3 className="my-2" >Products</h3>
            {props.products.map((product=>(
                <div key={product.id} className="col-md-4 my-2">
                    <ProductModel
                  product={product}
                />
                </div>
            )))}
        </div>
    );
}

const mapToStateFromProps = state => ({
    products: state.products
})

export default connect(mapToStateFromProps,{getProductsAction})(Products);
