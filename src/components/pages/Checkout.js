import {connect } from 'react-redux'
import "./Checkout.css";
import Subtotal from "../models/Subtotal";
import CheckoutProduct from "../models/CheckoutProduct";

function Checkout(props) {

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />

                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>

                    {props.productBasket.bascket.map(item => (
                        <CheckoutProduct
                            id={item._id}
                            title={item.name}
                            image={item.image}
                            price={item.price}
                        />
                    ))}

                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}

const mapToStateFromProps = state => ({
    productBasket:state.productBasket
})

export default connect(mapToStateFromProps)(Checkout);