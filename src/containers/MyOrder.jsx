import React, { useContext } from 'react';
import OrderItem from '../components/OrderItem';
import flechitaIcon from '@icons/flechita.svg';
import '@styles/MyOrder.scss';
import AppContext from '../context/AppContext';

const MyOrder = () => {
	const { state } = useContext(AppContext);
	let totalPrice = 0;

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flechitaIcon} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(item => {
					totalPrice += item.cant * item.item.price;
					return <OrderItem key={item.id} item={item} />
				})}
				{state.totalItems == 0 && <p>You have no items in your order</p>}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${totalPrice}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>	
		</aside>
	);
}

export default MyOrder;
