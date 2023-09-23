import styles from './styles.module.css';
import ButtonAddToCart from '../ButtonAddToCart/ButtonAddToCart';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { cartSlice } from '@/store/features/cart';
import { useDispatch } from 'react-redux';
import { usePathname } from 'next/navigation';
import { formular } from '@/app/fonts/fonts';
import { useSelector } from 'react-redux';
import { isItemInCart } from '@/store/features/cart/selectors';

function calcPrice(priceFor100, amount) {
    return ((priceFor100 / 100) * amount).toFixed(2);
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

    const AMOUNTS = [
        50,
        100,
        200,
        300
    ]

    const path = usePathname().split('/');
    //2
    const showGrams = item.category !== 'teaware';
    // const showGrams = path[2] !== 'teaware';

    const isAdded = useSelector(state => isItemInCart(state)(item.id))


    // const [isAdded, setIsAdded] = useState(false);
    const [selectedAmount, setSelectedAmount] = useState(100);

    const dispatch = useDispatch();

    const selectAmountClick = (amount) => {
        if (!isAdded) {
            setSelectedAmount(amount)
        }
    }

    const addToCartClick = () => {
        if (!isAdded) {
            // setIsAdded(true);
            dispatch(cartSlice.actions.addItem({
                item: item,
                amount: selectedAmount,
                priceForAmount: Number(calcPrice(item.priceFor100, selectedAmount)),
            }));
        }  
    }


    return (
        <div className={isAdded ? `${styles.card} ${styles.cardAdded}` : `${styles.card}`}>
            <Image alt={item.name} className={isAdded ? `${styles.image} ${styles.imageAdded}` : `${styles.image}`}
                src={item.imgSrc}
                width={290}
                height={220}

            />
            <Link style={formular.style} className={styles.itemName} href={``}>{item.name}</Link>
            <div className={styles.priceAndAmount}>
                <p className={showGrams ? `${styles.amount}` : `${styles.amount} ${styles.hidden}`} >{`${selectedAmount}g /`}</p>
                <p className={styles.price}>{calcPrice(item.priceFor100, selectedAmount)}{'\u20AC'}</p>
            </div>
            <div className={showGrams ? `${styles.slider}` : `${styles.displayNone}`}>
                <CircleAndAmount handleClick={() => selectAmountClick(AMOUNTS[0])} amount={AMOUNTS[0]} isAdded={isAdded} isSelected={selectedAmount === AMOUNTS[0]} />
                <CircleAndAmount handleClick={() => selectAmountClick(AMOUNTS[1])} amount={AMOUNTS[1]} isAdded={isAdded} isSelected={selectedAmount === AMOUNTS[1]} />
                <CircleAndAmount handleClick={() => selectAmountClick(AMOUNTS[2])} amount={AMOUNTS[2]} isAdded={isAdded} isSelected={selectedAmount === AMOUNTS[2]} />
                <CircleAndAmount handleClick={() => selectAmountClick(AMOUNTS[3])} amount={AMOUNTS[3]} isAdded={isAdded} isSelected={selectedAmount === AMOUNTS[3]} />
            </div>
            <ButtonAddToCart handleClick={addToCartClick} isAdded={isAdded} />
        </div>
    )
}