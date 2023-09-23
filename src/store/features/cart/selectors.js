import { useSelector } from "react-redux";

export const selectCartModule = (state) => state.cart;

export const selectTotalItemsCount = (state) => Object.keys(selectCartModule(state)).length;

export const selectTotalPrice = (state) => Object.keys(selectCartModule(state)).reduce((acc, curr) => acc+=state.cart[curr].priceForAmount, 0)

export const isItemInCart = (state) => (id) => {
    return (Object.keys(state.cart).findIndex(key => key === id) === -1) ? false : true
}
