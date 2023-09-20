'use client'

import ItemsContainer from '@/app/components/ItemsContainer/ItemsContainer';
import styles from './styles.module.css'
import { useGetItemsQuery } from '@/store/services/itemsApi';
import { ThreeCircles } from 'react-loader-spinner';
import { usePathname } from 'next/navigation';

const categories = [
    {
        name: 'chinese tea',
        serverName: 'chineseTea',
        subcategories: [
            {
                name: 'pu-erh',
                serverName: 'puerh',
                subsubcategories: [
                    { name: "black", serverName: 'black' },
                    { name: "green", serverName: 'green' },
                ]
            },
            {
                name: 'oolong',
                serverName: 'oolong',
                subsubcategories: [
                    { name: "Tieguanyin", serverName: 'tieguanyin' },
                    { name: "Da Hong Pao", serverName: 'daHongPao' },
                ]
            },
            // {
            //     name: 'red tea'
            // },
            // {
            //     name: 'green tea'
            // },
        ]

    },
    {
        name: 'herbal tea',
        serverName: 'herbalTea',
        subcategories: [
            {
                name: 'chamomile',
                serverName: 'chamomile',
            },
            {
                name: 'peppermint',
                serverName: 'peppermint',
            },
            // {
            //     name: 'rooibus'
            // },
            // {
            //     name: 'ivan chai'
            // },
        ]
    },
    // {
    //     name: 'fruit tea'
    // },
    {
        name: 'coffee',
        serverName: 'coffee',
        subcategories: [
            {
                name: 'brazil',
                serverName: 'brazil',
            },
            {
                name: 'colombia',
                serverName: 'colombia',
            },
            // {
            //     name: 'peru'
            // },
            // {
            //     name: 'cuba'
            // },
        ]
    },
    {
        name: 'teaware',
        serverName: 'teaware',
        subcategories: [
            {
                name: 'teapots',
                serverName: 'teapots',
                subsubcategories: [
                    { name: "ceramic", serverName: 'ceramic' },
                    { name: "glass", serverName: 'glass' },
                    { name: "porcelain", serverName: 'porcelain' },
                ]
            },
            {
                name: 'teacups',
                serverName: 'teacups',
            },
            {
                name: 'gaiwans',
                serverName: 'gaiwans',
            },

        ]
    },
    // {
    //     name: 'coffeeware',
    //     subcategories: [
    //         {
    //             name: 'french presses'
    //         },
    //         {
    //             name: 'drippers'
    //         },
    //         {
    //             name: 'grinders'
    //         },
    //         {
    //             name: 'paper filters'
    //         },
    //     ]
    // },

]

export default function CatalogPage({ params }) {

    const [category, subcategory, subsubcategory] = params.categories || [null, null, null];

    const { data, isLoading, error } = useGetItemsQuery('');
    // const {data, isLoading, error } = useGetItemsQuery({category,subcategory,subsubcategory});

    const pathSegments = usePathname().split('/');
    pathSegments.splice(0, 2);
    let lastPathSegment = pathSegments.at(-1);

    const segmentNames = pathSegments.map(segment => segment.split('_').join(' '));

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



        let itemsToRender = data;
        if (segmentNames.length > 0) {
            itemsToRender = data.filter((item) => {
                if (segmentNames.length === 1) {
                    return item.category === lastPathSegment
                }
                else if (segmentNames.length === 2) {
                    return item.subcategory === lastPathSegment
                }
                else if (segmentNames.length === 3) {
                    return item.subsubcategory === lastPathSegment
                }
            })
        }


        return (
            <div className={styles.catalogPage}>
                <ItemsContainer items={itemsToRender} />
            </div>
        )
    }
}