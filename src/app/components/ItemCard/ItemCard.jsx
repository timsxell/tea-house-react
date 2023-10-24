'use client'

import styles from './styles.module.css';
import ButtonAddToCart from '../ButtonAddToCart/ButtonAddToCart';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { cartSlice } from '@/store/features/cart';
import { useDispatch } from 'react-redux';
import { formular } from '@/app/fonts/fonts';
import { useSelector } from 'react-redux';
import { isItemInCart } from '@/store/features/cart/selectors';

function calcPrice(basePrice, basePriceAmount, amount) {
    return ((basePrice / basePriceAmount) * amount).toFixed(2);
}

function CircleAndAmount({
    amount,
    isSelected,
    isAdded,
    handleClick
}) {

    const weight = isSelected ? 600 : 200;
    const color = (isSelected && isAdded) ? "#9FCFB2" : isSelected ? "black" : "white";

    return (
        <div className={styles.circleAndAmount} onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                <circle cx="10.5" cy="10" r={isSelected ? "10" : "9.5"} fill={color} stroke={isSelected ? "" : 'black'} />
            </svg>
            <p style={{ fontWeight: weight }}>{amount}g</p>
        </div>
    )
}

export default function ItemCard({
    item,
    // showGrams = true,
}) {

    const amounts = item.isPressed ?
    [
        100,
        200,
        item.totalWeight
    ] : [
        50,
        100,
        200,
        300
    ]

    const basePrice = item.isPressed ? 100 : 50

    const showGrams = !(item.isUnit)

    const isAdded = useSelector(state => isItemInCart(state)(item.id))

    const [selectedAmount, setSelectedAmount] = useState(100);

    const dispatch = useDispatch();

    const selectAmountClick = (amount) => {
        if (!isAdded) {
            setSelectedAmount(amount)
        }
    }

    let priceForAmount = item.isUnit ? item.price : calcPrice(item.price, basePrice, selectedAmount)

    const addToCartClick = () => {
        if (!isAdded) {
            dispatch(cartSlice.actions.addItem({
                item: item,
                amount: selectedAmount,
                priceForAmount: priceForAmount,
            }));
        }  
    }

    return (
        <div className={isAdded ? `${styles.card} ${styles.cardAdded}` : `${styles.card}`}>
            <Image alt={item.nameRu} className={isAdded ? `${styles.image} ${styles.imageAdded}` : `${styles.image}`}
                src={item.imgSrc1}
                width={290}
                height={220}

            />
            <Link style={formular.style} className={styles.itemName} href={``}>{item.nameRu}</Link>
            <div className={styles.priceAndAmount}>
                <p className={showGrams ? `${styles.amount}` : `${styles.amount} ${styles.hidden}`} >{`${selectedAmount}g /`}</p>
                <p className={styles.price}>{priceForAmount}{'\u20AC'}</p>
            </div>
            <div className={showGrams ? `${styles.slider}` : `${styles.displayNone}`}>
                {amounts.map(amount => 
                        <CircleAndAmount handleClick={() => selectAmountClick(amount)} amount={amount} isAdded={isAdded} isSelected={selectedAmount === amount} key={amount}/>
                )} 
            </div>
            <ButtonAddToCart handleClick={addToCartClick} isAdded={isAdded} />
        </div>
    )
}