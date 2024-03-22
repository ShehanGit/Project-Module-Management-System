import React from "react";
import './header.css';
import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <div className="header">
            <div className="header-menu">
                <div className="title">Cource <span>Craft</span></div>
                <div className="sidebar-btn">
                    {/* <i className="fas fa-bars"></i> */}
                </div>
                <ul>
                    <li>
                        <Link to={"/student/#/"}><i className="fas fa-search"></i></Link>
                    </li>
                    <li>
                        <Link to={"/student/#/"}><i className="fas fa-bell"></i></Link>
                    </li>
                    <li>
                        <Link to={"/student/#/"}><i className="fas fa-power-off"></i></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}