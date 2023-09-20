import styles from './styles.module.css';
import { useState } from 'react';
import SvgArrow from '../icons/SvgArrow/SvgArrow';
import SidebarSubCategory from '../SidebarSubCategory/SidebarSubCategory';
import Link from 'next/link';


export default function SidebarMainCategory({
    category
}){

    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    

    const serverName = category.serverName;
    const currentServerPath = `${serverName}/`; 

    return(
        <div>
            <div className={styles.sidebarMainCategory} >
                <Link href={`/catalog/${currentServerPath}`}className={styles.categoryName}>{category.name}</Link>
                <div onClick={toggleOpen} className={styles.svgContainer}>
                    {category.subcategories && <SvgArrow isOpen={isOpen} />}
                </div>
                
            </div>
            {category.subcategories && isOpen && (
                <div style={{marginLeft: '16px'}}>
                    {category.subcategories.map((subcategory) => (
                        <SidebarSubCategory key={subcategory.name} subcategory={subcategory} serverPath={currentServerPath}/>
                    ))}
                </div>
            )}
        </div>
    )
}