import { useState } from "react";
import styles from './styles.module.css'
import SidebarSubSubCategory from "../SidebarSubSubCategory/SidebarSubSubCategory";
import SvgArrow from "../icons/SvgArrow/SvgArrow";
import Link from "next/link";

import categories from "@/categories/categories";


export default function SidebarSubCategory({
  subcategory,
  serverPath
}) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const serverName = subcategory.name.split(' ').join('_');
  const currentServerPath = `${serverPath}${serverName}/`

  const subsubcategories = categories.getOldestChildren(subcategory.id)

  return (
    <div>
      <div className={styles.sidebarSubCategory} >
        <Link className={styles.subCategoryName} href={`/catalog/${currentServerPath}`}
        style={!!subsubcategories.length ? {} : {width: '100%'}}
        >{subcategory.name}</Link>
        {!!subsubcategories.length && <div className={styles.svgContainer} onClick={toggleOpen}>
          <SvgArrow isOpen={isOpen} />
        </div>}
      </div>
      {isOpen && (
        <div style={{ marginLeft: '16px' }}>
          {!!subsubcategories.length &&
            subsubcategories.map((subSubCategory) => (
              <SidebarSubSubCategory key={subSubCategory.name} name={subSubCategory.name} serverName={subSubCategory.name.split(' ').join('_')} serverPath={currentServerPath} />
            ))}
        </div>
      )}
    </div>
  );

}