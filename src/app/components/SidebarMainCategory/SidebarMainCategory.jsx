import styles from './styles.module.css';
import { useState } from 'react';
import SvgArrow from '../icons/SvgArrow/SvgArrow';
import SidebarSubCategory from '../SidebarSubCategory/SidebarSubCategory';
import Link from 'next/link';

import categories from "@/categories/categories";



export default function SidebarMainCategory({
    category
}){

    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const serverName = category.name.split(' ').join('_');
    const currentServerPath = `${serverName}/`; 

    const subcategories = categories.getOldestChildren(category.id)

    return(
        <div>
            <div className={styles.sidebarMainCategory} >
                <Link href={`/catalog/${currentServerPath}`}className={styles.categoryName}>{category.name}</Link>
                <div onClick={toggleOpen} className={styles.svgContainer}>
                    {!!subcategories.length && <SvgArrow isOpen={isOpen} />}
                </div>
                
            </div>
            {!!subcategories.length && isOpen && (
                <div style={{marginLeft: '16px'}}>
                    {subcategories.map((subcategory) => (
                        <SidebarSubCategory key={subcategory.name} subcategory={subcategory} serverPath={currentServerPath}/>
                    ))}
                </div>
            )}
        </div>
    )
}