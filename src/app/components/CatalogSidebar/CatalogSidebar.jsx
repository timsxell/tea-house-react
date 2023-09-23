'use client'

import SidebarMainCategory from "../SidebarMainCategory/SidebarMainCategory";
import styles from './styles.module.css'
import { useState } from "react";
import SvgChevron from "../icons/SvgChevron/SvgChevron";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import useDeviceSize from "@/hooks/useDeviceSize";

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

    const [width, height] = useDeviceSize()

    // eslint-disable-next-line
    // const isMobile = window.innerWidth < 500;
    const isMobile = width < 500;
    // eslint-disable-next-line
    // const isDesktopOrTablet = window.innerWidth >= 500;
    const isDesktopOrTablet = width >= 500;

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