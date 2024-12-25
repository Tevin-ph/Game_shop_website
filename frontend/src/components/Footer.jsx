import React from 'react'
import './Footer.css'
import { Link, NavLink } from "react-router-dom"


const Footer = () => {
    return (
        <footer>
            <div className="foot-panel2">
                <ul>
                    <p>Our Products</p>
                    <NavLink to={"/playstation"}><div>Playstation</div></NavLink>
                    <NavLink to={"/xbox"}><div>Xbox</div></NavLink>
                    <NavLink to={"/nintendo"}><div>Nintendo</div></NavLink>
                </ul>

                <ul>
                    <p>Customer Services</p>
                    <li><a href="#"><i className="fa-solid fa-question-circle"></i> Help / FAQ</a></li>
                    <li><a href="#"><i className="fa-solid fa-file-contract"></i> Terms and Conditions</a></li>
                </ul>
                
                <ul id="rightmost">
                    <p>My Account</p>
                    <li><a href="#"><i className="fa-solid fa-truck"></i> Track Order</a></li>
                    <li><NavLink to={'cart'}>Cart</NavLink></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer