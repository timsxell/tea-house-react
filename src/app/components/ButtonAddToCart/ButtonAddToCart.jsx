'use client'

import { useState } from "react"
import styles from './styles.module.css'
// import { useAdded } from "../ItemCard/ItemCard"
import { formular } from "@/app/fonts/fonts";

import { useDispatch } from "react-redux";
import { cartSlice } from "@/store/features/cart";

export default function ButtonAddToCart({
    isAdded,
    handleClick,
    itemId
}){

    // const {isAdded, handleButtonClick} = useAdded();

    const dispatch = useDispatch()

    // const handleButtonClick2 = () => {
    //     handleButtonClick();
    //     dispatch(cartSlice.actions.increment(itemId))
    // }

    return(
        <div 
        style={formular.style}
        onClick={handleClick} 
        className={`${styles.btn} ${isAdded ? styles.added : styles.notAdded}`} >
            {isAdded ? 'ADDED' : 'ADD TO CART'}
        </div>
    )
}

{/* <button
                    onClick={() => {dispatch(cartSlice.actions.addItem({
                        item: item,
                        amount: 100,
                        priceForAmount: 33,
                    }))}} */}