import styles from './styles.module.css'
import Link from 'next/link'


export default function AdminPanel({

}){

    return(
        <div className={styles.adminPanel}>
            <Link href={'/admin/add-item'} className={styles.button}>add new item</Link>
            <Link href={'/admin/edit-item'} className={styles.button}>edit item</Link>
            <Link href={'/admin/edit-stock'} className={styles.button}>edit availability</Link>
            <Link href={'/admin/delete-item'} className={styles.button}>delete item</Link>
            <Link href={'/admin/see-orders'} className={styles.button}>see orders</Link>
        </div>
    )
}