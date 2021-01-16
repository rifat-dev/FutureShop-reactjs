import {connect } from 'react-redux'
import {removeProduct} from '../../store/action/orderAction'
import './CheckoutProduct.css'

function CheckoutProduct(props,{ id, image, title, price }) {

    const removeFromBasket = () => {
        props.removeProduct(id,price)
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}



export default connect(null,{removeProduct})(CheckoutProduct)