import { useState, useEffect }  from 'react';
import axios from 'axios';

const API = 'https://api.escuelajs.co/api/v1/products';

const useGetProducts = (limit, offset) => {
    const [products, setProducts] = useState([]);
    
    useEffect(async () => {
        console.log(limit);
        console.log(offset);

        if(limit != null && offset != null) {
            const response = await axios.get(`${API}?limit=${limit}&offset=${offset}`);
            setProducts(response.data);
        } 

    }, []);

    return products;
};

export {useGetProducts};