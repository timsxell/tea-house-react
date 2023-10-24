'use client'

import ItemsContainer from '@/app/components/ItemsContainer/ItemsContainer';
import styles from './styles.module.css'
import { useGetItemsQuery } from '@/store/services/itemsApi';
import { ThreeCircles } from 'react-loader-spinner';
import { usePathname } from 'next/navigation';
import CategoriesApi from '@/categories/categories';


export default function CatalogPage({ params }) {

    const pathSegments = usePathname().split('/');
    pathSegments.splice(0, 2);

    let query = CategoriesApi.generateQuery(pathSegments.at(-1), pathSegments.at(-2));
    let limit = 3;
    const { data, isLoading, error } = useGetItemsQuery({ categories: query });

    if (isLoading) {
        return (
            <ThreeCircles innerCircleColor='black' middleCircleColor='#d6d6d6' outerCircleColor='black' />
        )
    }

    else if (error) {
        return (
            <h3>
                {error.message}
            </h3>
        )
    }
    else {
        return (
            <div className={styles.catalogPage}>
                <ItemsContainer items={data.rows} />
            </div>
        )
    }
}