'use client'

import SidebarMainCategory from "../SidebarMainCategory/SidebarMainCategory";
import styles from './styles.module.css'

// const categories = [
//     {
//         name: 'chinese tea',
//         subcategories:[
//             {
//                 name: 'pu-erh',
//                 subsubcategories:[
//                     {name: "black"},
//                     {name: "green"},
//                 ]
//             },
//             {
//                 name: 'oolong',
//                 subsubcategories:[
//                     {name: "Tieguanyin"},
//                     {name: "Da Hong Pao"},
//                 ]
//             },
//             {
//                 name: 'red tea'
//             },
//             {
//                 name: 'green tea'
//             },
//         ]
        
//     },
//     {
//         name: 'herbal tea',
//         subcategories:[
//             {
//                 name: 'chamomile'
//             },
//             {
//                 name: 'peppermint'
//             },
//             {
//                 name: 'rooibus'
//             },
//             {
//                 name: 'ivan chai'
//             },
//         ]
//     },
//     {
//         name: 'fruit tea'
//     },
//     {
//         name: 'coffee',
//         subcategories:[
//             {
//                 name: 'brazil'
//             },
//             {
//                 name: 'colombia'
//             },
//             {
//                 name: 'peru'
//             },
//             {
//                 name: 'cuba'
//             },
//         ]
//     },
//     {
//         name: 'teaware',
//         subcategories:[
//             {
//                 name: 'teapots',
//                 subsubcategories:[
//                     {name: "ceramic"},
//                     {name: "glass"},
//                     {name: "porcelain"},
//                 ]
//             },
//             {
//                 name:'teacups'
//             },
//             {
//                 name:'gaiwans'
//             },

//         ]
//     },
//     {
//         name: 'coffeeware',
//         subcategories:[
//             {
//                 name: 'french presses'
//             },
//             {
//                 name: 'drippers'
//             },
//             {
//                 name: 'grinders'
//             },
//             {
//                 name: 'paper filters'
//             },
//         ]
//     },
    
// ]

export default function CatalogSidebar({
    categories
}){

    return(
        <aside className={styles.sidebar} >
            {categories.map((category) => (
                <SidebarMainCategory category={category} key={category.name} />
            ))}
        </aside>
    )

}