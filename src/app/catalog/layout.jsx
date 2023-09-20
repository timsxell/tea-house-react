import styles from './styles.module.css'
import CatalogSidebar from '../components/CatalogSidebar/CatalogSidebar'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import { CATEGORIES } from '@/constants/constants'

export const metadata = {
    title: 'Tea House',
    description: 'Tea House in Budva',
  }

export default function CatalogLayout({ children }) {
    return (
        <div className={styles.wrapper}>
            <Breadcrumbs />
            <div className={styles.content}>
                <CatalogSidebar categories={CATEGORIES} />
                {children}
            </div>
        </div>
    )
}