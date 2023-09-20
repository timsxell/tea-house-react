'use client'

import Link from "next/link";

import store from '../../public/images/store.jpg'
import catering from '../../public/images/catering.jpg'
import walks from '../../public/images/walks.jpg'
import history from '../../public/images/history.jpg'

import HomepageSection from "./components/HomepageSection/HomepageSection";
import { useGetItemsQuery, usePrefetch } from "@/store/services/itemsApi";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { itemsSlice } from "@/store/features/items";
import { useEffect } from "react";


export default function HomePage({ }) {

    const prefetch = usePrefetch('getItems');
    // const prefetchItems = useCallback(() => prefetch(''), [prefetch]);
    
    useEffect(() => {
        const timer = setTimeout(() => {
          prefetch('');
        }, 2000);
    
        return () => clearTimeout(timer);
      }, [prefetch]);

    return (
        <div >
            <HomepageSection id='firstSection' text={'store'} url={'/catalog'} imgUrl={store} cardTopPos={20} cardLeftPos={10} imgTopPos={25}/>
            <HomepageSection text={'catering'} url={'/catalog'} imgUrl={catering} cardTopPos={60} cardLeftPos={60}/>
            <HomepageSection text={'tea walks'} url={'/catalog'} imgUrl={walks} cardTopPos={20} cardLeftPos={56}/>
            <HomepageSection text={'history'} url={'/catalog'} imgUrl={history} cardTopPos={60} cardLeftPos={10}/>
        </div>
    )
}


