
import styles from './styles.module.css'
import CategoriesApi from '@/categories/categories'

export default function CategoriesPick({
    handleClick,
    selectedId
}) {
    

    const mainCategories = CategoriesApi.getOldestChildren();
    const isSelected = (id) => id === selectedId;
    const isYoungest = (id) => CategoriesApi.getOldestChildren(id).length == 0
    const makeClassname = (classname, id) => isYoungest(id) ? isSelected(id) ? `${classname} ${styles.selected} ${styles.clickable}` : `${classname} ${styles.clickable}` : `${classname}`

    return (
        <div className={styles.container}>
            {mainCategories.map(main => (
                <div key={main.id}>
                    <p className={makeClassname(styles.main, main.id)} onClick={isYoungest(main.id) ? () => handleClick(main.id) : null}>{main.name}</p>
                    {!isYoungest(main.id) &&
                        <div>
                            {CategoriesApi.getOldestChildren(main.id).map(sub => (
                                <div key={sub.id}>
                                    <p className={makeClassname(styles.sub, sub.id)} onClick={isYoungest(sub.id) ? () => handleClick(sub.id) : null}>{sub.name}</p>
                                    {!isYoungest(sub.id) &&
                                        <div>
                                            {CategoriesApi.getOldestChildren(sub.id).map(subsub => (
                                                <p className={makeClassname(styles.subsub, subsub.id)} key={subsub.id} onClick={() => handleClick(subsub.id)}>{subsub.name}</p>
                                            ))}
                                        </div>}
                                </div>
                            ))}
                        </div>}
                </div>
            ))}
        </div>
    )

}