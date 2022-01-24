import React, { useState, useEffect }  from 'react';
import ProductItem from '@components/ProductItem';
import {useGetProducts} from '@hooks/useGetProducts';
import '@styles/ProductList.scss';
import axios from 'axios';

const ProductList = () => {
					
	const products = useGetProducts(10,0);
	
	return (
		<section className="main-container">
			<div className="ProductList">
				{!products && <p>Loading...</p>} 
				
				{products && products.map(product => 
					<ProductItem key={product.id} product={product}/>
				)}
			</div>
		</section>
	);
}


export default ProductList;
