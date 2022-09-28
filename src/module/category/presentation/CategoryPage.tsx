import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import './categoryStyle.css';
import PreviewProduct from "./PreviewProduct";
import {products} from "../../landing_page/utils/constants";
import Category from "./navBarComponents/Category";
import Price from "./navBarComponents/Price";
import Size from "./navBarComponents/Size";
import Collection from "./navBarComponents/Collection";
import Brand from "./navBarComponents/Brand";
import Style from "./navBarComponents/Style";
import Season from "./navBarComponents/Season";
import Pagionations from "../../landing_page/presentation/Pagionations";

type Params = {
    type: string;
}

const  CategoryPage:React.FC = () => {
    let type = useParams<Params>().type || '';
    if(type){
        type = type[0].toUpperCase() + type.substring(1);
    }

    return (
        <div className={'container p-0'}>
            <div className={'main'}>{type} / <span className={'black'}>All</span></div>
            <div className={"container marCategory"}>
                <div className={"row justify-content-between"}>
                    <h1 className={"col-7 p-0 category"}>{type}</h1>
                    <div className={"col-2 align-self-center p-0 selectDiv"}>
                        <select className="form-select form-select-sm select"
                                onChange={(e)=>{console.log("dispatch me!");}}>
                            <option value="0">Sort by:</option>
                            <option value="rating">Rating</option>
                            <option value="newest">Newest</option>
                            <option value="high-low">By price: high</option>
                            <option value="low-high">By price: low</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={'row justify-content-between m-0'}>
                <div className={'col-1 p-0 nav-bar'} onChange={(e)=>{console.log(e.target);}}>
                    <div className="accordion accordion-flush">
                        <Category/>
                        <Price/>
                        <Size/>
                        <Collection/>
                        <Brand/>
                        <Style/>
                        <Season/>
                    </div>
                </div>
                <div className={'col p-0 ps-5'}>
                    <div className={'row row-cols-3 justify-content-center p-0 m-0'}>
                        {products.map((product,productId)=> <PreviewProduct
                            key={productId} id={productId} imageUrl={product.imageUrl} title={product.title}
                            article={product.article} price={product.price} rating={product.rating}
                            imageAddCart={product.imgAddCart}/>)}
                    </div>
                    <Pagionations/>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;