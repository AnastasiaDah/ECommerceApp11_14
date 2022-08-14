import {ProductPageStore} from "../../module/product_page/redux/typesProductPage";
import {ProfileDetailsStore} from "../../module/profile/redux/typesProfilePage";

export interface Store{
    productPage: ProductPageStore,
    profileDetails: ProfileDetailsStore
}