import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";
import {decrementCartCount, incrementCartCount, removeFromCartAction} from "../redux/asyncActions";
import { CartProduct} from "../redux/typesCartPage";

const CartPage:React.FC = () => {
    //const cart: CartProduct = useSelector<Store, CartProduct>(state => state.cartPage.cartItems);
    const cartItems = useSelector<Store, Array<CartProduct>>(state => state.cartPage.cartItems)
    const dispatch = useDispatch()


    return (<>
            <div className="container">
                <h1>Cart</h1>
            <div className="mb-5 row">
                <div className="col-lg-8">
                        <div className="cart-body">
                            {cartItems.map((item) => (
                            <div className="cart-item my-4" key={item.idProduct}>
                                <div className=" d-flex align-items-center text-start text-md-center row">
                                    <div className="col-md-5 col-12">
                                        <div className="d-flex align-items-center">
                                                <img className="cart-item-img rounded-3" src="http://via.placeholder.com/165x200" alt=''/>
                                            <div className="cart-title text-start ms-3">
                                                <a className="text-uppercase text-dark" href={item.idProduct}>
                                                    <strong>{item.title}</strong>
                                                </a>
                                                <div className="text-muted text-sm">
                                                    Size: {item.size}
                                                </div>
                                                <div className="text-muted text-sm">
                                                    Colour: {item.color}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 mt-md-0 col-md-7 col-12">
                                        <div className="align-items-center row">
                                            <div className="col-md-3">
                                                <div className="row">
                                                    <div className="text-end text-md-center col-md-12 col-6">${item.price}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="align-items-center row">
                                                    <div className="col-md-12 col-sm-3 col-5">
                                                        <div className="d-flex align-items-center">
                                                            <div className="btn btn-items btn-items-decrease"
                                                                 onClick={() => dispatch(decrementCartCount(item.idProduct))}>-</div>
                                                            <p className="text-center border-0 border-md input-items form-control">
                                                                {item.count}
                                                            </p>
                                                            <div className="btn btn-items btn-items-increase"
                                                                 onClick={() => dispatch(incrementCartCount(item.idProduct))}>+
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="row">
                                                    <div className="text-end text-md-center col-md-12 col-6">${item.price*item.count}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-none d-md-block text-center col-2">
                                                  <button className="btn btn-light"
                                                             onClick={() => dispatch(removeFromCartAction(item.idProduct))}
                                                        >
                                                      X
                                                    </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}

                        </div>
                    </div>
                {/* Summary*/}
                <div className="col-lg-4 rounded-2 border border-1">
                    <div className="block mb-5">
                        <div className="block-header">
                            <h4 className="text mt-3">Summary</h4>
                        </div>
                        <div className="block-body pt-2">
                            <ul className="order-summary mb-0 list-unstyled">
                                <li className="order-summary-item">
                                    <span>Order Subtotal </span><span>$90.00</span>
                                </li>
                                <li className="order-summary-item">
                                    <span>Shipping & Handling</span>
                                    <span>$10.00</span>
                                </li>
                                <li className="order-summary-item">
                                    <span>Tax</span>
                                    <span>$0.00</span>
                                </li>
                                <li className="order-summary-item border-0">
                                    <span>Total</span>
                                    <strong className="order-summary-total">$100.00</strong>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                </div>

            {/*</div>*/}
        </div>
        </>
);
}
export default CartPage;
