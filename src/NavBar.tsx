import React from 'react';
import './tempStyle.css';
import {Link} from "react-router-dom";
import {routes} from "./general/navigation/routes";

const NavBar:React.FC = () => {
    return (
        <div className={'nav border border-dark border-1'}>
            <Link to={`/${routes.productDetail}`}>
                <button className={'btn btn-success btn-sm me-2'}>Main</button>
            </Link>
            /
            <Link to={`/main/${routes.profile}/1`}>
                <button className={'btn btn-success btn-sm me-2'}>Profile</button>
            </Link>
        </div>
    );
};

export default NavBar;