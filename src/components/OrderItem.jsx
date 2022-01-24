import React, { useContext } from 'react';
import '@styles/OrderItem.scss';
import closeIcon from '@icons/icon_close.png';
import AppContext from '@context/AppContext';

const OrderItem = ({item}) => {

	const { deleteItemCart } = useContext(AppContext);

	const handleDelete = (itemId) => {
		deleteItemCart(itemId);
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={item.item.images[0]} alt={item.item.title} />
			</figure>
			<p>{item.item.title}</p>
			<p>{item.cant}x ${item.item.price}.00</p>
			<img src={closeIcon} alt="close" onClick={() => handleDelete(item.id)}/>
		</div>
	);
}

export default OrderItem;
