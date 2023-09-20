import ItemCard from "../ItemCard/ItemCard";

import styles from './styles.module.css'

export default function ItemsContainer({
    items
}) {

    return (
        <main className={styles.itemsContainer}>
            {items.map((item) => (
                    <ItemCard
                        item={item}
                        key={item.id}
                    />
            ))}
        </main>
    )

}