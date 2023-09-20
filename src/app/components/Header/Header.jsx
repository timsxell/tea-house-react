'use client'

import styles from './styles.module.css'
import { selectTotalItemsCount, selectTotalPrice } from '@/store/features/cart/selectors'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSelector } from "react-redux";
import SvgCart from '../icons/SvgCart/SvgCart';
import { useState } from 'react';



export default function Header({ }) {

    const totalItemsCount = useSelector(state => selectTotalItemsCount(state));
    const totalPrice = useSelector(state => selectTotalPrice(state));

    const cartEmpty = totalItemsCount <= 0

    const mockLink = '/';
    
    const currentPath = usePathname().split('/');
    const cartLink = (cartEmpty || currentPath[1] === 'cart') ? '/catalog' : '/cart'

    const cartIconClass = cartEmpty ? `${styles.right}` : (currentPath[1] === 'cart') ? `${styles.right}` : (currentPath[1] !== 'catalog') ? `${styles.right} ${styles.cartNotEmpty}` : `${styles.right} ${styles.cartNotEmpty} ${styles.cartNotEmptyOnCatalogPage}`;

    const [isHovered, setIsHovered] = useState(false);

    //${'\u20AC'} eur sign

    const cartBadgeText = isHovered ? `${totalPrice}${'\u20AC'}` : totalItemsCount

    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <Link href={mockLink} className={styles.leftLink}>caTeRing</Link>
                <Link href={mockLink} className={styles.leftLink}>tea Walks</Link>
                <Link href={mockLink} className={styles.leftLink}>HisTory</Link>
            </div>
            <div className={styles.mid}>
                <Link href={mockLink} className={styles.mainLink}>tea HousE</Link>
            </div>
            <Link className={cartIconClass} href={cartLink}  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                {((cartEmpty && currentPath[1] !== 'catalog') || currentPath[1] === 'cart') && <p className={styles.leftLink}>store</p>}
                {(!cartEmpty && currentPath[1] !== 'cart' )&& <SvgCart width={30} height={30}/>}
                {!cartEmpty && currentPath[1] !== 'cart' && <p>{cartBadgeText}</p>}
            </Link>


        </header>
    )

}