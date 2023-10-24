'use client'

import SidebarMainCategory from "../SidebarMainCategory/SidebarMainCategory";
import styles from './styles.module.css'
import { useState } from "react";
import SvgChevron from "../icons/SvgChevron/SvgChevron";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import categories from "@/categories/categories";
import dynamic from "next/dynamic";

export default function CatalogSidebar({
    
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

    const MediaQuery = dynamic(() => import("react-responsive"), {
        ssr: false
    })

    const mainCategories = categories.getOldestChildren()

    return (
        <div>
            <MediaQuery maxWidth={500}>
                <aside className={styles.sidebar} >
                    <div className={styles.svg} onClick={() => setIsOpened(!isOpened)}>
                        <SvgChevron pointTo={isOpened ? "left" : "right"} />
                    </div>
                    {isOpened && mainCategories.map((category) => (
                        <SidebarMainCategory category={category} key={category.name} />
                    ))}
                </aside>
            </MediaQuery>
            <MediaQuery minWidth={500}>
                <aside className={styles.sidebar} >
                    {mainCategories.map((category) => (
                        <SidebarMainCategory category={category} key={category.name} />
                    ))}
                </aside>
            </MediaQuery>
        </div>
    )
}
