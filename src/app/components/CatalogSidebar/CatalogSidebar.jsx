'use client'

import SidebarMainCategory from "../SidebarMainCategory/SidebarMainCategory";
import styles from './styles.module.css'
import { useState } from "react";
import SvgChevron from "../icons/SvgChevron/SvgChevron";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function CatalogSidebar({
    categories
}) {

    const [isOpened, setIsOpened] = useState(false);
    const pathname = usePathname();


    // Function to close the sidebar
    const closeSidebar = () => {
        setIsOpened(false);
    };

    // Listen for route changes
    useEffect(() => {
        closeSidebar();
    }, [pathname]);

    const isMobile = window.outerWidth < 500;
    const isDesktopOrTablet = window.outerWidth >= 500;

    return (
        <aside className={styles.sidebar} >
            {isMobile && <div className={styles.svg} onClick={() => setIsOpened(!isOpened)}>
                <SvgChevron pointTo={isOpened ? "left" : "right"} />
            </div>}
            {(isDesktopOrTablet || isOpened) && categories.map((category) => (
                <SidebarMainCategory category={category} key={category.name} />
            ))}
        </aside>
    )

}