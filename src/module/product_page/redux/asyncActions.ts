import Product from "../domain/model/Product";
import getProductDetails from "../domain/use_case/getProductDetails";

export const getProductDetailsAction = (productId:string):any => {
    return (dispatch:Function) => {
        dispatch(startProductLoadAction());
        getProductDetails(productId).then((data)=>{
            console.log(JSON.stringify(data));
            dispatch(setProductDataAction(data));
        });
    }
};

const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const fetchProducts = () => async (dispatch:Function) => {
    const res = await fetch("/api/products");
    const data = await res.json();
    console.log(data);
    dispatch({
        type: START_PRODUCT_LOAD,
        payload: data,
    });
};

export const START_PRODUCT_LOAD = "start_random_load";
export const SET_PRODUCT_DATA = "set_random_cocktail_data";

export const startProductLoadAction = () => ({
        type: START_PRODUCT_LOAD
    });
export const setProductDataAction = (data:Product) => ({
    type: SET_PRODUCT_DATA,
    payload: data
})
