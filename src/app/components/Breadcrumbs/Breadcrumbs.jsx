'use client'

import Link from 'next/link';
import styles from './styles.module.css'
import { usePathname } from 'next/navigation'
import SvgChevron from '../icons/SvgChevron/SvgChevron';
import dynamic from 'next/dynamic';

export default function Breadcrumbs({

}) {

    const pathSegments = usePathname().split('/');
    pathSegments.splice(0, 2);

    const segmentNames = pathSegments.map(segment => segment.split('_').join(' '));

    const MediaQuery = dynamic(() => import("react-responsive"), {
        ssr: false
    })

    return (
            <div>
                <MediaQuery maxWidth={500}>
                    <div className={styles.breadcrumbs}>
                        <Link style={segmentNames.length === 0 ? { color: 'black', cursor: 'default' } : {}} className={styles.mainLink} href={'/catalog'}>store</Link>
                        {segmentNames.length > 0 && <Link href={`/catalog/${pathSegments[0]}`} style={segmentNames.length === 1 ? { color: 'black', cursor: 'default' } : {}} className={styles.catCrumb}>{segmentNames[0]}</Link>}

                        {segmentNames.length > 1 && <Link href={`/catalog/${pathSegments[0]}/${pathSegments[1]}`} style={segmentNames.length === 2 ? { color: 'black', cursor: 'default' } : {}} className={styles.subCrumb}>{segmentNames[1]}</Link>}

                        {segmentNames.length > 2 && <Link href={`/catalog/${pathSegments[0]}/${pathSegments[1]}/${pathSegments[2]}`} className={styles.subSubCrumb} style={segmentNames.length === 3 ? { color: 'black', cursor: 'default' } : {}}>{segmentNames[2]}</Link>}
                    </div>
                </MediaQuery>
                <MediaQuery minWidth={500}>
                    <div className={styles.breadcrumbs}>
                        <Link style={segmentNames.length === 0 ? { color: 'black', cursor: 'default' } : {}} className={styles.mainLink} href={'/catalog'}>store</Link>
                        {segmentNames.length > 0 && <SvgChevron pointTo='right' width={24} height={24} />}
                        {segmentNames.length > 0 && <Link href={`/catalog/${pathSegments[0]}`} style={segmentNames.length === 1 ? { color: 'black', cursor: 'default' } : {}} className={styles.catCrumb}>{segmentNames[0]}</Link>}

                        {segmentNames.length > 1 && <SvgChevron pointTo='right' width={24} height={24} />}
                        {segmentNames.length > 1 && <Link href={`/catalog/${pathSegments[0]}/${pathSegments[1]}`} style={segmentNames.length === 2 ? { color: 'black', cursor: 'default' } : {}} className={styles.subCrumb}>{segmentNames[1]}</Link>}

                        {segmentNames.length > 2 && <SvgChevron pointTo='right' width={24} height={24} />}
                        {segmentNames.length > 2 && <Link href={`/catalog/${pathSegments[0]}/${pathSegments[1]}/${pathSegments[2]}`} className={styles.subSubCrumb} style={segmentNames.length === 3 ? { color: 'black', cursor: 'default' } : {}}>{segmentNames[2]}</Link>}
                    </div>
                </MediaQuery>
            </div>    
    )
}
