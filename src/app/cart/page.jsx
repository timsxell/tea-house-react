'use client'

import styles from './styles.module.css'
import { useSelector } from "react-redux";
import { selectTotalPrice, selectCartModule } from "@/store/features/cart/selectors";
import ItemInCart from "../components/ItemInCart/ItemInCart";
import Auth from '../components/Auth/Auth';

export default function CartPage({ }) {

    return(
        <Auth/>
    )

    // const items = useSelector(state => selectCartModule(state));

    // const totalPrice = useSelector(state => selectTotalPrice(state))
    // const cartEmpty = !(Object.keys(items).length > 0)


    // return (
    //     <div className={styles.page}>
    //         <h1 className={styles.heading}>{cartEmpty ? `your cart is empty` : `Your cart:`}</h1>
    //         { !cartEmpty && <div className={styles.wrapper}>
    //             {Object.values(items).map(item => (
    //                 <ItemInCart key={item.id} item={item.item} amount={item.amount} priceForAmount={item.priceForAmount} />
    //             ))}
    //         </div>}
    //        { !cartEmpty && <div className={styles.total}>
    //             <p className={styles.totalP}>TOTAL:</p>
    //             <p className={styles.totalPrice}>{totalPrice}{'\u20AC'}</p>
    //         </div>}
    //     </div>
    // )

}