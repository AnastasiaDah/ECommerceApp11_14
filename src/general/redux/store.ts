import {applyMiddleware, combineReducers, createStore} from "redux"
import {productPageReducer} from "../../module/product_page/redux/productPageReducer";
import thunk from "redux-thunk";
import {logger} from "redux-logger";
import {profileDetailsReducer} from "../../module/profile/redux/profileDetailsReducer";

const store = createStore(
    combineReducers(
        {
            productPage: productPageReducer,
            profileDetails: profileDetailsReducer
        }
    ),
    applyMiddleware(thunk, logger)
)

export default store;