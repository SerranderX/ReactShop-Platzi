import React, { useContext, useState } from 'react';
import Menu from '@components/Menu';
import '@styles/Header.scss';
import menu from '@icons/icon_menu.svg';
import logoYardSale from '@logos/logo_yard_sale.svg';
import cartIcon from '@icons/icon_shopping_cart.svg';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);

    const { state } = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const handleToggleOrders = () => {
        setToggleOrders(!toggleOrders);
    }

    return (
        <nav>
            <img src={menu} alt="menu" className="menu" />

            <div className="navbar-left">
                <img src={logoYardSale} alt="logo" className="nav-logo" />

                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>

            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle} >
                        platzi@example.com
                    </li>
                    <li className="navbar-shopping-cart" onClick={handleToggleOrders}>
                        <img src={cartIcon} alt="shopping cart" />
                        {(state.totalItems != 0) && <div>{state.totalItems}</div>}
                    </li>
                </ul>
            </div>
            {toggle && <Menu />}
            {toggleOrders && <MyOrder />}
        </nav>
    );
};

export default Header;