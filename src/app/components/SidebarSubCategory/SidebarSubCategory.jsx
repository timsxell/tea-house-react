import { useState } from "react";
import styles from './styles.module.css'
import SidebarSubSubCategory from "../SidebarSubSubCategory/SidebarSubSubCategory";
import SvgArrow from "../icons/SvgArrow/SvgArrow";
import Link from "next/link";

export default function SidebarSubCategory({
  subcategory,
  serverPath
}) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const serverName = subcategory.serverName;
  const currentServerPath = `${serverPath}${serverName}/`

  return (
    <div>
      <div className={styles.sidebarSubCategory} >
        <Link className={styles.subCategoryName} href={`/catalog/${currentServerPath}`}
        style={subcategory.subsubcategories ? {} : {width: '100%'}}
        >{subcategory.name}</Link>
        {subcategory.subsubcategories && <div className={styles.svgContainer} onClick={toggleOpen}>
          <SvgArrow isOpen={isOpen} />
        </div>}
      </div>
      {isOpen && (
        <div style={{ marginLeft: '16px' }}>
          {subcategory.subsubcategories &&
            subcategory.subsubcategories.map((subSubCategory) => (
              <SidebarSubSubCategory key={subSubCategory.name} name={subSubCategory.name} serverName={subSubCategory.serverName} serverPath={currentServerPath} />
            ))}
        </div>
      )}
    </div>
  );

}