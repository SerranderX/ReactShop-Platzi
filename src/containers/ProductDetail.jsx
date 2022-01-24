import React from 'react';
import ProductInfo from '@components/ProductInfo';
import closeIcon from '@icons/icon_close.png';
import '@styles/ProductDetail.scss';

const ProductDetail = () => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src={closeIcon} alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}

export default ProductDetail;
