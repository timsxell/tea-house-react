'use client'

import Link from 'next/link';
import styles from './styles.module.css'
import { usePathname } from 'next/navigation'
import SvgChevron from '../icons/SvgChevron/SvgChevron';
import useDeviceSize from '@/hooks/useDeviceSize';

export default function Breadcrumbs({

}) {

    const pathSegments = usePathname().split('/');
    pathSegments.splice(0, 2);

    const segmentNames = pathSegments.map(segment => segment.split('_').join(' '));

    const [width, height] = useDeviceSize()

    // eslint-disable-next-line
    // const isMobile = window.innerWidth < 500;
    const isMobile = width < 500;
    // eslint-disable-next-line
    // const isDesktopOrTablet = window.innerWidth >= 500;
    const isDesktopOrTablet = width >= 500;

    console.log({isMobile, isDesktopOrTablet})

    return (
        <div className={styles.breadcrumbs}>
            <Link style={segmentNames.length === 0 ? { color: 'black', cursor: 'default' } : {}} className={styles.mainLink} href={'/catalog'}>store</Link>
            {(isDesktopOrTablet && segmentNames.length) > 0 && <SvgChevron pointTo='right' width={isMobile ? 20 : 24} height={isMobile ? 20 : 24} />}
            {segmentNames.length > 0 && <Link href={`/catalog/${pathSegments[0]}`} style={segmentNames.length === 1 ? { color: 'black', cursor: 'default' } : {}} className={styles.catCrumb}>{segmentNames[0]}</Link>}

            {(isDesktopOrTablet && segmentNames.length) > 1 && <SvgChevron pointTo='right' width={isMobile ? 20 : 24} height={isMobile ? 20 : 24} />}
            {segmentNames.length > 1 && <Link href={`/catalog/${pathSegments[0]}/${pathSegments[1]}`} style={segmentNames.length === 2 ? { color: 'black', cursor: 'default' } : {}} className={styles.subCrumb}>{segmentNames[1]}</Link>}

            {(isDesktopOrTablet && segmentNames.length) > 2 && <SvgChevron pointTo='right' width={isMobile ? 20 : 24} height={isMobile ? 20 : 24} />}
            {segmentNames.length > 2 && <Link href={`/catalog/${pathSegments[0]}/${pathSegments[1]}/${pathSegments[2]}`} className={styles.subSubCrumb} style={segmentNames.length === 3 ? { color: 'black', cursor: 'default' } : {}}>{segmentNames[2]}</Link>}
        </div>
    )

}