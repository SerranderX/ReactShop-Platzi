import { useState } from "react";

const initialState = {
    cart: [],
    totalItems: 0,
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        const prodFind = state.cart.filter(itemCar => itemCar.id === payload.id);
        let totalItems = 0;
        if (prodFind.length > 0) {
            const newCar = state.cart.map(itemCar => {
                if(itemCar.id === payload.id) {
                    totalItems = totalItems + (itemCar.cant + 1);
                    return { ...itemCar, cant: itemCar.cant + 1 };
                } else {
                    totalItems = totalItems + itemCar.cant;
                    return itemCar;
                }
            });
            setState({
                ...state,
                cart: newCar,
                totalItems: totalItems
            });
        } else {
            let itemCar = {
                id: payload.id,
                cant: 1,
                item: payload
            }
            state.cart.map(itemCar => {
                totalItems = totalItems + itemCar.cant;
            });

            setState({
                ...state,
                cart: [...state.cart, itemCar],
                totalItems: totalItems + 1
            });
        }
    }

    const deleteItemCart = (payload) => {
        let totalItems = 0;
        const newCar = state.cart.filter(itemCar => {
            if(itemCar.id !== payload) {
                totalItems = totalItems + itemCar.cant;
                return itemCar;
            }
        });

        setState({
            cart: newCar,
            totalItems: totalItems
        });
    }

    return { state, addToCart, deleteItemCart };
}

export default useInitialState;