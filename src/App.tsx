import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import ProductDetailPage from "./module/product_page/presentation/ProductDetailPage";
import {routes} from "./general/navigation/routes";
import NavBar from "./NavBar";
import ProfilePage from "./module/profile/presentation/ProfilePage";
import Navigation from "./Navigation";

function App() {
  return (
      <>
          <Navigation/>
          <NavBar/>
          <Routes>
              <Route path="/" element={<ProductDetailPage/>}/>
              <Route path={`/${routes.productDetail}`} element={<ProductDetailPage/>}/>
              <Route path={`/${routes.productDetail}/:productId`} element={<ProductDetailPage/>}/>
              <Route path={`/main/${routes.profile}/:profileUID`} element={<ProfilePage/>}/>
          </Routes>
      </>
  );
}

export default App;
