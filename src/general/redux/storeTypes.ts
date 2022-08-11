import {ProductPageStore} from "../../module/product_page/redux/typesProductPage";
import {CartPageStore} from "../../module/cart/redux/typesCartPage";

export interface Store{
    productPage: ProductPageStore
    cartPage: CartPageStore
}