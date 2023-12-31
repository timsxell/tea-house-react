'use client'

import styles from './styles.module.css'
import { selectTotalItemsCount, selectTotalPrice } from '@/store/features/cart/selectors'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSelector } from "react-redux";
import SvgCart from '../icons/SvgCart/SvgCart';
import SvgHamburger from '../icons/SvgHamburger/SvgHamburger';
import SvgChevron from '../icons/SvgChevron/SvgChevron';
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

    let [isHamburgerOpened, setIsHamburgerOpened] = useState(false);

    let hamburgerOpenedClass = `${isHamburgerOpened ? styles.hamburgerOpened : styles.hamburgerClosed}`

    return (
        <header className={`${hamburgerOpenedClass} ${styles.header}`}>
            <Link href='/admin'>ADMIN</Link>
            <Link href='/login'>login</Link>
            <div className={styles.leftAndMid}>
                <div className={styles.left} >
                    <div className={styles.hamburger} onClick={() => setIsHamburgerOpened(!isHamburgerOpened)}>
                        {isHamburgerOpened ? <SvgChevron pointTo='left' /> : <SvgHamburger color={'black'} />}
                    </div>
                    <Link href={mockLink} className={styles.leftLink}>caTeRing</Link>
                    <Link href={mockLink} className={styles.leftLink}>tea Walks</Link>
                    <Link href={mockLink} className={styles.leftLink}>HisTory</Link>
                </div>
                <div className={styles.mid}>
                    <Link href={mockLink} className={styles.mainLink}>tea HousE</Link>
                </div>
            </div>
            <Link className={cartIconClass} href={cartLink} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                {((cartEmpty && currentPath[1] !== 'catalog') || currentPath[1] === 'cart') && <p className={styles.rightLink}>store</p>}
                {(!cartEmpty && currentPath[1] !== 'cart') && <SvgCart width={30} height={30} />}
                {!cartEmpty && currentPath[1] !== 'cart' && <p>{cartBadgeText}</p>}
            </Link>


        </header>
    )

}