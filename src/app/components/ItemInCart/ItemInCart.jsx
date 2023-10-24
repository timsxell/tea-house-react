import Image from 'next/image'
import styles from './styles.module.css'
import SvgClose from '../icons/SvgClose/SvgClose'
import { formular} from '@/app/fonts/fonts'
import { useDispatch } from 'react-redux'
import { cartSlice } from '@/store/features/cart'


export default function ItemInCart({
    item,
    amount,
    priceForAmount,
}) {

    const dispatch = useDispatch();
    const handleRemoveClick = () => dispatch(cartSlice.actions.removeItem(item.id));

    return (
        <div className={`${styles.item}`}>
            <div className={styles.imageAndName}>
                <Image src={item.imgSrc || 'https://i.postimg.cc/0NLGt35m/1.webp'} alt={item.name}
                    width={170}
                    height={170}
                    style={{ objectFit: "contain", border:'1px solid black'}}
                />

                <p className={styles.name} style={formular.style}>{item.name}</p>
            </div>
            <div className={styles.right}>
                <SvgClose handleClick={handleRemoveClick}/>
                <div className={styles.amountAndPrice}>
                    {item.category !== 'teaware' && <p className={styles.amount}>{amount}g</p>}
                    <p className={styles.price}>{priceForAmount}{'\u20AC'}</p>
                </div>
            </div>
        </div>
    )
}