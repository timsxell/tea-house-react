import styles from './styles.module.css'
import Link from 'next/link';

export default function SidebarSubSubCategory({
    name,
    serverName,
    serverPath
}){

    const currentServerPath = `${serverPath}${serverName}`;

    return(
        <div className={styles.sidebarSubSubCategory}>
            <Link className={styles.subSubCategoryName} href={`/catalog/${currentServerPath}`}>{name}</Link>
        </div>
    )
}